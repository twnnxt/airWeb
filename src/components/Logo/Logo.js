import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import webLogo from '../../assets/images/logo.png';

const Logo = props => (
    <Navbar.Brand>
        <Link to="/">
            <img src={webLogo} alt="logo" style={{width: '50px', height: '50px'}}/>
        </Link>
    </Navbar.Brand>

)

export default Logo;