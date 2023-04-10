import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const AppliedJobContext = createContext([]);
export const AvailableJobContext = createContext([]);

const Main = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobsLoader = async () => {
    const res = await fetch('job.json');
    const data = await res.json();
    return data.jobs;
  };

  useEffect(() => {
    const loadCategories = async () => {
      const jobData = await jobsLoader();
      setAvailableJobs(jobData);
    };
    loadCategories();
  }, []);

  return (
    <>
      <AvailableJobContext.Provider value={[availableJobs, setAvailableJobs]}>
        <AppliedJobContext.Provider value={[appliedJobs, setAppliedJobs]}>
          <Header></Header>
          <Outlet></Outlet>
        </AppliedJobContext.Provider>
      </AvailableJobContext.Provider>
    </>
  );
};

export default Main;