import { JobsContainer, SearchContainer } from '../../components';
import React from 'react';

import { ALL_JOBS_KEY } from '../../context/constants';

const AllJobs = () => {
  return (
    <>
      <SearchContainer pageKey={ALL_JOBS_KEY} />
      <JobsContainer></JobsContainer>
    </>
  );
};

export default AllJobs;
