import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';
import Footer from './Footer';

const Agenda = () => {
    return (
            <main>
                <Header />
                <Navigation />
                <div className="navclub">
                    <h1>Agenda</h1>
                    <p>Agenda des courses</p>
                </div>
                <br />
                <br />
                < Footer />
            </main>
        )
};

export default Agenda;