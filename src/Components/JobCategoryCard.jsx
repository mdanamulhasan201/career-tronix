import React, { useEffect, useState } from 'react';

const JobCategoryCard = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('jobCategory.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  // console.log(jobs)


  return (

    <>
    <div className='text-center mt-28 px-4'>
                <h1 className='font-bold text-5xl'>Job Category List</h1>
                <p className='mt-4 text-sm mb-12 font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 px-24 md:px-36 sm:px-52 lg:px-52 mt-6 mb-5 gap-5'>
      {
        jobs.map(job =>

          

          <div key={job.id} className='bg-accent shadow-lg w-48 rounded-lg text-center'>
            
            <figure><img className='rounded-xl p-2' src={job.picture} /></figure>
            <h2 className='text-xl px-1 font-bold'>{job.title}</h2>
            <p className='py-2 text-base-300'>{job.job}</p>
          </div>

        )
      }
    </div>
    </>
  
  );
};

export default JobCategoryCard;