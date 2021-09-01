import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import img1 from '../assets/troyes 2019 003.JPG'
import img2 from '../assets/troyes 2019 019.JPG'
import img3 from '../assets/troyes 2019 027.JPG'
import img4 from '../assets/troyes 2019 061.JPG'
import img5 from '../assets/troyes 2019 062.JPG'
import img6 from '../assets/troyes.jpg'
import img7 from '../assets/004.JPG'
import img8 from '../assets/007.JPG'
import img9 from '../assets/406baule.JPG'
import img10 from '../assets/089chateau.JPG'
import img11 from '../assets/100chateau.JPG'
import img12 from '../assets/112chateau.JPG'
import img13 from '../assets/120chateau.JPG'
import img14 from '../assets/chateau.JPG'
import img15 from '../assets/128chateau.JPG'
import img16 from '../assets/152chateau.JPG'
import img17 from '../assets/DJI_0074saintleu.jpg'
import img18 from '../assets/183deauville.JPG'
import img19 from '../assets/184deauville.JPG'
import img20 from '../assets/2015 jablines.JPG'
import img21 from '../assets/20160521_102308_resized.jpg'
import img22 from '../assets/20160521_102336(0)_resized.jpg'
import img23 from '../assets/20160522_093551.jpg'
import img24 from '../assets/560baule.JPG'
import img25 from '../assets/course-S-2209190008baule.JPG'
import img26 from '../assets/651baule.JPG'
import img27 from '../assets/698baule.JPG'
import img28 from '../assets/course-S-2209190013baule.JPG'
import img29 from '../assets/courseM-2209190001baule.JPG'
import img30 from '../assets/courseM-2209190072baule.JPG'
import img31 from '../assets/courseM-2209190129baule.JPG'
import img32 from '../assets/courseM-2209190130baule.JPG'
import img33 from '../assets/CourseM-220919_FSE8716baule.JPG'
import img34 from '../assets/DJI_0074saintleu.jpg'
import img35 from '../assets/DJI_0081saintleu.jpg'
import img36 from '../assets/IMG-20170903-WA0003.jpg'
import img37 from '../assets/IMG_0116basetorcy.JPG'
import img38 from '../assets/IMG_0121basetorcy.JPG'
import img39 from '../assets/IMG_0347basetorcy.JPG'
import img40 from '../assets/IMG_0353basetorcy.JPG'
import Navigation from '../components/Navigation'
import Header from './Header'


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
            id:1,
            imgSrc: img7,
        },
        {
            id:1,
            imgSrc: img8,
        },
        {
            id:1,
            imgSrc: img9,
        },
        {
            id:1,
            imgSrc: img10,
        },
        {
            id:1,
            imgSrc: img11,
        },
        {
            id:1,
            imgSrc: img12,
        },
        {
            id:1,
            imgSrc: img13,
        },
        {
            id:1,
            imgSrc: img14,
        },
        {
            id:1,
            imgSrc: img15,
        },
        {
            id:1,
            imgSrc: img16,
        },
        {
            id:1,
            imgSrc: img17,
        },
        {
            id:1,
            imgSrc: img18,
        },
        {
            id:1,
            imgSrc: img19,
        },
        {
            id:1,
            imgSrc: img20,
        },
        {
            id:1,
            imgSrc: img21,
        },
        {
            id:1,
            imgSrc: img22,
        },
        {
            id:1,
            imgSrc: img23,
        },
        {
            id:1,
            imgSrc: img24,
        },
        {
            id:1,
            imgSrc: img25,
        },
        {
            id:1,
            imgSrc: img26,
        },
        {
            id:1,
            imgSrc: img27,
        },
        {
            id:1,
            imgSrc: img28,
        },
        {
            id:1,
            imgSrc: img29,
        },
        {
            id:1,
            imgSrc: img30,
        },
        {
            id:1,
            imgSrc: img31,
        },
        {
            id:1,
            imgSrc: img32,
        },
        {
            id:1,
            imgSrc: img33,
        },
        {
            id:1,
            imgSrc: img34,
        },
        {
            id:1,
            imgSrc: img35,
        },
        {
            id:1,
            imgSrc: img36,
        },
        {
            id:1,
            imgSrc: img37,
        },
        {
            id:1,
            imgSrc: img38,
        },
        {
            id:1,
            imgSrc: img39,
        },
        {
            id:1,
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
        </div>
            )
    }

export default Gallery;


 
    
