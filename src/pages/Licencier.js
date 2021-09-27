import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';
import Footer from './Footer';
import Fichier from '../assets/fiche inscription saison 2021-2022.doc';

const Licencier = () => {
    return (
        <main>
            <Header />
            <Navigation />
            <div className="navclub">
                <h1>Se licencier</h1>
                <h2>Tarifs pour la saison 2021/2022</h2>
                <p>Vous trouverez sur cette page toutes les informations et la démarche afin de vous licencier chez nous pour le saison 2021-2022, que ce soit pour un renouvellement ou pour une nouvelle inscription.<br />
                    La licence Adulte compétition sera de 170€ pour la saison 2021-2022 avec accès aux 3 créneaux natation par semaine.
                    Pour les moins de 18 ans c'est 150€ (avec attestation parentale).
                    Nous avons un tarif "famille nombreuse" qui s'applique aux familles de 3 personnes et plus. Le 1er inscrit paye 170€, les 2(ou 3...) suivants payent 150€.</p>
                <p>Vous êtes responsable de faire votre demande de licence auprès de la FFTRI dont voici le lien :</p>

                <a className="lienpageespacetri" href='https://espacetri.fftri.com/' target="_blanck" download>Cliquer ici pour accéder à la page Espace Tri 2.0 de la Fédération</a>
                <br />
                <br />

                <a className="lienficheinscription" href={Fichier} download>Cliquer ici pour télécharger la fiche d'inscription</a>
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
            <br />
            <br />
            < Footer />
        </main>
    );
};

export default Licencier;