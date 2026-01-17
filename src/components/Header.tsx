import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/#services" onClick={() => window.scrollTo(0, document.getElementById('services').offsetTop)}>Services</Link></li>
                    <li><Link to="/#mini-missions">Mini-Missions</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;