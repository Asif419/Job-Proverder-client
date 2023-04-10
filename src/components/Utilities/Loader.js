export const jobsLoader = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Asif419/data-for-phero-assignment-9/main/job.json');
  const data = await res.json();
  return data.jobs;
};

export const jobDetailsLoader = async (id) => {
  const jobs = await jobsLoader();
  const job = jobs.find(d => d.id === id);
  return job;
};