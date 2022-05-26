import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/logo/camera-lens.png';
import CustomLink from '../../../Utilities/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import userlogo from '../../../assets/icons/Sample_User_Icon.png';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    // implementing sign out method 
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    //shadow add to the header
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100)
            document.querySelector('.header').classList.add('shadow-xl');
        else
            document.querySelector('.header').classList.remove('shadow-xl');

    })

    return (
        <div className='header flex justify-center header-bg relative'>
            <div style={{ width: "85%" }} className=' flex justify-between items-center '>

                {/* LOGO + Name */}
                <div className='flex justify-center items-center'>
                    <img className='logo-img' src={logo} alt="" />
                    <div className='flex flex-col'>
                        <p className='text-3xl ml-2 font-light' style={{ fontFamily: "Smooch",color:"#ee262e" }}>Weeding Art</p>
                        <p style={{ fontSize: "10px", marginLeft: "10px" }}>by ZEON-X</p>
                    </div>
                </div>


                {/* NAV LINKS  */}
                <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden sm:block nav_open_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>


                <ul
                    className={navOpen ? 'navbar_links_content open_nav' : 'navbar_links_content sm_hidden'}>

                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/checkout'>Check Out</CustomLink>
                    <CustomLink to='/blog'>Blog</CustomLink>
                    <CustomLink to='/aboutme'>About Me</CustomLink>
                    {
                        user
                            ?
                            <div className='flex items-center ml-5 logout_content'>
                                <div
                                    style={{
                                        backgroundColor: "#f3f3f3",
                                        padding: "5px 6px",
                                        borderRadius: "20px",
                                        color: "grey"
                                    }}
                                    className='flex items-center'>

                                    <img
                                        style={{
                                            height: "28px",
                                            borderRadius: "50%"
                                        }}
                                        src={user?.photoURL ? user.photoURL : userlogo}
                                        alt=""
                                    />


                                    <p className='mx-1' style={{ fontSize: "14px" }}>
                                        {
                                            user?.displayName
                                                ?
                                                user.displayName.slice(0, 6)
                                                :
                                                user?.email.slice(0, 6)
                                        }
                                    </p>

                                </div>
                                <a onClick={logout}>
                                    Logout
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </a>
                            </div>
                            :
                            <CustomLink to='/login'>
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </CustomLink>
                    }


                    <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden minimize_btn flex  ml-5 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </ul>
            </div>
        </div>
    );
};




export default Header;




