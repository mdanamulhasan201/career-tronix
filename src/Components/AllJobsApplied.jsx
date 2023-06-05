import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const AllJobsApplied = ({ job }) => {
    const { img, title, name, type, type2, location, salary } = job
    return (
        <>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='p-5' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <div className='flex lg:gap-52 gap-10' >
                        <p className='card-title font-serif'>{name}</p>
                        <div className="card-actions justify-end">
                            <Link to='/'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div className='btn btn-outline btn-primary'>{type}</div>
                        <div className='btn btn-outline btn-primary'>{type2}</div>

                    </div>
                    <div className='lg:flex  gap-5 mt-5'>
                        <div className='flex gap-1  font-serif'>
                            <MapPinIcon className="h-5 w-5" /> <p> {location}</p>
                        </div>
                        <div >
                            <div className='flex  font-serif'><CurrencyDollarIcon className='h-5 w-5' /> Salary: {salary}</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default AllJobsApplied;