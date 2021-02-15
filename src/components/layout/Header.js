import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
    <div>
    <nav className="navbar navbar-light bg-danger mb-5">
    <div className="container">
    <div className="navbar-header">
    <Link className="navbar-brand text-white text-lg brand-text" to="/">
    Movie-idmb</Link>
    <ul className="navbar-nav ml-auto text-light d-inline-block">
    <li className="nav-item d-inline-block mr-4">
    <i className="fab fa-imdb fa-5x" id="imdb-logo" /> </li>
    <li className="nav-item d-inline-block mr-4">
    <i className="fab fa-react fa-5x" id="react-logo" />
    </li>
    </ul>
    </div></div>
    </nav>
     </div>
   );
 }

export default Header;
