import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';
import JobCategoryCard from './JobCategoryCard';
// import Header from './Header';


const Home = () => {
    const featuredJob = useLoaderData().slice(0, 4)
    const [job, setJob] = useState(featuredJob)

    const allJobs = useLoaderData();

    const handleShowAllBtn = () => {
        setJob(allJobs)
      
    }

    return (
        <>
            <div className='mx-auto  bg-accent px-4 py-4 sm:max-w-2xl md:max-w-full lg:max-w-screen-3xl lg:px-52 flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 '>
                    <div className=' max-w-xl mb-6 lg:mt-8'>
                        <h2 className='  max-w-lg mb-6 text-4xl font-bold  text-gray-900 sm:text-4xl md:text-4xl lg:text-6xl sm:leading-none'>
                            One Step <br className='hidden md:block' /> Closer To Your {' '}
                            <span className='inline-block text-purple-600'>Dream Job</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>

                    <>
                        <Link to='/'>

                            <button className="btn btn-primary text-white">Get Started</button>

                        </Link>

                    </>
                </div>
                <div className='relative lg:w-1/2 '>
                    <div >
                        <img src="/src/assets/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>
            </div>



            <div>
                <JobCategoryCard></JobCategoryCard>
            </div>


<>

<div className='text-center mt-48 px-4'>

<h2 className='font-bold text-5xl'>Featured Jobs</h2>
<p className='mt-4 text-sm mb-12  font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>

<div className='grid md:grid-cols-2 lg:grid-cols-2 px-10 md:px-36 sm:px-52 lg:px-52 mt-6 mb-5 gap-8 '>
{
    featuredJob.map(feature => <FeaturedJobs
        key={feature.id}
        feature={feature}
    >

    </FeaturedJobs>)

}

<div className="card-actions justify-end">
    <button onClick={() =>handleShowAllBtn()} className="btn btn-primary text-white">See All Jobs</button>
</div>
</div>

</>


        </>
    );
};

export default Home;