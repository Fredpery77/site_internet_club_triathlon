import React from 'react';
import Navigation from '../components/Navigation';
import Header from './Header';
import Footer from './Footer';

const Resultats = () => {

    return (
        <main>
            <Header />
            <Navigation />
            <div>
                <br />
                <h1>Résultats 2021</h1>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Lieu</th>
                            <th>Epreuve</th>
                            <th>Prenom et Nom</th>
                            <th>Temps Total</th>
                            <th>Temps Natation</th>
                            <th>Temps Vélo</th>
                            <th>Temps CAP</th>
                            <th>Classement</th>
                            <th>Participants</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody className="selection">
                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Franck B</td><td>02:44:12</td><td>00:34:33</td><td>01:17:06</td>
                        <td>00:52:33</td><td>409</td><td>758</td><td>34</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Eric L</td><td>02:45:30</td><td>00:34:42</td><td>01:20:12</td>
                        <td>00:50:37</td><td>427</td><td>758</td><td>17</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Dominique D.M</td><td>02:42:49</td><td>00:37:07</td><td>01:17:12</td>
                        <td>00:48:31</td><td>383</td><td>758</td><td>3</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Nicolas C</td><td>02:46:17</td><td>00:34:05</td><td>01:21:59</td>
                        <td>00:50:04</td><td>439</td><td>758</td><td>36</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Grégory K</td><td>02:40:07</td><td>00:37:08</td><td>01:17:11</td>
                        <td>00:45:49</td><td>344</td><td>758</td><td>41</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        <td>Nicolas F</td><td>02:36:18</td><td>00:31:53</td><td>01:19:20</td>
                        <td>00:45:06</td><td>275</td><td>758</td><td>36</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon S</td>
                        <td>Patrick B</td><td>01:40:50</td><td>00:20:52</td><td>00:49:35</td>
                        <td>00:30:24</td><td>902</td><td>1000</td><td>280</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon S</td>
                        <td>Emilie G-R</td><td>01:40:50</td><td>00:20:56</td><td>00:49:31</td>
                        <td>00:30:24</td><td>903</td><td>1000</td><td>39</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon S</td>
                        <td>Adèle D-M</td><td>01:40:50</td><td>00:20:59</td><td>00:49:27</td>
                        <td>00:30:25</td><td>905</td><td>1000</td><td>40</td></tr>
                      
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            < Footer />
        </main>
    )
};

export default Resultats;