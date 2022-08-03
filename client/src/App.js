import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  JobApplication,
  Stats,
  SharedLayout,
} from './pages/dashboard';
import React from 'react';
import JobPostings from './pages/dashboard/JobPostings';

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to='/landing'>Landing</Link>
        <Link to='/'> Dashboard </Link>
        <Link to='/register'> Register</Link>
      </nav> */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="job-postings" element={<JobPostings />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="job-postings/:jobId/apply"
            element={<JobApplication />}
          />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
