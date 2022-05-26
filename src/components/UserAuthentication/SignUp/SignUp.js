import React, { useRef, useState } from 'react';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from 'sweetalert2';
import { async } from '@firebase/util';

const SignUp = () => {

    const nameRef = useRef("");
    const phoneRef = useRef("");
    const emailRef = useRef("");
    const passRef = useRef("");
    const confirmPassRef = useRef("");
    //aggree T & C 
    const [agreeTnC, setAgreeTnC] = useState(false);
    // const [passmatched,setPassMatched] = useState("");



    // signup + update function
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleSignUp = async () => {

        const email = emailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;
        const confirmPassword = confirmPassRef.current.value;

        if (password === confirmPassword) {
            // setPassMatched("");

            await createUserWithEmailAndPassword(email, password); //create user
            await updateProfile({ displayName: name, photoURL: "" }); // update profile

            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Registered successfully'
            }).then(() => {
                navigate('/');
            })

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: "Password not matched"
            })
        }
    }

    // error msg  
    let errorMsg = () => {
        return (
            <div className='text-sm text-red-700 my-3'>
                <p>{error?.message}{updateError?.message}</p>
            </div>
        )
    }

    return (
        <div className='_container items-center'>
            <div className='_content flex justify-center items-center'>
                <div className='form_container'>
                    <form onSubmit={(event) => { event.preventDefault() }} className='flex flex-col'>

                        <p style={{ fontFamily: "Smooch", color: "#EE262E" }} className='text-5xl text-center mb-1'>
                            Register
                        </p>
                        <p className='text-sm text-center mb-10'>Please Register to be a member...</p>

                        {/* NAME  */}
                        <label className='mb-1' htmlFor='email'>Full Name *</label>
                        <input ref={nameRef} type="text" name='name' required />

                        {/* PHONE  */}
                        <label className='mb-1 mt-2' htmlFor='phone'>Phone Number *</label>
                        <input ref={phoneRef} type="text" name='phone' required />

                        {/* EMAIL  */}
                        <label className='mb-1 mt-2' htmlFor='email'>Email *</label>
                        <input ref={emailRef} type="email" name='email' required />

                        {/* PASSWORD  */}
                        <label className='mb-1 mt-2' htmlFor='set-password'>Password *</label>
                        <input ref={passRef} type="password" name='set-password' required />

                        {/* Confirm PASSWORD  */}
                        <label className='mb-1 mt-2' htmlFor='confirm-password'>Confirm Password *</label>
                        <input ref={confirmPassRef} type="password" name='confirm-password' required />



                        <div className='mt-3'>
                            <input onClick={() => setAgreeTnC(!agreeTnC)} type="checkbox" name='checkbox' required />
                            <label className='text-sm ml-3' htmlFor="checkbox" required>I agree to the terms and conditions as user agreement.</label>
                        </div>

                        {
                            // showing error msg 
                            errorMsg()
                        }

                        <button onClick={handleSignUp} className='mt-8 login_btn'>
                            Register
                        </button>

                    </form>

                    <div className='text-sm flex justify-between mt-3 mb-8'>
                        <div className='flex'>
                            <p>Alradey have an account?</p>
                            <div className='ml-1' style={{ color: "#ee262e" }}>
                                <Link to='/login'>
                                    Login Now
                                </Link>
                            </div>
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

export default SignUp;