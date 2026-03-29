import React, { useState, useEffect } from 'react'
import {
  Heart, Star, ArrowRight, Clock, CheckCircle2, AlertCircle,
  Plane, Home, FileText, Baby, TrendingUp, Calendar, Sparkles
} from 'lucide-react'

function CountdownTimer({ targetDate, label, colorClass, emoji }) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const target = new Date(targetDate)
      const diff = target - now
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      setTimeLeft({ days, hours, minutes })
    }
    calculate()
    const timer = setInterval(calculate, 60000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`rounded-2xl p-5 border ${colorClass}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{emoji}</span>
        <p className="font-display font-bold text-sm text-gray-700">{label}</p>
      </div>
      <div className="flex gap-3">
        {[
          { value: timeLeft.days, unit: 'days' },
          { value: timeLeft.hours, unit: 'hrs' },
          { value: timeLeft.minutes, unit: 'min' },
        ].map(({ value, unit }) => (
          <div key={unit} className="flex-1 text-center bg-white/70 rounded-xl py-2 px-1">
            <div className="font-display font-bold text-2xl text-gray-800">{value ?? '—'}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressRing({ percent, size = 120, strokeWidth = 10, color = '#f97316' }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="#fed7aa" strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  )
}

function QuickStatusCard({ icon: Icon, title, status, detail, color, bgColor, borderColor }) {
  return (
    <div className={`rounded-2xl p-4 border ${bgColor} ${borderColor}`}>
      <div className="flex items-start justify-between mb-2">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
          status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
          status === 'Done' ? 'bg-green-100 text-green-700' :
          status === 'Urgent' ? 'bg-red-100 text-red-700' :
          'bg-blue-100 text-blue-700'
        }`}>{status}</span>
      </div>
      <p className="font-display font-bold text-gray-800 text-sm mt-1">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
    </div>
  )
}

const upcomingTasks = [
  { task: 'Check passport validity (6+ months needed)', deadline: 'ASAP', priority: 'urgent', phase: 1 },
  { task: 'Contact university for Certificate of Eligibility (COE)', deadline: 'April 2026', priority: 'urgent', phase: 1 },
  { task: 'Get marriage certificate apostilled', deadline: 'April 2026', priority: 'high', phase: 1 },
  { task: 'Get kids\' birth certificates apostilled', deadline: 'April 2026', priority: 'high', phase: 1 },
  { task: 'Research housing near university', deadline: 'April 2026', priority: 'medium', phase: 1 },
  { task: 'Set up Wise account for money transfers', deadline: 'April 2026', priority: 'medium', phase: 1 },
  { task: 'Apply for student visa at Japanese Embassy, Colombo', deadline: 'May 2026', priority: 'urgent', phase: 1 },
  { task: 'Book Brindha\'s flight to Tokyo', deadline: 'May 2026', priority: 'high', phase: 1 },
  { task: 'Research hoikuen / yochien near housing area', deadline: 'May 2026', priority: 'medium', phase: 1 },
]

