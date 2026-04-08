import React, { useState, useEffect } from 'react'
import {
  LayoutDashboard, CalendarDays, FileCheck, CheckSquare,
  Baby, Home, Wallet, ShoppingBag, Sparkles, MapPin,
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard',      icon: LayoutDashboard, emoji: '🏠', description: 'Overview & countdown' },
  { id: 'timeline',  label: 'Timeline',        icon: CalendarDays,    emoji: '📅', description: 'Month-by-month plan' },
  { id: 'visa',      label: 'Visas',           icon: FileCheck,       emoji: '🛂', description: 'Student & dependent visas' },
  { id: 'checklist', label: 'Checklist',       icon: CheckSquare,     emoji: '✅', description: 'All tasks tracked' },
  { id: 'kids',      label: 'Kids Corner',     icon: Baby,            emoji: '👧', description: 'Schools & arrangements' },
  { id: 'housing',   label: 'Housing',         icon: Home,            emoji: '🏡', description: 'Finding home in Tokyo' },
  { id: 'finances',  label: 'Finances',        icon: Wallet,          emoji: '💴', description: '¥150k stipend & budget' },
  { id: 'packing',   label: 'Shopping',        icon: ShoppingBag,     emoji: '🛍️', description: 'Clothing & packing plan' },
  { id: 'japanlife', label: 'Japan Life',      icon: Sparkles,        emoji: '🌸', description: 'Daily life in Tokyo' },
]

export default function Sidebar({ currentPage, onNavigate }) {
  // Read checklist progress for the badge
  const [checklistPct, setChecklistPct] = useState(0)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('tokyo-bound-checklist')
      if (!raw) return
      const saved = JSON.parse(raw)
      const keys = Object.keys(saved)
      if (!keys.length) return
      const done = keys.filter(k => saved[k]).length
      setChecklistPct(Math.round((done / keys.length) * 100))
    } catch {}
  }, [currentPage]) // re-read when page changes

  const DesktopSidebar = () => (
    <aside className="hidden lg:flex flex-col w-72 bg-gray-900 border-r border-gray-800 fixed left-0 top-0 bottom-0 z-30">

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-[14px] border-b border-gray-800">
        <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-amber-900/40 flex-shrink-0">
          🌸
        </div>
        <div className="min-w-0">
          <h1 className="font-bold text-gray-100 text-sm leading-tight">Tokyo Bound</h1>
          <p className="text-xs text-amber-400 font-medium truncate">Brindha's Japan Journey</p>
        </div>
      </div>

      {/* Route badge */}
      <div className="mx-4 mt-4 mb-1 bg-gray-800/60 border border-gray-700/60 rounded-xl px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
          <span className="text-xs font-bold text-amber-400">🇱🇰 Sri Lanka → Tokyo 🇯🇵</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {[
            { name: 'Brindha', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
            { name: 'Malaka',  color: 'bg-gray-700/80 text-gray-300 border-gray-600/60' },
            { name: 'Aranya',  color: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
            { name: 'Aradhya', color: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
          ].map(({ name, color }) => (
            <span key={name} className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${color}`}>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 overflow-y-auto space-y-0.5">
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100 border border-transparent'
              }`}
            >
              <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${isActive ? 'text-amber-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
              <div className="flex-1 text-left min-w-0">
                <p className={`text-sm font-semibold leading-tight ${isActive ? 'text-amber-400' : ''}`}>{item.label}</p>
                <p className={`text-[11px] leading-tight truncate transition-colors ${isActive ? 'text-amber-400/70' : 'text-gray-600 group-hover:text-gray-500'}`}>
                  {item.description}
                </p>
              </div>
              {/* Checklist progress badge */}
              {item.id === 'checklist' && checklistPct > 0 && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                  checklistPct === 100 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {checklistPct}%
                </span>
              )}
              {/* Active dot */}
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="bg-gradient-to-br from-amber-500/15 to-amber-600/5 border border-amber-500/20 rounded-xl p-3 text-center">
          <p className="text-sm font-bold text-amber-400">You've got this! 💪</p>
          <p className="text-[11px] text-gray-500 mt-0.5">One step at a time, Brindha.</p>
        </div>
      </div>
    </aside>
  )

  const MobileBottomNav = () => (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 flex items-stretch overflow-x-auto">
      {navItems.map((item) => {
        const isActive = currentPage === item.id
        const Icon = item.icon
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 px-1 min-w-[52px] transition-colors ${
              isActive ? 'text-amber-400' : 'text-gray-500 active:text-gray-300'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5 flex-shrink-0" />
            <span className="text-[9px] font-semibold leading-tight truncate w-full text-center">
              {item.label}
            </span>
            {isActive && <div className="w-4 h-0.5 rounded-full bg-amber-400 mt-0.5" />}
          </button>
        )
      })}
    </nav>
  )

  return (
    <>
      <DesktopSidebar />
      <MobileBottomNav />
    </>
  )
}
