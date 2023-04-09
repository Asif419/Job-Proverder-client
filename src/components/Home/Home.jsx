import React from 'react';
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0 justify-center items-center'>
          <div className='px-2 md:px-14 col-span-2 mx-auto'>
            <div className=''>
              <h2 className='leading-snug md:leading-normal text-[45px] md:text-[60px] font-bold pb-5'>One Step <br /> Closer To Your <br />
                <span className='text-indigo-500'>Dream Job</span>
              </h2>
              <p>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
              <button className='mt-5 btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-md'>Get Started</button>
            </div>
          </div>
          <div className='mx-auto col-span-2'>
            <img className='object-cover w-[416px] h-[344px] md:w-[716px] md:h-[644px]' src="profile.png" alt="" />
          </div>
        </div>
      </div>
      <JobCategories></JobCategories>
    </div>
  );
};

export default Home;