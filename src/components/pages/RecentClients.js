import React from 'react'
import '../styles';
import { asset3, asset4, asset5, asset6, asset7, asset8, asset9, asset10, asset11, asset12, asset13, asset14 } from '../assets';
import ClientsCard from '../ClientsCard';


const cardData = [
    { id: 0, image:  asset3 , title: "Global Technology", description: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
    { id: 1, image:  asset4 , title: "4th Strongest Bank", description: "Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region." },
    { id: 2, image:  asset5 , title: "Intelligence on wheel", description: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology." },
    { id: 2, image:  asset6 , title: "Energy Producer", description: "One of the world's largest integrated energy and chemicals companies, creating value across the hydrocarbon chain, and delivering societal and economic benefits to people and communities around the globe who rely on the vital energy we supply." },
    { id: 3, image:  asset7 , title: "Cloud-Native Insurance", description: "Insurity, a leading provider of cloud-based software for insurance carriers, brokers, and MGAs. Insurity serves 500+ insurers, with 400+ in the cloud and 330+ in the public cloud. It is trusted by 22 of the top 25 P&C carriers & 7 of the top 10 MGAs." },

    { id: 4, image:  asset8 , title: "The Learning Platform", description: "BYJU'S is India's largest ed-tech company and the creator of India's most loved school learning app. BYJU’S provides India’s best teachers and subject matter experts to teach and clear doubts of the students in an ongoing class." },
    { id: 5, image:  asset9 , title: "Open Source Giant", description: "The Linux Foundation is a non-profit organization that supports the development and growth of the Linux operating system and other open source technologies like NodeJs, Kubernetes, GraphQL, OpenAPI etc." },

    { id: 6, image:  asset10 , title: "Fitness Platform", description: "iFit is a workout app with thousands of on-demand classes to suit a variety of fitness levels. Stream classes using an iFit-compatible exercise machine or access them on your smartphone to work up a sweat in any location." },
    { id: 7, image:  asset11 , title: "Smooth Invoicing", description: "Payyit is a cutting-edge Software as a Service (SAAS) platform designed to revolutionize the invoicing, bookkeeping, payment processing, virtual bank account and debit card management for businesses of all sizes." },
    { id: 8, image:  asset12 , title: "Crypto Bank", description: "The Baanx Platform bridges the gap between fiat and digital asset technology to provide with an API-driven platform to create disruptive, cutting-edge digital products offering Payments, Digital Assets, Loans." },
    { id: 9, image:  asset13 , title: "Mobility Solution", description: "Inchcape is the leading independent multi-brand global automotive distributor, operating in over 40 markets and territories with a portfolio of the world’s leading automotive brands." },
    { id: 10, image: asset14, title: "Global Procurement", description: "Penny is a cloud-based Source-To-Pay system. Penny helps digitize and manage full procurement cycle from Request to approval, Manage RFQs to vendors, Compare quotations, Send POs and even payment." },
]
// -----------------------------------------------------------------------------------------------------------------------------
const RecentClients = () => {
    return (
        <section className="recent-clients gray">
            <div className="centered-container">

                <h2 className="centered-title recent-title">Recent clients</h2>
                <p className="centered-text"> We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
                    World&apos;s 4th Strongest Banking Brand, Automobile & IoT industry </p>
            </div>
            <div className='cards-container'  data-aos="fade-up" data-aos-delay="250">
                {cardData?.map((item) => (
                    <ClientsCard 
                    key={item.id} 
                    image={item.image}                    
                    title={item.title} 
                    description={item.description} />

                ))
                }
            </div>

        </section>)
}

export default RecentClients