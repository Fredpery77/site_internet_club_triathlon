import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';
import Img01 from '../assets/loicroullier.jpg';
import Img02 from '../assets/089chateau.JPG';
import Footer from './Footer';

const Bureau = () => {
    return (
            <main>
                <Header />
                <Navigation />
                <div className="navclub">
                    <h1>Le bureau 2021/2022 du Triathlon Club de Villeparisis</h1>
                    <div className="touslesposts">
                        <div class="card">
                            <img src={Img01} class="card-img-top width:18rem" alt="" />
                            <div class="card-body">
                                <h2 class="card-text">Président Loïc.</h2>
                            </div>
                        </div>
    
                        <div class="card">
                            <img src={Img02} class="card-img-top width:18rem" alt="" />
                            <div class="card-body">
                                <h2 class="card-text">Vice-Président Bruno.</h2>
                            </div>
                        </div>
    
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-text">Secrétaire Micka.</h2>
                            </div>
                        </div>
    
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-text">Trésorier Didier.</h2>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <br />
                <br />
                < Footer />
            </main>
    )
};

export default Bureau;
