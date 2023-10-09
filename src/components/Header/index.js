import react from 'react';
import './header.css';
import { title } from '../../data/constants.js';

// Header component
const Header = () => {

  return (
    <header>
      <div>
        <h1>{title}</h1>
      </div>
    </header>
  )
}

// export Header component
export default Header;