export default function Dashboard({ onNavigate }) {
  const [checklistData, setChecklistData] = useState({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tokyo-bound-checklist')
      if (saved) setChecklistData(JSON.parse(saved))
    } catch (e) {}
  }, [])

  const totalItems = Object.values(checklistData).flat?.()?.length || 0
  const doneItems = Object.values(checklistData).filter(Boolean).length
  const percent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0

  // Rough estimate from checklist page categories
  const checklistCount = Object.keys(checklistData).length
  const checklistDone = Object.values(checklistData).filter(Boolean).length
  const checklistPercent = checklistCount > 0 ? Math.round((checklistDone / checklistCount) * 100) : 0

  return (
    <div className="page-container p-4 lg:p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-pink-400 rounded-3xl p-6 lg:p-8 mb-6 text-white">
        <div className="absolute top-0 right-0 opacity-10 text-9xl leading-none select-none pointer-events-none">🌸</div>
        <div className="absolute bottom-0 left-0 opacity-5 text-8xl leading-none select-none pointer-events-none">⛩️</div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 opacity-90" />
            <span className="text-sm font-semibold opacity-90 tracking-wide">Your Japan Adventure Starts Here</span>
          </div>
          <h1 className="font-display font-bold text-3xl lg:text-4xl mb-2">
            こんにちは, Brindha! 👋
          </h1>
          <p className="text-orange-100 text-base lg:text-lg max-w-xl leading-relaxed">
            You're about to embark on an incredible journey — a new degree, a new country, a new chapter for your whole family. <strong className="text-white">You've totally got this!</strong> 💪
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Brindha 🎓', 'Malaka 👨', 'Aranya 👧', 'Aradhya 👶'].map(name => (
              <span key={name} className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Countdown Timers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <CountdownTimer
          targetDate="2026-06-30T00:00:00"
          label="✈️ Brindha's Departure — Phase 1"
          emoji="🎓"
          colorClass="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200"
        />
        <CountdownTimer
          targetDate="2026-08-31T00:00:00"
          label="👨‍👩‍👧‍👧 Family Arrives in Tokyo — Phase 2"
          emoji="🏡"
          colorClass="bg-gradient-to-br from-teal-50 to-sky-50 border-teal-200"
        />
      </div>

      {/* Progress + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Progress Ring */}
        <div className="card flex flex-col items-center justify-center py-6">
          <div className="relative inline-flex items-center justify-center mb-3">
            <ProgressRing percent={checklistPercent} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display font-bold text-2xl text-gray-800">{checklistPercent}%</span>
              <span className="text-xs text-gray-400">done</span>
            </div>
          </div>
          <p className="font-display font-bold text-gray-800 text-center">Overall Progress</p>
          <p className="text-sm text-gray-500 text-center mt-1">{checklistDone} of {checklistCount} tasks checked</p>
          <button
            onClick={() => onNavigate('checklist')}
            className="mt-3 text-sm text-orange-500 font-semibold flex items-center gap-1 hover:text-orange-600 transition-colors"
          >
            View Checklist <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Status Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          <QuickStatusCard
            icon={FileText}
            title="Visa Status"
            status="In Progress"
            detail="COE needed from university first"
            color="bg-blue-100 text-blue-600"
            bgColor="bg-blue-50"
            borderColor="border-blue-100"
          />
          <QuickStatusCard
            icon={Home}
            title="Housing"
            status="Pending"
            detail="Research neighborhoods near university"
            color="bg-green-100 text-green-600"
            bgColor="bg-green-50"
            borderColor="border-green-100"
          />
          <QuickStatusCard
            icon={Baby}
            title="Kids' School"
            status="Pending"
            detail="Aranya: Yochien | Aradhya: Hoikuen"
            color="bg-pink-100 text-pink-600"
            bgColor="bg-pink-50"
            borderColor="border-pink-100"
          />
          <QuickStatusCard
            icon={FileText}
            title="Documents"
            status="Urgent"
            detail="Apostille marriage + birth certs"
            color="bg-orange-100 text-orange-600"
            bgColor="bg-orange-50"
            borderColor="border-orange-100"
          />
        </div>
      </div>

      {/* Two Phases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Phase 1 */}
        <div className="rounded-2xl border-2 border-orange-200 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-white/25 rounded-lg flex items-center justify-center font-bold text-white text-sm">1</div>
            <div>
              <p className="font-display font-bold text-white text-sm">Phase 1 — Brindha Solo</p>
              <p className="text-orange-100 text-xs">By End of June 2026</p>
            </div>
            <Plane className="w-5 h-5 text-white ml-auto" />
          </div>
          <div className="p-4 space-y-2">
            {[
              'Get Certificate of Eligibility (COE)',
              'Apply for student visa',
              'Book flight to Tokyo',
              'Secure temporary housing',
              'Pack essentials',
              'Brindha departs ✈️',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => onNavigate('visa')}
              className="w-full text-center text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 py-2 rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              View Visa Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="rounded-2xl border-2 border-teal-200 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-white/25 rounded-lg flex items-center justify-center font-bold text-white text-sm">2</div>
            <div>
              <p className="font-display font-bold text-white text-sm">Phase 2 — Family Together</p>
              <p className="text-teal-100 text-xs">End of August 2026</p>
            </div>
            <Heart className="w-5 h-5 text-white ml-auto" />
          </div>
          <div className="p-4 space-y-2">
            {[
              'Malaka applies for dependent visa',
              'Kids get dependent visas',
              'Book family flights',
              'Brindha finds family apartment',
              'Family arrives in Tokyo 🎉',
              'Register family at ward office',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => onNavigate('checklist')}
              className="w-full text-center text-sm font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 py-2 rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              Full Checklist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title text-lg">
            <Calendar className="w-5 h-5 text-orange-500" />
            Upcoming Tasks — Next 30 Days
          </h2>
          <button
            onClick={() => onNavigate('checklist')}
            className="text-sm text-orange-500 font-semibold flex items-center gap-1 hover:text-orange-600"
          >
            All Tasks <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2">
          {upcomingTasks.slice(0, 6).map((task, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                task.priority === 'urgent' ? 'bg-red-400' :
                task.priority === 'high' ? 'bg-orange-400' : 'bg-blue-400'
              }`} />
              <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">{task.task}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                task.phase === 1 ? 'bg-orange-100 text-orange-600' : 'bg-teal-100 text-teal-600'
              }`}>
                Phase {task.phase}
              </span>
              <span className="text-xs text-gray-400 flex-shrink-0 hidden sm:block">{task.deadline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Encouragement Footer */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-6 text-center border border-pink-100">
        <div className="text-3xl mb-2">🌸 🗼 🌸</div>
        <p className="font-display font-bold text-gray-800 text-lg">桜が咲く — The cherry blossoms are waiting for you!</p>
        <p className="text-gray-600 text-sm mt-1 max-w-lg mx-auto">
          Tokyo is going to be an incredible home for your family. Brindha, you're juggling so much — work, two little ones, a masters degree, AND this move. You're absolutely amazing. 🧡
        </p>
      </div>
    </div>
  )
}
