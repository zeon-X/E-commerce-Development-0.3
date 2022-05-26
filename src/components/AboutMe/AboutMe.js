import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id='aboutMe' className='_container items-center'>
            <div className='_content mt-16 about_content flex justify-center items-center'>


                {/* <div> */}
                <div style={{ backgroundColor: "#ee262e" }} className='relative text-white about_left_section'>
                    <div className='flex flex-col justify-center items-center about_left_section_card'>
                        <img className='about_me_image' src={"https://i.ibb.co/hLt24N5/20220507-211007.jpg"} alt="" />
                        <p className='font-bold text-5xl mt-10 mb-2'>HELLO, I'M</p>
                        <p className='font-bold text-5xl mb-10'>ZEONX</p>
                        <p className='text-center'>
                            I am a versatile graphic designer who can approach marketing
                            projects from concept to implementation.
                        </p>

                        <div className='social_btn_about flex justify-center mt-10'>
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/512/160/160194.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/512/220/220343.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* </div> */}


                <div className='about_right_section'>

                    <div className='flex items-center'>
                        <p className='text-5xl mr-3'>About Me</p>
                        <div className='lg:w-2/5' style={{ border: "1px solid grey" }}></div>
                    </div>
                    <p className='my-10 text-lg'>
                        I just want to finish my unfinished assignments die hard and score a seat at scic.
                        I want to see myself as a full stack developer by the next 6 months. Rest of the text are copied.
                        The Design Blog features carefully selected good works
                        from studios and designers from around the globe.
                        Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur
                        adipiscing elit duis tristique sollicitudin. Volutpat lacus
                        laoreet non curabitur. Magna fringilla urna porttitor rhoncus.
                        Ultricies leo integer malesuada nunc vel risus commodo viverra.
                        The Design Blog features carefully selected good works
                        from studios and designers from around the globe.
                        Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur
                        adipiscing elit duis tristique sollicitudin.
                    </p>
                    <button className='button_primary px-10 w-3/5'>
                        Contact Me
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;