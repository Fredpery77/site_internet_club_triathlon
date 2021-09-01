import React from "react";
import Navigation from "../components/Navigation";
import Header from "./Header";
import Img01 from "../assets/course-S-2209190013baule.JPG";
import Img02 from "../assets/100chateau.JPG";
import Img03 from "../assets/183deauville.JPG"


const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Navigation />
            <main>
                <div className="each-slide">
                    <div>
                        <h1>Bienvenue sur le site du Triathlon Club de Villeparisis</h1>
                        <br/>
                        <h2>Le triathlon qu'est ce que c'est ?</h2>
                        <br/>
                        <img src={Img01} className="image" alt=""/><p> Le triathlon consiste à enchaîner dans l'ordre trois activités sportives : natation, cyclisme et course à pied.</p>
                        <br/>
                        <img src={Img02} className="image" alt=""/><p> L'enchaînement s'effectue sans aide extérieure et sans arrêt du chronomètre lors du changement de discipline (transition).</p>
                        <br/>
                        <img src={Img03} className="image" alt=""/><p> Le Triathlon Distance Olympique, Longue Distance, Distance Sprint et Relais mixte sont reconnues comme disciplines de Haut Niveau.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;