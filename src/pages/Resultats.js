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
                <h1>Résultats</h1>
                <table class="avectri">
                    <thead>
                        <tr>
                            <th data-tri="1" class="selection" data-type="num">Date</th>
                            <th>Lieu</th>
                            <th>Epreuve</th>
                            <th>Nom et Prenom</th>
                            <th data-tri="1" class="selection" data-type="num">Temps Total</th>
                            <th data-tri="1" class="selection" data-type="num">Temps Natation</th>
                            <th data-tri="1" class="selection" data-type="num">Temps Vélo</th>
                            <th data-tri="1" class="selection" data-type="num">Temps Course à pieds</th>
                            <th data-tri="1" class="selection" data-type="num">Classement</th>
                            <th data-tri="1" class="selection" data-type="num">Participants</th>
                            <th data-tri="1" class="selection" data-type="num">Classement Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Franck B<td>02:44:12</td><td>00:34:33</td><td>01:17:06</td>
                        00:52:33<td>409</td><td>758</td><td>34</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Eric L<td>02:45:30</td><td>00:34:42</td><td>01:20:12</td>
                        00:50:37<td>427</td><td>758</td><td>17</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Dominique D.M<td>02:42:49</td><td>00:37:07</td><td>01:17:12</td>
                        00:48:31<td>383</td><td>758</td><td>3</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Nicolas C<td>02:46:17</td><td>00:34:05</td><td>01:21:59</td>
                        00:50:04<td>439</td><td>758</td><td>36</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Grégory K<td>02:40:07</td><td>00:37:08</td><td>01:17:11</td>
                        00:45:49<td>344</td><td>758</td><td>41</td></tr>

                        <tr><td>19/09/2021</td><td>La Baule</td><td>Triathlon M</td>
                        Nicolas F<td>02:36:18</td><td>00:31:53</td><td>01:19:20</td>
                        00:45:06<td>275</td><td>758</td><td>36</td></tr>
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