import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import usePackage from '../../CustomHooks/usePackage';
import auth from '../../firebase.init';
import { getFromLS } from '../../Utilities/localStorage';
import Loading from '../shared/Loading/Loading';
import './CheckOut.css'

const CheckOut = () => {

    const [user, loading, error] = useAuthState(auth);
    const [packages, setPackages] = usePackage();

    let subtotal = 0; // subtotal price

    let bookedPkg = [];
    for (let x in getFromLS()) {
        let parsedData = JSON.parse(x)
        bookedPkg.push(parsedData);
        subtotal += parseInt(parsedData.pkgPrice); // subtotal price calculation
    }

    // console.log(user);
    const addressRef = useRef("");
    const phoneRef = useRef("");
    const townRef = useRef("");
    const postcodeRef = useRef("");
    const paymentMethodRef = useRef("");

    const userInfo = {
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        town: townRef.current.value,
        postcode: postcodeRef.current.value,
        paymentmethod: paymentMethodRef.current.value
    };


    return (

        <div className='_container items-center'>
            <div className='_content checkout_content'>


                <div className='billing_details_form'>
                    <form onSubmit={event => event.preventDefault()} className='flex flex-col '>

                        <p className='text-4xl text-left mb-10'>
                            Billing Details
                        </p>


                        {/* NAME  */}
                        <label className='mb-1' htmlFor='email'>Full Name *</label>
                        <input type="text" name='name' value={user?.displayName ? user.displayName : ""} readOnly />

                        {/* PHONE  */}
                        <label className='mb-1 mt-2' htmlFor='phone'>Phone Number *</label>
                        <input ref={phoneRef} type="text" name='phone' value={user?.phoneNumber ? user.phoneNumber : ""} required />

                        {/* EMAIL  */}
                        <label className='mb-1 mt-2' htmlFor='email'>Email *</label>
                        <input type="email" name='email' value={user?.email ? user.email : ""} readOnly />

                        {/* ZIP  */}
                        <label className='mb-1 mt-2' htmlFor='postcode'>Postcode/ZIP *</label>
                        <input ref={postcodeRef} type="text" name='postcode' />

                        {/* town  */}
                        <label className='mb-1 mt-2' htmlFor='town'>Town/City *</label>
                        <input ref={townRef} type="text" name='town' />

                        {/* Address  */}
                        <label className='mb-1 mt-2' htmlFor='address'>Address *</label>
                        <input ref={addressRef} type="text" name='address' />





                        {/* <button className='mt-8 button_secondary'>
                            Update Billing Information
                        </button> */}

                    </form>
                </div>






                {/* ORDER DETAILS  */}
                <div>
                    <p className='text-4xl '>Your Order</p>

                    <div className='bookedpkg_details text-sm text-gray-700 mt-10'>
                        {
                            bookedPkg.map((x) => {
                                return (
                                    <>
                                        <div className='flex justify-between'>
                                            <p>{x.pkgName}</p>
                                            <p className=''>
                                                BDT {x.pkgPrice}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className='my-5' style={{ border: "0.1px solid grey " }}></div>

                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p className='font-bold'>
                            BDT {subtotal}
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p className='font-light text-sm'>
                            free-shipping
                        </p>
                    </div>



                    <div className='my-5' style={{ border: "0.1px solid grey " }}></div>


                    <div className='flex justify-between mb-10'>
                        <p>Total</p>
                        <p className='font-bold'>
                            BDT {subtotal}
                        </p>
                    </div>

                    <div className='payment_method shadow-sm'>
                        <p className='text-xl '>Payment Method</p>
                        <div className='select_payment_method  my-3 flex justify-center items-center'>
                            <form className='flex justify-between'>
                                <div>
                                    <input ref={paymentMethodRef} type="radio" id="bkash" name="payment_method" value="Bkash" />
                                    <label className='ml-3' for="bkash">
                                        {/* Bkash */}
                                        <img className='inline-block' style={{ height: "80px" }} src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg" alt="" />
                                    </label>
                                </div>

                                <div>
                                    <input ref={paymentMethodRef} type="radio" id="nagad" name="payment_method" value="Nagad" />
                                    <label className='ml-3' for="nagad">
                                        {/* Nagad */}
                                        <img className='inline-block' style={{ height: "80px" }} src="https://www.logo.wine/a/logo/Nagad/Nagad-Horizontal-Logo.wine.svg" alt="" />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <p className='text-sm my-5'>
                        Your personal data will be used to process your order.
                        Support your expericense through this website and for other purposes
                        discribed is our <a style={{ color: "#ee262e" }} className='ml-0'>privacy policy</a>
                    </p>

                    <button
                        onClick={() => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success...',
                                text: 'Booked successfully'
                            })
                        }}
                        className='button_primary w-full'>
                        PROCEED TO CKECKOUT
                    </button>




                </div>


            </div>
        </div>
    );
};

export default CheckOut;