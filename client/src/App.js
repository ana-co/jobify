import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Register, Error, ProtectedRoute } from './pages'
import { AddJob, AllJobs, Profile, Stats, SharedLayout } from './pages/dashboard'
import React from 'react'


function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to='/landing'>Landing</Link>
        <Link to='/'> Dashboard </Link>
        <Link to='/register'> Register</Link>
      </nav> */}
      <Routes>
        <Route path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          } >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
