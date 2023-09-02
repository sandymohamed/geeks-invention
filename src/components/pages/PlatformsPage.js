import React from 'react'
import '../styles';
import { asset15, asset16, asset17, asset18, asset19, asset20, } from '../assets';
import IconsCard from '../IconsCard';


const cardData = [
    { id: 0, image: asset15, title: "Web", },
    { id: 1, image: asset16, title: "iOS", },
    { id: 2, image: asset17, title: "Android", },
    { id: 10, image: asset18, title: "Hybrid", },
    { id: 10, image: asset19, title: "Wearables", },
    { id: 10, image: asset20, title: "TV", },
]
// -----------------------------------------------------------------------------------------------------------------------------
const PlatformsPage = () => {
    return (
        <section className=" platform-page">
            <div className="centered-container" style={{ width: '100%' }}>

                <h2 className="centered-title platform-title">Software for modern platforms</h2>
                <p className="centered-text"> We develop applications for mobile, web, wearables, and TV.</p>

                <div className=' icons-container'>
                    {cardData?.map((item) => (
                        <IconsCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                        />

                    ))
                    }
                </div>
                <a className='orange-btn ' href='#'> <span>see full case study</span> </a>
            </div>
        </section>)
}

export default PlatformsPage