import React from 'react';
import usePackage from '../../../CustomHooks/usePackage';
import ServiceComponents from '../ServiceComponents/ServiceComponents';
import './Service.css'

const Service = () => {

    const [packages, setPackages] = usePackage();

    return (
        <div className='_container items-center'>
            <p style={{ fontFamily: "Smooch", color: "#EE262E" }} className='text-5xl  mb-1 px-10'>
                Our Packages
            </p>
            <p className='mb-16 font-light px-10'>
                we can make the most of the incredible location you fell in love with.
            </p>
            <div className='_content service'>

                {
                    packages.map((x) => {
                        return (
                            <ServiceComponents key={x.id} packagesDetails={x} ></ServiceComponents>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Service;