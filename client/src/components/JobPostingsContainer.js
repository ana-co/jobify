import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/JobsContainer';
import Loading from './Loading';
import JobPosting from './JobPosting';
import PageBtnContainer from './PageBtnContainer';
import React from 'react';
import { JOB_POSTINGS_KEY } from '../context/constants';

const JobPostingsContainer = () => {
  const {
    getJobPostings,
    jobs,
    isLoading,
    totalJobs,
    jobPostings: { page, search, searchStatus, searchType, sort },
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getJobPostings();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <JobPosting key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer pageKey={JOB_POSTINGS_KEY} />}
    </Wrapper>
  );
};

export default JobPostingsContainer;
