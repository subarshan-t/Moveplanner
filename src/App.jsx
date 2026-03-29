import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Timeline from './pages/Timeline.jsx'
import Visa from './pages/Visa.jsx'
import Checklist from './pages/Checklist.jsx'
import Kids from './pages/Kids.jsx'
import Housing from './pages/Housing.jsx'
import Finances from './pages/Finances.jsx'
import Shopping from './pages/Packing.jsx'
import JapanLife from './pages/JapanLife.jsx'
import { initDB } from './utils/storage.js'

const pages = {
  dashboard: Dashboard,
  timeline: Timeline,
  visa: Visa,
  checklist: Checklist,
  kids: Kids,
  housing: Housing,
  finances: Finances,
  packing: Shopping,
  japanlife: JapanLife,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const PageComponent = pages[currentPage] || Dashboard

  useEffect(() => {
    initDB().catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      {/* Desktop: offset by sidebar. Mobile: offset by bottom nav bar */}
      <main className="lg:ml-64 min-h-screen pb-20 lg:pb-0">
        <PageComponent onNavigate={setCurrentPage} />
      </main>
    </div>
  )
}
