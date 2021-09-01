import React from 'react';
import Logo  from '../assets/logotcv.png'

const Header = () => {
    return (
        <header>
            <main>
                <div className="banner-container">
                    <img src={Logo} className="logo" alt="" />
                </div>
            </main>
        </header>
    );
};

export default Header;