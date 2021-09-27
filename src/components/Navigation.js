import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        
        <div className="navigation navbar navbar-expand-sm navbar-light p-2 text-dark bg-opacity-10">

            <ul className="navbar-nav nav-pills nav-justified flex-column flex-sm-row">
                <NavLink exact to="/" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active" aria-current="page">
                    <li>Accueil</li>
                </NavLink>
                        <NavLink exact to="/bureau" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                            <li> Le bureau 2021 2022</li>
                        </NavLink>
                        <NavLink exact to="/agenda" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                            <li> Agenda</li>
                        </NavLink>
                        <NavLink to="/resultats" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                            <li>Résultats</li>
                        </NavLink>
                        <NavLink exact to="/licencier" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                            <li>Se licencier</li>
                        </NavLink>
                        <NavLink to="/galerie-photos" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                             <li>Galerie photos</li>
                        </NavLink>
                        <NavLink to="/nous-contacter" className="hover flex-sm-fill text-sm-center" activeClassName="nav-link active">
                            <li>Nous contacter</li>
                        </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
