import React, { useState } from 'react'
import {
  LayoutDashboard,
  CalendarDays,
  FileCheck,
  CheckSquare,
  Baby,
  Home,
  Wallet,
  Package,
  Sparkles,
  Menu,
  X,
  MapPin,
  ChevronRight
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, emoji: '🏠' },
  { id: 'timeline', label: 'Timeline', icon: CalendarDays, emoji: '📅' },
  { id: 'visa', label: 'Visas', icon: FileCheck, emoji: '🛂' },
  { id: 'checklist', label: 'Checklist', icon: CheckSquare, emoji: '✅' },
  { id: 'kids', label: 'Kids Corner', icon: Baby, emoji: '👧' },
  { id: 'housing', label: 'Housing', icon: Home, emoji: '🏡' },
  { id: 'finances', label: 'Finances', icon: Wallet, emoji: '💴' },
  { id: 'packing', label: 'Packing', icon: Package, emoji: '🎒' },
  { id: 'japanlife', label: 'Japan Life', icon: Sparkles, emoji: '🌸' },
]

export default function Sidebar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="px-6 py-6 border-b border-orange-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-200">
            🌸
          </div>
          <div>
            <h1 className="font-display font-bold text-gray-900 text-base leading-tight">Tokyo Bound</h1>
            <p className="text-xs text-orange-500 font-medium">Brindha's Journey</p>
          </div>
        </div>
      </div>

      {/* Family Badge */}
      <div className="mx-4 mt-4 mb-2 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-100 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-xs font-semibold text-orange-700">Sri Lanka → Tokyo 🇯🇵</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {['Brindha', 'Malaka', 'Aranya', 'Aradhya'].map(name => (
            <span key={name} className="text-xs bg-white text-gray-600 px-2 py-0.5 rounded-full border border-orange-100 font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto scrollbar-hide">
        <p className="px-3 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigation</p>
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id)
                setMobileOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer font-medium text-sm ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md shadow-orange-200'
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700'
              }`}
            >
              <span className="text-base w-6 text-center">{item.emoji}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {isActive && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-orange-100">
        <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-xl p-3 text-white text-center">
          <p className="text-sm font-bold">You've got this! 💪</p>
          <p className="text-xs opacity-90 mt-0.5">One step at a time, Brindha!</p>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-orange-100 min-h-screen fixed left-0 top-0 bottom-0 z-30">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-orange-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center text-base">
            🌸
          </div>
          <div>
            <h1 className="font-display font-bold text-gray-900 text-sm">Tokyo Bound</h1>
            <p className="text-xs text-orange-500">Brindha's Journey</p>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside className={`lg:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-white flex flex-col transform transition-transform duration-300 ease-out ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-100">
          <span className="font-display font-bold text-gray-900">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <NavContent />
      </aside>
    </>
  )
}
