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
                <h1>Tous les résultats de l'année 2021</h1>
                <h3>Triathlon de la Baule 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
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
                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Franck B</td><td>02:44:12</td><td>00:34:33</td><td>01:17:06</td>
                        <td>00:52:33</td><td>409</td><td>758</td><td>34</td></tr>

                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Eric L</td><td>02:45:30</td><td>00:34:42</td><td>01:20:12</td>
                        <td>00:50:37</td><td>427</td><td>758</td><td>17</td></tr>

                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Dominique D.M</td><td>02:42:49</td><td>00:37:07</td><td>01:17:12</td>
                        <td>00:48:31</td><td>383</td><td>758</td><td>3</td></tr>

                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Nicolas C</td><td>02:46:17</td><td>00:34:05</td><td>01:21:59</td>
                        <td>00:50:04</td><td>439</td><td>758</td><td>36</td></tr>

                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Grégory K</td><td>02:40:07</td><td>00:37:08</td><td>01:17:11</td>
                        <td>00:45:49</td><td>344</td><td>758</td><td>41</td></tr>

                        <tr><td>19/09/2021</td><td>Tri M</td>
                        <td>Nicolas F</td><td>02:36:18</td><td>00:31:53</td><td>01:19:20</td>
                        <td>00:45:06</td><td>275</td><td>758</td><td>36</td></tr>

                        <tr><td>19/09/2021</td><td>Tri S</td>
                        <td>Patrick B</td><td>01:40:50</td><td>00:20:52</td><td>00:49:35</td>
                        <td>00:30:24</td><td>902</td><td>1000</td><td>280</td></tr>

                        <tr><td>19/09/2021</td><td>Tri S</td>
                        <td>Emilie G-R</td><td>01:40:50</td><td>00:20:56</td><td>00:49:31</td>
                        <td>00:30:24</td><td>903</td><td>1000</td><td>39</td></tr>

                        <tr><td>19/09/2021</td><td>Tri S</td>
                        <td>Adèle D-M</td><td>01:40:50</td><td>00:20:59</td><td>00:49:27</td>
                        <td>00:30:25</td><td>905</td><td>1000</td><td>40</td></tr>
                      
                    </tbody>
                </table>
            </div>
            <div>
                <br />
                <h3>Triathlon de Saint Jean de Monts 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
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
                    <tbody className="w-25 selection">
                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Franck B</td><td>02:23:29</td><td>00:30:30</td><td>01:03:49</td>
                        <td>00:49:10</td><td>218</td><td>292</td><td>26</td></tr>

                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Eric L</td><td>02:34:23</td><td>00:32:17</td><td>01:12:42</td>
                        <td>00:49:23</td><td>260</td><td>292</td><td>16</td></tr>

                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Dominique D.M</td><td>02:38:59</td><td>00:39:12</td><td>01:07:40</td>
                        <td>00:52:06</td><td>274</td><td>292</td><td>4</td></tr>

                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Jean-Paul A</td><td>02:38:57</td><td>00:39:16</td><td>01:07:42</td>
                        <td>00:51:58</td><td>271</td><td>292</td><td>36</td></tr>

                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Grégory K</td><td>02:38:57</td><td>00:39:09</td><td>01:07:58</td>
                        <td>00:52:06</td><td>272</td><td>292</td><td>39</td></tr>

                        <tr><td>27/06/2021</td><td>Tri M</td>
                        <td>Emilie G-R</td><td>02:38:58</td><td>00:39:14</td><td>01:07:37</td>
                        <td>00:52:06</td><td>273</td><td>292</td><td>1</td></tr>

                        <tr><td>26/06/2021</td><td>Tri S</td>
                        <td>Patrick B</td><td>01:43:36</td><td>00:24:58</td><td>00:49:10</td>
                        <td>00:29:27</td><td>393</td><td>399</td><td>8</td></tr>

                        <tr><td>26/06/2021</td><td>Tri S</td>
                        <td>Dominique D-M</td><td>01:43:36</td><td>00:24:55</td><td>00:49:12</td>
                        <td>00:29:27</td><td>394</td><td>399</td><td>5</td></tr>

                        <tr><td>26/06/2021</td><td>Tri S</td>
                        <td>Grégory K</td><td>01:43:38</td><td>00:25:11</td><td>00:49:04</td>
                        <td>00:29:22</td><td>395</td><td>399</td><td>28</td></tr>

                        <tr><td>26/06/2021</td><td>Tri S</td>
                        <td>Adèle D-M</td><td>01:43:38</td><td>00:24:58</td><td>00:49:14</td>
                        <td>00:29:26</td><td>396</td><td>399</td><td>3</td></tr>
                      
                    </tbody>
                </table>
            </div>
            <div>
                <br /> 
                <h3>Boffi Fifty Festival des Templiers Millau Trail'Origin 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Epreuve</th>
                            <th>Prenom et Nom</th>
                            <th>Temps CAP</th>
                            <th>Classement</th>
                            <th>Participants</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody className="selection">
                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Patrick B</td><td>10:41:56</td><td>500</td><td>536</td><td>63</td></tr>

                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Eric L</td><td>10:41:57</td><td>515</td><td>536</td><td>67</td></tr>

                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Dominique D.M</td><td>10:41:56</td><td>513</td><td>536</td><td>10</td></tr>

                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Emilie G.R</td><td>09:41:41</td><td>432</td><td>536</td><td>24</td></tr>

                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Grégory K</td><td>10:41:57</td><td>515</td><td>536</td><td>167</td></tr>

                        <tr><td>23/10/2021</td><td>47 KM</td>
                        <td>Adèle D.M</td><td>10:41:56</td><td>513</td><td>536</td><td>12</td></tr>
                     
                    </tbody>
                </table>
            </div>
            <div>
                <br /> 
                <h3>Les Bacchantes Paris 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Epreuve</th>
                            <th>Prenom et Nom</th>
                            <th>Temps CAP</th>
                            <th>Classement</th>
                            <th>Participants</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody className="selection">
                        
                        <tr><td>11/11/2021</td><td>10 KM</td>
                        <td>Dominique D.M</td><td>00:44:41</td><td>57</td><td>451</td><td>2</td></tr>

                        <tr><td>11/11/2021</td><td>10 KM</td>
                        <td>Emilie G.R</td><td>00:46:36</td><td>79</td><td>451</td><td>4</td></tr>

                        <tr><td>11/11/2021</td><td>10 KM</td>
                        <td>Grégory K</td><td>00:44:41</td><td>56</td><td>451</td><td>8</td></tr>

                        <tr><td>11/11/2021</td><td>10 KM</td>
                        <td>Jean-Paul A</td><td>00:51:02</td><td>145</td><td>451</td><td>14</td></tr>
                     
                    </tbody>
                </table>
            </div>
            <div>
                <br /> 
                <h3>Les Foulées Nanteuillaises 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Epreuve</th>
                            <th>Prenom et Nom</th>
                            <th>Temps CAP</th>
                            <th>Classement</th>
                            <th>Participants</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody className="selection">
                        
                        <tr><td>12/06/2021</td><td>11 KM</td>
                        <td>Dominique D.M</td><td>00:56:15</td><td>36</td><td>127</td><td>3</td></tr>

                        <tr><td>12/06/2021</td><td>11 KM</td>
                        <td>Emilie G.R</td><td>01:02:01</td><td>69</td><td>127</td><td>6</td></tr>

                        <tr><td>12/06/2021</td><td>11 KM</td>
                        <td>Eric L</td><td>01:13:02</td><td>116</td><td>127</td><td>10</td></tr>

                        <tr><td>12/06/2021</td><td>11 KM</td>
                        <td>Jean-Paul A</td><td>01:02:01</td><td>70</td><td>127</td><td>10</td></tr>

                        <tr><td>12/06/2021</td><td>11 KM</td>
                        <td>Nicolas C</td><td>00:58:22</td><td>49</td><td>127</td><td>7</td></tr>
                     
                    </tbody>
                </table>
            </div>
            <div>
                <br /> 
                <h3>EcoTrail 30 km 2021</h3>
                <br />
                <table border="1" align="center" className="table table-striped table-sm table-responsive">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Epreuve</th>
                            <th>Prenom et Nom</th>
                            <th>Temps CAP</th>
                            <th>Classement</th>
                            <th>Participants</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody className="selection">
                        
                        <tr><td>03/07/2021</td><td>30 KM</td>
                        <td>Dominique D.M</td><td>03:35:39</td><td>944</td><td>1484</td><td>3</td></tr>

                        <tr><td>03/07/2021</td><td>30 KM</td>
                        <td>Emilie G.R</td><td>03:35:38</td><td>941</td><td>1484</td><td>25</td></tr>

                        <tr><td>03/07/2021</td><td>30 KM</td>
                        <td>Adèle D.M</td><td>04:35:35</td><td>1454</td><td>1484</td><td>16</td></tr>

                        <tr><td>03/07/2021</td><td>30 KM</td>
                        <td>Jean-Paul A</td><td>03:35:38</td><td>941</td><td>1484</td><td>70</td></tr>

                        <tr><td>03/07/2021</td><td>30 KM</td>
                        <td>Nicolas C</td><td>03:35:38</td><td>941</td><td>1484</td><td>70</td></tr>
                     
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