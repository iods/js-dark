import react from 'react';
import './header.css';
import { one, two, three } from '../../data/constants.js';

// Header component
const Header = () => {

  return (
    <header className="drop-shadow-sm">
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-400 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-12">
            <span className="font-bold text-2xl">
              DarkJS [Javascript Library]
            </span>
          </div>
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="text-sm sm:flex-grow">
              <a href="#" className="inline-block mt-1 mr-6 text-gray-800 hover:text-white">
                {one}
              </a>
              <a href="#" className="inline-block mt-1 mr-6 text-gray-800 hover:text-white">
                {two}
              </a>
              <a href="#" className="inline-block mt-1 mr-6 text-gray-800 hover:text-white">
                {three}
              </a>
              <a href="#" className="inline-block mt-1 md:mt-0 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white">
                Four
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

// export Header component
export default Header;
