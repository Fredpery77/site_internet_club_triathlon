import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';
import Img01 from '../assets/loicroullier.jpg';
import Img02 from '../assets/089chateau.JPG';

export const bureau = () => {
    return (
        <main>
            <Header />
            <Navigation />
            <div className="navclub">
                <h1>Le bureau du Triathlon Club de Villeparisis</h1>
                <div className="touslesposts">
                    <div className="post">
                        <h2>Président : Loïc Roullier</h2>
                        <img src={Img01} className="postimg" alt="" />
                    </div>
                    <div className="post">
                        <h2>Vice-Président : Bruno Marchebout</h2>
                        <img src={Img02} className="postimg" alt="" />
                    </div>
                    <div className="post">
                        <h2>Secrétaire : Mika</h2>
                    </div>
                    <div className="post">
                        <h2>Trésorier : Didier Bourgeois</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
export const reglement = () => {
    return (
        <main>
            <Header />
            <Navigation />
            <div className="navclub">
                <h1>Réglement intérieur</h1>
                <p>document pour se licencier</p>
                <a href='/public/inscription base Torcy 2018.xlsx' download>Click to download</a>
            </div>
        </main>
    )
}
export const licencier = () => {
    return (
        <main>
            <Header />
            <Navigation />
            <div className="navclub">
                Se licencier
            </div>
        </main>
    )
}

