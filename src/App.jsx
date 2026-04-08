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

const pageInfo = {
  dashboard:  { title: 'Dashboard',         subtitle: 'Your Japan move at a glance' },
  timeline:   { title: 'Timeline',           subtitle: 'Month-by-month plan · March → September 2026' },
  visa:       { title: 'Visas & Documents',  subtitle: 'Student visa, dependent visas & Malaka\'s work rights' },
  checklist:  { title: 'Master Checklist',   subtitle: 'Every task for the move — progress saved automatically' },
  kids:       { title: 'Kids Corner',        subtitle: 'Schools & arrangements for Aranya (4) & Aradhya (2)' },
  housing:    { title: 'Housing in Tokyo',   subtitle: 'Finding the right home for the family' },
  finances:   { title: 'Finances',           subtitle: '¥150,000 / month stipend · banking · budget' },
  packing:    { title: 'Shopping Planner',   subtitle: 'What to buy, what to pack — log photos per item' },
  japanlife:  { title: 'Japan Life',         subtitle: 'Transport, language, healthcare, shopping & more' },
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const PageComponent = pages[currentPage] || Dashboard
  const info = pageInfo[currentPage] || pageInfo.dashboard

  const daysLeft = Math.max(0, Math.ceil(
    (new Date('2026-06-30T00:00:00') - new Date()) / (1000 * 60 * 60 * 24)
  ))

  useEffect(() => { initDB().catch(console.error) }, [])

  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* ── Desktop top header bar ── */}
      <header className="hidden lg:flex fixed top-0 left-72 right-0 h-13 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/80 z-20 items-center px-8 gap-6">
        {/* Page title */}
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-gray-100 text-sm leading-tight truncate">{info.title}</h2>
          <p className="text-xs text-gray-500 truncate mt-0.5">{info.subtitle}</p>
        </div>

        {/* Departure counter */}
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold text-amber-400 whitespace-nowrap">
            {daysLeft > 0 ? `${daysLeft} days to Brindha's departure` : 'Brindha has departed! 🎉'}
          </span>
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-sm flex-shrink-0 shadow-lg shadow-amber-900/40">
          🌸
        </div>
      </header>

      {/* ── Main content area ── */}
      {/* lg: offset left by sidebar (w-72) and top by header (h-13 = 52px) */}
      <main className="lg:ml-72 min-h-screen pb-24 lg:pb-0 pt-0 lg:pt-[52px]">
        <PageComponent onNavigate={setCurrentPage} />
      </main>
    </div>
  )
}
