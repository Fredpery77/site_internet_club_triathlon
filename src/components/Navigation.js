import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink exact to="/" className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>
                <li className="nav-votreclub">Votre club
                    <ul className="nav-pages">
                        <NavLink exact to="/bureau" className="hover" activeClassName="nav-active">
                            <li> Le bureau 2021 2022</li>
                        </NavLink>
                        <NavLink exact to="/reglement" className="hover" activeClassName="nav-active">
                            <li>Réglement intérieur</li>
                        </NavLink>
                        <NavLink exact to="/licencier" className="hover" activeClassName="nav-active">
                            <li>Se licencier</li>
                        </NavLink>
                    </ul>
                </li>

                        <NavLink to="/galerie-photos" className="hover" activeClassName="nav-active">
                             <li>Galerie photos</li>
                        </NavLink>
                        <NavLink to="/nous-contacter" className="hover" activeClassName="nav-active">
                            <li>Nous contacter</li>
                        </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
