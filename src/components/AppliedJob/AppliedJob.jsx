import React from 'react';

const AppliedJob = ({ shownJob }) => {
  console.log(shownJob)
  const { logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, id, location, salary } = shownJob
  return (
    <div>
      <p>{shownJob.length}</p>
    </div>
  );
};

export default AppliedJob;