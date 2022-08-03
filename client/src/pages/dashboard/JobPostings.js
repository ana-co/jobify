import { JobPostingsContainer, SearchContainer } from '../../components';
import React from 'react';

import { JOB_POSTINGS_KEY } from '../../context/constants';

const JobPostings = () => {
  return (
    <>
      <SearchContainer pageKey={JOB_POSTINGS_KEY} />
      <JobPostingsContainer></JobPostingsContainer>
    </>
  );
};

export default JobPostings;
