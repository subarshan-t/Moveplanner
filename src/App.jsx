import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Timeline from './pages/Timeline.jsx'
import Visa from './pages/Visa.jsx'
import Checklist from './pages/Checklist.jsx'
import Kids from './pages/Kids.jsx'
import Housing from './pages/Housing.jsx'
import Finances from './pages/Finances.jsx'
import Packing from './pages/Packing.jsx'
import JapanLife from './pages/JapanLife.jsx'

const pages = {
  dashboard: Dashboard,
  timeline: Timeline,
  visa: Visa,
  checklist: Checklist,
  kids: Kids,
  housing: Housing,
  finances: Finances,
  packing: Packing,
  japanlife: JapanLife,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const PageComponent = pages[currentPage] || Dashboard

  return (
    <div className="min-h-screen bg-orange-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="lg:ml-64 min-h-screen">
        <div className="pt-0 lg:pt-0 mt-14 lg:mt-0">
          <PageComponent onNavigate={setCurrentPage} />
        </div>
      </main>
    </div>
  )
}
