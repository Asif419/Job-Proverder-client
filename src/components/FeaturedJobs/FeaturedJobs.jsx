import React, { useContext, useState } from 'react';
import { AvailableJobContext } from '../Layout/Main';

const FeaturedJobs = () => {
  const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className='category-container'>
        <div className='text-center'>
          <p className='text-3xl font-semibold pt-8 md:pt-14 pb-4'>Featured Jobs</p>
          <p className='text-xs'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-7'>

        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;