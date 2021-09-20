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
                <h1>Le bureau 2021/2022 du Triathlon Club de Villeparisis</h1>
                <div className="touslesposts">
                    <div className="post">
                        <h2>Président : Loïc</h2>
                        <img src={Img01} className="postimg" alt="" />
                    </div>
                    <div className="post">
                        <h2>Vice-Président : Bruno</h2>
                        <img src={Img02} className="postimg" alt="" />
                    </div>
                    <div className="post">
                        <h2>Secrétaire : Mika</h2>
                    </div>
                    <div className="post">
                        <h2>Trésorier : Didier</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
export const agenda = () => {
    return (
        <main>
            <Header />
            <Navigation />
            <div className="navclub">
                <h1>Agenda</h1>
                <p>Agenda des courses</p>
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
                <h1>Se licencier</h1>
                <h2>Tarifs pour la saison 2021/2022</h2>
                <p>Cotisation club :</p>
                <p>Vous trouverez sur cette page toutes les informations et la démarche afin de vous licencier chez nous pour le saison 2021-2022, que ce soit pour un renouvellement ou pour une nouvelle inscription.
                    La licence Adulte compétition sera de 170€ pour la saison 2021-2022 avec accès aux 3 créneaux natation par semaine.</p>
                <p>Vous êtes responsable de faire votre demande de licence auprès de la FFTRI dont voici le lien</p>

                <a className="lienpageespacetri" href='https://espacetri.fftri.com/' download>Cliquer ici pour accéder à la page Espace Tri 2.0 de la Fédération</a>
                <br />
                <br />

                <a className="lienficheinscription" href='/src/assets/fiche inscription saison 2021-2022.doc' download>Cliquer ici pour télécharger la fiche d'inscription</a>
                <h2>Jours et horaires créneaux piscine</h2>
                <table className="tableauhorairepiscine">
                    <br />
                    <tr>
                        <th>Lundi 20h30-21h30</th>
                        <th>Mercredi 20h/21h30</th>
                        <th>Dimanche 9h/10h</th>
                    </tr>

                </table>
            </div>
        </main>
    )
}

