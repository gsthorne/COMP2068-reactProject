import React from 'react';
import { Link, Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/data">Data</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navigation;