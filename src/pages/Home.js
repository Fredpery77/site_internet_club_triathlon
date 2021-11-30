import Navigation from "../components/Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Navigation />
            <main>
                <div className="home-main">
                    <div className="main-content">
                        <br />
                        <h1>Bienvenue sur le site du Triathlon Club de Villeparisis</h1>
                    </div>
                    <br />
                    <div className="each-slide">
                        <div>
                            <p>Le Triathlon Club de Villeparisis est un club familial ou il fait bon vivre et pratiquer ce sport dans la convivialité et l'esprit de partage.</p>
                            <p>Nous avons un effectif de 40 licenciés cette année.</p>
                            <p>Nous sommes présent sur différentes courses dans la France entière.Cela va du format S à l'IronMan</p>

                            <p> Le triathlon consiste à enchaîner dans l'ordre trois activités sportives : natation, cyclisme et course à pied.</p>
                           <Slider />

                            <p> L'enchaînement s'effectue sans aide extérieure et sans arrêt du chronomètre lors du changement de discipline (transition).</p>
                            <p> Le Triathlon Distance Olympique, Longue Distance, Distance Sprint et Relais mixte sont reconnues comme disciplines de Haut Niveau.</p>

                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Home;
