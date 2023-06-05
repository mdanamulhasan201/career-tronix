import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, InboxIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../utilities/fakedb';


const JobDetails = () => {
    const loadId = useParams()
    const dynamicId = loadId.id
    const jobsDetails = useLoaderData()
    const [details, setJDetails] = useState([])
    // console.log(details)

    useEffect(() => {
        if (jobsDetails.length > 0) {
            const jobsDataId = jobsDetails.find(dt => dt.id == dynamicId);
            setJDetails(jobsDataId)

        } else {
            setJDetails([{}]);

        }
    }, [jobsDetails, dynamicId])

    const {description, responsibility, requirements, experience, salary, title, phone, email, address, id} = details


    // click handler 
    const handlerAddToCart = (id) => {
        // console.log(id)
        addToDb(id)
    }


    return (

        <>
            <div className='bg-accent text-center  text-3xl font-bold h-96'>
                <h1 className='pt-5'>Job details </h1>
            </div>



            <div className='mt-5 flex flex-row main-container px-5 md:px-52 lg:px-52 gap-10'>
                <div className='container px-5  font-serif'>
                    <h1><span className='text-xl font-bold'>Job Description:</span> {description}</h1>
                    <h2 className='mt-5'> <span className='text-xl font-bold'> Job Responsibility: </span>{responsibility}</h2>
                    <h1 className='mt-5'><span className='text-xl mb-2 font-bold'>Educational Requirements:</span><br></br>{requirements}</h1>
                    <h1 className='mt-5'><span className='text-xl mb-2 font-bold'>Experiences:</span><br></br>{experience}</h1>
                </div>



                <div className='job-container'>
                    <div className="card w-auto bg-accent shadow-xl">
                        <div className="card-body font-serif">
                            <h2 className="card-title mb-5">Job Details</h2>
                            <hr />
                            <p  className='flex'><CurrencyDollarIcon className='h-5 w-5' /><span className='text-sm font-bold ms-1'> Salary:</span> {salary}</p>
                            <p  className='flex'><BriefcaseIcon className='h-5 w-5' /><span className='text-sm font-bold ms-1'>Job Title:</span> {title}</p>
                            <h2 className="card-title mt-5 mb-3 ">Contact Information</h2>
                            <hr />
                            <p className='flex'><PhoneIcon className='h-5 w-5' /><span className='text-sm font-bold ms-1'>Phone:</span> {phone}</p>
                            <p className='flex'><InboxIcon className='h-5 w-5' /><span className='text-sm font-bold ms-1'>Email:</span> {email}</p>
                            <p className='flex'><MapPinIcon  className='h-5 w-5' /><span className='text-sm font-bold ms-1'>Address:</span> {address}</p>

                            <div className="card-actions ">
                                <Link to='/appliedJobs'><button onClick={ ()=> handlerAddToCart(id)} className="btn w-full btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
};

export default JobDetails;