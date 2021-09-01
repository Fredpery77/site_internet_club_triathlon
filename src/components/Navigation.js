import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active">
                À propos
            </NavLink>
            <NavLink exact to="galerie-photos" activeClassName="nav-active">
                Galerie photos
            </NavLink>
            <NavLink exact to="nous-contacter" activeClassName="nav-active">
                Nous contacter
            </NavLink>
        </div>
    );
};

export default Navigation;
