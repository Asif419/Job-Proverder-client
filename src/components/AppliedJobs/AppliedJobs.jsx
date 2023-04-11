import React, { useContext, useEffect, useState } from 'react';
import { AppliedJobContext, AvailableJobContext } from '../Layout/Main';
import { getAppliedList } from '../Utilities/Fakedb';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const availableJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);
  const [shownJobs, setShownJobs] = useState(appliedJobs);
  const [viewType, setViewType] = useState('all');
  const [remoteJob, setRemoteJob] = useState(false);
  const [onSiteJob, setOnSiteJob] = useState(false);


  useEffect(() => {
    const appliedListsDb = getAppliedList();
    const fakeAppliedJob = [];
    if (appliedJobs.length == 0) {
      for (const id in appliedListsDb) {
        const job = availableJobs.find(availableJob => availableJob.id === id);
        if (job) {
          fakeAppliedJob.push(job);
        }
      }
      setAppliedJobs(fakeAppliedJob);
    }
  }, [availableJobs]);

  useEffect(() => {
    // console.log('remote', remoteJob, 'onsite', onSiteJob)
    if (!remoteJob && !onSiteJob) {
      setViewType('all')
    }
    else if (remoteJob && !onSiteJob) {
      setViewType('Remote')
    }
    else if (!remoteJob && onSiteJob) {
      setViewType('Onsite')
    }
  }, [remoteJob, onSiteJob])

  useEffect(() => {
    const fakeShownJobs = [];
    if (viewType == 'all') {
      setShownJobs(appliedJobs)
    }
    else if (viewType == 'Remote') {
      const fakeShownJobs = appliedJobs.filter(aj => aj.remote_or_onsite == 'Remote');
      setShownJobs(fakeShownJobs);
    }
    else if (viewType == 'Onsite') {
      const fakeShownJobs = appliedJobs.filter(aj => aj.remote_or_onsite == 'Onsite');
      setShownJobs(fakeShownJobs);
    }
  }, [viewType, appliedJobs])

  // console.log(shownJobs);
  console.log(shownJobs);

  return (
    <div>
      <Banner>Applied Jobs</Banner>
      <div className='flex flex-col gap-3 details-container'>
        <div className='flex justify-center md:justify-end gap-2'>
          <button onClick={() => {
            setRemoteJob(!remoteJob)
            onSiteJob ? setOnSiteJob(!onSiteJob) : ''
          }
          } className={remoteJob ? 'applied-job-btn-active' : 'applied-job-btn'}>Remote Jobs</button>
          <button onClick={() => {
            setOnSiteJob(!onSiteJob)
            remoteJob ? setRemoteJob(!remoteJob) : ''
          }} className={onSiteJob ? 'applied-job-btn-active' : 'applied-job-btn'}>Onsite Jobs</button>
        </div>
        <div>
          {
            shownJobs.map(shownJob => <AppliedJob
              key={shownJob.id}
              shownJob={shownJob}
            ></AppliedJob>)
          }
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;