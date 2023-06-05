import React from 'react';
// import { getStoredCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AllJobsApplied from './AllJobsApplied';

const AppliedJobs = () => {


    const { cartArray, jobs } = useLoaderData()
    console.log(jobs)


    return (
        <>
            <h1 className='text-3xl text-center mt-5 font-bold'>Applied jobs</h1>
            <div className='flex min-h-screen items-start text-center justify-center  text-gray-900'>



                <div >

                    {/* drop drown menu */}
                    <div className="mt-12 text-center  w-1/3 ">
                        <select className=" p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Filter By</option>
                            <option>Remote Jobs</option>
                            <option>on-site jobs</option>
                         
                        </select>
                    </div>





                    <ul className='flex p-5 flex-col gap-5 mt-5'>
                        {
                            cartArray.map(job => (
                                <AllJobsApplied
                                    key={job.id}
                                    job={job}
                                >
                                </AllJobsApplied>))
                        }
                    </ul>
                </div>
            </div>
        </>

    );
};

export default AppliedJobs;