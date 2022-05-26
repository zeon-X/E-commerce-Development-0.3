import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='_container items-center'>
            <div className='_content blog_content'>

            <div className='lg:mt-10 blog_card'>
                    <p className='text-3xl mb-3' style={{ color: "#ee263e" }}>Why firebase? What other options we have to implement authentication?</p>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                        Other options we have for authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    </p>
                </div>

                <div className='blog_card'>
                    <p className='text-3xl mb-3' style={{ color: "#ee263e" }}>Authentication vs. Authorization</p>
                    <p>Authentication verifies who the user is.	Authorization determines what resources a user can access.
                        Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	Authorization works through settings that are implemented and maintained by the organization.
                        Authentication is the first step of a good identity and access management process.	Authorization always takes place after authentication.</p>
                </div>

                

                <div className='lg:mt-10 blog_card'>
                    <p className='text-3xl mb-3' style={{ color: "#ee263e" }}>What other services does firebase provide other than authentication</p>
                    <p>The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, authentication, and analytics.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;