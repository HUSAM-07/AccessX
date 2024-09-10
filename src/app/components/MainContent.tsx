'use client'

import { useState } from 'react'
import LandingPage from './ui/LandingPage'
import Dashboard from './ui/Dashboard'
import AttendanceTracker from './ui/AttendanceTracker'

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleEnter = () => {
    setCurrentPage('dashboard')
  }

  const handleAttendanceClick = () => {
    setCurrentPage('attendance')
  }

  const handleLogout = () => {
    setCurrentPage('landing')
  }

  const renderNavigation = () => (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Unidash</h1>
        <div>
          <button onClick={() => setCurrentPage('dashboard')} className="text-white mr-4">Dashboard</button>
          <button onClick={() => setCurrentPage('attendance')} className="text-white">Attendance</button>
        </div>
      </div>
    </nav>
  )

  return (
    <>
      {currentPage === 'landing' && <LandingPage onEnter={handleEnter} />}
      {currentPage !== 'landing' && (
        <>
          {renderNavigation()}
          {currentPage === 'dashboard' && (
            <Dashboard 
              onAttendanceClick={handleAttendanceClick} 
              onLogout={handleLogout}
            />
          )}
          {currentPage === 'attendance' && <AttendanceTracker />}
        </>
      )}
    </>
  )
}

export default MainContent