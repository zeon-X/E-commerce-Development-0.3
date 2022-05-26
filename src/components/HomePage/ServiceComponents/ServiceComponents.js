import React from 'react';
import Swal from 'sweetalert2';
import { setToLS } from '../../../Utilities/localStorage';
import './ServiceComponents.css';


const ServiceComponents = ({ packagesDetails }) => {


    const handleBookingBtnClick = (packagesDetails) => {
        setToLS(JSON.stringify(packagesDetails));

        Swal.fire({
            icon: 'success',
            title: 'Added...',
            text: 'Booking Added successfully'
        })
    }

    const { id, hot, image, pkgName, pkgPrice, pkgDetails } = packagesDetails;







    return (
        <div className='service_component shadow-lg'>



            {/* IMAGE  */}
            <div className='service_com_img_container'>
                {/* offer  */}
                {
                    hot != "" ?
                        <p className='offer shadow-xl'>
                            {hot}
                        </p>
                        :
                        <p>

                        </p>

                }
                {/* img  */}
                <img style={{ borderTopRightRadius: "9px", borderTopLeftRadius: "9px" }} src={image} alt="" />
            </div>




            {/* TEXT + BTN */}
            <div className='p-5'>


                {/* Name & Price  */}
                <div className='flex justify-between text-xl'>
                    <p style={{ color: "#EE262E" }} className=''>
                        {pkgName}
                    </p>
                    <p className='font-bold text-gray-600'>
                        BDT {pkgPrice}
                    </p>
                </div>



                {/* details  */}
                <p className='my-5 text-sm text-gray-500'>
                    <span className='my-4 text-sm text-black'>Package Details :</span> {pkgDetails}
                </p>



                {/* booking btn  */}
                <button onClick={() => handleBookingBtnClick(packagesDetails)} className='booking_btn w-full'>
                    Booking
                </button>


            </div>




        </div>
    );
};

export default ServiceComponents;