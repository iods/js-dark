import react from 'react';
import './footer.css';

// Footer component
const Footer = () => {

  return (
    <footer className="fixed bottom-0 inset-x-0 flex justify-between">
      <div className="ml-9">
        <a href="#" className="inline-block px-3 py-5 text-center hover:text-blue-950 transition duration-300">
          Link One
        </a>
        <a href="#" className="inline-block px-3 py-5 text-center hover:text-blue-600">
          Link Two
        </a>
        <a href="#" className="inline-block px-3 py-5 text-center hover:text-blue-600">
          Link Three
        </a>
        <a href="#" className="inline-block px-3 py-5 text-center hover:text-blue-600">
          Link Four
        </a>
      </div>
    </footer>
  )
}

// export Footer component
export default Footer;
