import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <nav>
                
                <ul>
                    <li><Link to='/'>Top News</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/Weather'>Weather</Link></li>
                    <li><Link to='/Children'>Children Activities</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;