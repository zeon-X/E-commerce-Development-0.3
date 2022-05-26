import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div
            className='flex justify-center banner_container'>

            <div style={{ fontFamily: "Smooch", borderRadius: "9px" }} className='_content banner grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-right'>
                <p className='text-5xl text-white'>

                </p>
                <p className='text-5xl w-4/5' style={{ marginTop: "50%", color: "#ee262e" }}>
                    We Create Memories
                    <span className='text-sm text-white inline-block'>
                        Looking for a wedding photographer? We approach weddings in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively.
                    </span>
                </p>
            </div>


        </div>
    );
};

export default Banner;