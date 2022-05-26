import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [cnt, setCnt] = useState(0);

    // sign in email pass 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailPasswordLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    // REQUIRE AUTH TASK 
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [authUser, authLoading, authError] = useAuthState(auth);
    if (user || authUser) {
        navigate(from, { replace: true });
    }


    // RESET PASS 
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        setCnt(cnt + 1);

    }

    const toastMsg = () => {
        if (!sending) {
            if (!resetError?.message) {
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent...',
                    text: 'Check your Email'
                })
            }
        }
    }

    useEffect(() => {
        if (cnt > 0) toastMsg();
    }, [cnt]);


    let errorMsg = () => {
        return (
            <div className='text-sm text-red-700 mt-3'>
                <p>{error?.message}{authError?.message}{resetError?.message}</p>
            </div>
        )
    }

    return (
        <div className='_container items-center'>
            <div className='_content login_content flex justify-center items-center'>
                <div className='form_container'>
                    <form
                        onSubmit={
                            (event) => {
                                event.preventDefault();
                            }
                        }
                        className='flex flex-col'>

                        <p style={{ fontFamily: "Smooch", color: "#EE262E" }} className='text-5xl text-center mb-1'>
                            Login
                        </p>
                        <p className='text-sm text-center mb-10'>Please Login to Continue...</p>

                        {/* EMAIL  */}
                        <label className='mb-1' htmlFor='email'>Email *</label>
                        <input ref={emailRef} type="email" name='email' required />

                        {/* PASSWORD  */}
                        <label className='mb-1 mt-2' htmlFor='current-password'>Password *</label>
                        <input ref={passwordRef} type="password" name='current-password' />


                        {
                            errorMsg()
                        }

                        <button
                            onClick={handleEmailPasswordLogin}
                            className='mt-8 login_btn'>
                            Login
                        </button>
                    </form>


                    <div className='text-sm flex justify-between mt-3 mb-8'>
                        <div className='flex'>
                            <p>Don't have an account?</p>
                            <div className='ml-1' style={{ color: "#ee262e" }}>
                                <Link to='/signup'>
                                    Register Now
                                </Link>
                            </div>
                        </div>


                        <div className='ml-5' style={{ color: "#ee262e" }}>
                            <a onClick={handleResetPassword}>
                                Reset Password
                            </a>
                        </div>
                    </div>

                    <div className='or_container flex justify-center items-center'>
                        <div className=''></div>
                        <p className='mx-5'>or</p>
                        <div className=''></div>
                    </div>

                    <SocialLogin></SocialLogin>


                </div>
            </div>
        </div>
    );
};

export default Login;