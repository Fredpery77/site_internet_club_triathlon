/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import img1 from '../assets/troyes 2019 062-compressed.jpg'
import img2 from '../assets/troyes 2019 019-compressed.jpg'
import img3 from '../assets/troyes 2019 027.JPG'
import img4 from '../assets/troyes 2019 061.JPG'
import img5 from '../assets/troyes 2019 062.JPG'
import img6 from '../assets/troyes-compressed.jpg'
import img7 from '../assets/004-compressed.jpg'
import img8 from '../assets/007-compressed.jpg'
import img9 from '../assets/406baule-compressed.jpg'
import img10 from '../assets/089chateau-compressed.jpg'
import img11 from '../assets/100chateau-compressed.jpg'
import img12 from '../assets/112chateau-compressed.jpg'
import img13 from '../assets/120chateau-compressed.jpg'
import img14 from '../assets/chateau-compressed.jpg'
import img15 from '../assets/128chateau-compressed.jpg'
import img16 from '../assets/152chateau-compressed.jpg'
import img17 from '../assets/DJI_0074saintleu-compressed.jpg'
import img18 from '../assets/183deauville-compressed.jpg'
import img19 from '../assets/184deauville-compressed.jpg'
import img20 from '../assets/2015 jablines-compressed.jpg'
import img21 from '../assets/20160521_102308_resized-compressed.jpg'
import img22 from '../assets/20160521_102336(0)_resized-compressed.jpg'
import img23 from '../assets/20160522_093551-compressed.jpg'
import img24 from '../assets/560baule-compressed.jpg'
import img25 from '../assets/course-S-2209190008baule-compressed.jpg'
import img26 from '../assets/651baule.JPG'
import img27 from '../assets/698baule.JPG'
import img28 from '../assets/course-S-2209190013baule-compressed.jpg'
import img29 from '../assets/courseM-2209190001baule.JPG'
import img30 from '../assets/courseM-2209190072baule-compressed.jpg'
import img31 from '../assets/courseM-2209190129baule-compressed.jpg'
import img32 from '../assets/courseM-2209190130baule-compressed.jpg'
import img33 from '../assets/CourseM-220919_FSE8716baule-compressed.jpg'
import img34 from '../assets/DJI_0074saintleu-compressed.jpg'
import img35 from '../assets/DJI_0081saintleu-compressed.jpg'
import img36 from '../assets/IMG-20170903-WA0003-compressed.jpg'
import img37 from '../assets/IMG_0116basetorcy-compressed.jpg'
import img38 from '../assets/IMG_0121basetorcy-compressed.jpg'
import img39 from '../assets/IMG_0347basetorcy-compressed.jpg'
import img40 from '../assets/IMG_0353basetorcy-compressed.jpg'
import Navigation from '../components/Navigation'
import Header from './Header'
import Footer from './Footer'


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 1,
            imgSrc: img2,
        },
        {
            id: 1,
            imgSrc: img3,
        },
        {
            id: 1,
            imgSrc: img4,
        },
        {
            id: 1,
            imgSrc: img5,
        },
        {
            id: 1,
            imgSrc: img6,
        },
        {
            id: 1,
            imgSrc: img7,
        },
        {
            id: 1,
            imgSrc: img8,
        },
        {
            id: 1,
            imgSrc: img9,
        },
        {
            id: 1,
            imgSrc: img10,
        },
        {
            id: 1,
            imgSrc: img11,
        },
        {
            id: 1,
            imgSrc: img12,
        },
        {
            id: 1,
            imgSrc: img13,
        },
        {
            id: 1,
            imgSrc: img14,
        },
        {
            id: 1,
            imgSrc: img15,
        },
        {
            id: 1,
            imgSrc: img16,
        },
        {
            id: 1,
            imgSrc: img17,
        },
        {
            id: 1,
            imgSrc: img18,
        },
        {
            id: 1,
            imgSrc: img19,
        },
        {
            id: 1,
            imgSrc: img20,
        },
        {
            id: 1,
            imgSrc: img21,
        },
        {
            id: 1,
            imgSrc: img22,
        },
        {
            id: 1,
            imgSrc: img23,
        },
        {
            id: 1,
            imgSrc: img24,
        },
        {
            id: 1,
            imgSrc: img25,
        },
        {
            id: 1,
            imgSrc: img26,
        },
        {
            id: 1,
            imgSrc: img27,
        },
        {
            id: 1,
            imgSrc: img28,
        },
        {
            id: 1,
            imgSrc: img29,
        },
        {
            id: 1,
            imgSrc: img30,
        },
        {
            id: 1,
            imgSrc: img31,
        },
        {
            id: 1,
            imgSrc: img32,
        },
        {
            id: 1,
            imgSrc: img33,
        },
        {
            id: 1,
            imgSrc: img34,
        },
        {
            id: 1,
            imgSrc: img35,
        },
        {
            id: 1,
            imgSrc: img36,
        },
        {
            id: 1,
            imgSrc: img37,
        },
        {
            id: 1,
            imgSrc: img38,
        },
        {
            id: 1,
            imgSrc: img39,
        },
        {
            id: 1,
            imgSrc: img40,
        }


    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');
    const getimg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);

    }

    return (
        <div>
            
            <Header />
            <Navigation />
            <br />
            <br />
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getimg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
            < Footer />
        </div>
    )
}

export default Gallery;




