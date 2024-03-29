import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import React from 'react';

import { JOB_POSTINGS_KEY } from '../context/constants';

const SearchContainer = ({ pageKey }) => {
  const {
    isLoading,
    allJobs,
    jobPostings,
    sortOptions,
    handleSearchChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();

  const { search, searchStatus, searchType, sort } =
    pageKey === JOB_POSTINGS_KEY ? jobPostings : allJobs;

  const handleSearch = (e) => {
    if (isLoading) return;
    handleSearchChange({
      name: e.target.name,
      value: e.target.value,
      pageKey: pageKey,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters({ pageKey });
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>

        <div className="form-center">
          {/* search position */}

          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />

          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />

          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />

          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
