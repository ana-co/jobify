import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats, MdPeople } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import React from 'react';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'job postings',
    path: 'job-postings',
    icon: <MdPeople />,
  },
  {
    id: 4,
    text: 'add job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 5,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
