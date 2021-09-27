import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';


const About = () => {
    return (
        <div>
            
            <Header />
            <Navigation />
            <h1>À propos</h1>
            <br />
            <p>Le Triathlon Club Villeparisis (TCV) est une association sportive loi 1901 qui tend à promouvoir la pratique du triathlon pour tous.</p>
            <br />
            <p>Étant une association, le TCV fonctionne sur le principe du bénévolat, tant pour l'organisation de la vie du club (bureau) que pour la mise en place de divers évènements au cours de l'année.</p>
            <br />
            <p>Le TCV c'est également et avant tout un club familial et des moments conviviaux tels que Paris By Night, galette des rois, stage début de saison:</p>
        </div>
    );
};

export default About;