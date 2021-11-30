import React from 'react';
import Logo  from '../assets/logotcv.png'
import img01 from '../assets/004.JPG'

const Header = () => {
    return (
        <header>
            <main>
                <div className="banner-container w-auto mt-2 p-2">
                    <img src={Logo} className="logo" alt="" />
                    <img src={img01} className="photo" alt="labaule2021" />
                </div>
            </main>
        </header>
    );
};

export default Header;