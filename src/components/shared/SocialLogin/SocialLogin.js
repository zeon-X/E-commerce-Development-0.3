import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    // console.log("social : " + error?.message);
    let errorMsg = () =>{
        return(
            <div className='text-sm text-red-700 mb-3'>
                <p>{error?.message}</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col w-full'>

            {
                errorMsg()
            }

            <button onClick={handleGoogleLogin} className='mt-8 mb-4 google_login_btn flex justify-center items-center'>
                <img
                    style={{ height: "25px" }}
                    src={"https://cdn-icons-png.flaticon.com/512/281/281764.png"}
                    alt=""
                />
                <p className='ml-4'>
                    Login With Google
                </p>
            </button>

            <button className='mb-5 fb_login_btn flex justify-center items-center'>
                <img
                    style={{ height: "25px" }}
                    src={"https://cdn-icons-png.flaticon.com/512/5968/5968764.png"}
                    alt=""
                />
                <p className='ml-4'>
                    Login With Facebook
                </p>
            </button>
        </div>
    );
};

export default SocialLogin;