import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div className='flex flex-col items-center'>
            <Banner></Banner>
            <Service></Service>
            {/* <ContactUs></ContactUs>  */}
        </div>
    );
};

export default Home;