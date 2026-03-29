import React from 'react'
import {
  LayoutDashboard,
  CalendarDays,
  FileCheck,
  CheckSquare,
  Baby,
  Home,
  Wallet,
  ShoppingBag,
  Sparkles,
  MapPin,
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, emoji: '🏠' },
  { id: 'timeline', label: 'Timeline', icon: CalendarDays, emoji: '📅' },
  { id: 'visa', label: 'Visas', icon: FileCheck, emoji: '🛂' },
  { id: 'checklist', label: 'Checklist', icon: CheckSquare, emoji: '✅' },
  { id: 'kids', label: 'Kids Corner', icon: Baby, emoji: '👧' },
  { id: 'housing', label: 'Housing', icon: Home, emoji: '🏡' },
  { id: 'finances', label: 'Finances', icon: Wallet, emoji: '💴' },
  { id: 'packing', label: 'Shopping', icon: ShoppingBag, emoji: '🛍️' },
  { id: 'japanlife', label: 'Japan Life', icon: Sparkles, emoji: '🌸' },
]

export default function Sidebar({ currentPage, onNavigate }) {
  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-amber-900/40">
            🌸
          </div>
          <div>
            <h1 className="font-bold text-gray-100 text-base leading-tight">Tokyo Bound 🌸</h1>
            <p className="text-xs text-amber-400 font-medium">Brindha's Journey</p>
          </div>
        </div>
      </div>

      {/* Family Badge */}
      <div className="mx-4 mt-4 mb-2 bg-gray-800 border border-gray-700 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-semibold text-amber-400">Sri Lanka → Tokyo 🇯🇵</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {['Brindha', 'Malaka', 'Aranya', 'Aradhya'].map(name => (
            <span key={name} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full border border-gray-600 font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto scrollbar-hide">
        <p className="px-3 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</p>
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer font-medium text-sm ${
                isActive
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-amber-400' : 'text-gray-500'}`} />
              <span className="flex-1 text-left">{item.label}</span>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 rounded-xl p-3 text-center">
          <p className="text-sm font-bold text-amber-400">You've got this! 💪</p>
          <p className="text-xs text-gray-400 mt-0.5">One step at a time, Brindha!</p>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-gray-900 border-r border-gray-800 min-h-screen fixed left-0 top-0 bottom-0 z-30">
        <NavContent />
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-900 border-t border-gray-800 flex items-stretch">
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 min-w-0 transition-all duration-200 ${
                isActive ? 'text-amber-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 flex-shrink-0 ${isActive ? 'text-amber-400' : ''}`} />
              <span className={`text-[9px] font-medium leading-tight truncate w-full text-center ${isActive ? 'text-amber-400' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" style={{ width: `${100 / navItems.length}%`, left: `${(navItems.findIndex(n => n.id === item.id) / navItems.length) * 100}%` }} />
              )}
            </button>
          )
        })}
      </nav>
    </>
  )
}
