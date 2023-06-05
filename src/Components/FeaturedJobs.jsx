import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FeaturedJobs = ({ feature }) => {
    const { img, title, name, type, type2, location, salary,id } = feature
    return (

            <>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='mt-4' src={img} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-sans font-bold">{title}</h2>
                <p className='font-semibold font-serif'>{name}</p>
                <div className='flex gap-5'>
                    <div className='btn btn-outline btn-primary'>{type}</div>
                    <div className='btn btn-outline btn-primary'>{type2}</div>
                </div>
                <div className='flex gap-5 mt-3'>
                    <div className='flex gap-1 font-semibold font-serif'>
                        <MapPinIcon className="h-5 w-5" /> <p> {location}</p>
                    </div>
                    <div >
                        <div className='flex font-semibold font-serif'><CurrencyDollarIcon className='h-5 w-5' /> Salary: {salary}</div>
                    </div>
                </div>
                <div className="card-actions mt-5">
                   <Link to={`/featuredJob/${id}`}> <button className="btn btn-primary text-white">View Details</button></Link>
                </div>
            </div>
            

            
        </div>

            </>

       



    );
};

export default FeaturedJobs;