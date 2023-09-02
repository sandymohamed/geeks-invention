import React from 'react'
import '../styles';
import { asset21, asset22, asset23, asset24, asset25, asset26, } from '../assets';
import IconsCard from '../IconsCard';


const cardData = [
    [
        { id: 0, image: asset21, title: "Agile approach ", },
        { id: 1, image: asset22, title: "Deep tech expertise", },
        { id: 2, image: asset23, title: "Personal commitment", },
    ],
    [

        { id: 3, image: asset24, title: "Regular reporting", },
        { id: 4, image: asset25, title: "Time tracking", },
        { id: 5, image: asset26, title: "Scalability", },
    ]
]
// -----------------------------------------------------------------------------------------------------------------------------
const DedicatedTeams = () => {
    return (
        <section
            className="recent-clients detected gray"
            style={{ width: '100%' }}

        >
            <div className="centered-container" style={{ width: '100%' }}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500">

                <h2 className="centered-title recent-title">Only dedicated teams</h2>
                <p className="centered-text detected-text"> Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>



                <div className='cards-container detected-container' >
                    <div className='first'>

                        {cardData[0]?.map((item) => (
                            <IconsCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                t={item.id}
                                />
                                
                                ))
                            }
                    </div>
                    <div className='last'>

                        {cardData[1]?.map((item) => (
                            <IconsCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            t={item.id}
                            />

                        ))
                        }
                    </div>
                </div>
                <a className='orange-btn ' href='#'> <span>see full case study</span> </a>
            </div>
        </section>)
}

export default DedicatedTeams