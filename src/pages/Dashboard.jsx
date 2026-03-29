import React, { useState, useEffect } from 'react'
import {
  Heart, ArrowRight, FileText, Home, Baby,
  Plane, Calendar, Sparkles, TrendingUp
} from 'lucide-react'

function CountdownTimer({ targetDate, label, accentColor, emoji }) {
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
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      })
    }
    calculate()
    const timer = setInterval(calculate, 60000)
    return () => clearInterval(timer)
  }, [targetDate])

  const isAmber = accentColor === 'amber'

  return (
    <div className={`bg-gray-900 rounded-2xl p-5 border ${isAmber ? 'border-amber-500/30' : 'border-teal-500/30'}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{emoji}</span>
        <p className={`font-bold text-sm ${isAmber ? 'text-amber-400' : 'text-teal-400'}`}>{label}</p>
      </div>
      <div className="flex gap-3">
        {[
          { value: timeLeft.days, unit: 'days' },
          { value: timeLeft.hours, unit: 'hrs' },
          { value: timeLeft.minutes, unit: 'min' },
        ].map(({ value, unit }) => (
          <div key={unit} className="flex-1 text-center bg-gray-800 rounded-xl py-3 px-1">
            <div className={`font-bold text-2xl ${isAmber ? 'text-amber-400' : 'text-teal-400'}`}>{value ?? '—'}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressRing({ percent, size = 110, strokeWidth = 9 }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#1f2937" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="#f59e0b" strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  )
}

function QuickStatusCard({ icon: Icon, title, status, detail, accentClass }) {
  const statusStyles = {
    'In Progress': 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    'Done': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    'Urgent': 'bg-red-500/20 text-red-400 border border-red-500/30',
    'Pending': 'bg-gray-700 text-gray-400',
  }
  return (
    <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accentClass}`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[status] || statusStyles['Pending']}`}>
          {status}
        </span>
      </div>
      <p className="font-bold text-gray-100 text-sm">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{detail}</p>
    </div>
  )
}

const upcomingTasks = [
  { task: 'Check passport validity (6+ months needed)', deadline: 'ASAP', priority: 'urgent', phase: 1 },
  { task: 'Contact university for Certificate of Eligibility (COE)', deadline: 'Apr 2026', priority: 'urgent', phase: 1 },
  { task: 'Get marriage certificate apostilled', deadline: 'Apr 2026', priority: 'high', phase: 1 },
  { task: 'Get kids\' birth certificates apostilled', deadline: 'Apr 2026', priority: 'high', phase: 1 },
  { task: 'Research housing near university', deadline: 'Apr 2026', priority: 'medium', phase: 1 },
  { task: 'Apply for student visa at Japanese Embassy, Colombo', deadline: 'May 2026', priority: 'urgent', phase: 1 },
]

export default function Dashboard({ onNavigate }) {
  const [checklistData, setChecklistData] = useState({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tokyo-bound-checklist')
      if (saved) setChecklistData(JSON.parse(saved))
    } catch (e) {}
  }, [])

  const checklistCount = Object.keys(checklistData).length
  const checklistDone = Object.values(checklistData).filter(Boolean).length
  const checklistPercent = checklistCount > 0 ? Math.round((checklistDone / checklistCount) * 100) : 0

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-3xl p-6 lg:p-8 mb-6">
        <div className="absolute top-0 right-0 opacity-5 text-[160px] leading-none select-none pointer-events-none">🌸</div>
        <div className="absolute bottom-0 left-0 opacity-3 text-[120px] leading-none select-none pointer-events-none">⛩️</div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">Japan Adventure Awaits</span>
          </div>
          <h1 className="font-bold text-3xl lg:text-4xl text-gray-100 mb-2">
            こんにちは, Brindha! 👋
          </h1>
          <p className="text-gray-400 text-base lg:text-lg max-w-xl leading-relaxed mb-4">
            You're about to embark on an incredible journey — a new degree, a new country, a new chapter for your whole family. <span className="text-amber-400 font-semibold">You've totally got this!</span> 💪
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Brindha 🎓', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
              { label: 'Malaka 👨', color: 'bg-gray-700 text-gray-300 border-gray-600' },
              { label: 'Aranya 👧', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
              { label: 'Aradhya 👶', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
            ].map(({ label, color }) => (
              <span key={label} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${color}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Countdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <CountdownTimer
          targetDate="2026-06-30T00:00:00"
          label="Phase 1 — Brindha Departs"
          emoji="✈️"
          accentColor="amber"
        />
        <CountdownTimer
          targetDate="2026-08-31T00:00:00"
          label="Phase 2 — Family Arrives in Tokyo"
          emoji="👨‍👩‍👧‍👧"
          accentColor="teal"
        />
      </div>

      {/* Progress + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Progress Ring */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="relative inline-flex items-center justify-center mb-3">
            <ProgressRing percent={checklistPercent} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-bold text-2xl text-amber-400">{checklistPercent}%</span>
              <span className="text-xs text-gray-500">done</span>
            </div>
          </div>
          <p className="font-bold text-gray-100 text-center">Overall Progress</p>
          <p className="text-sm text-gray-500 text-center mt-1">{checklistDone} of {checklistCount} tasks</p>
          <button
            onClick={() => onNavigate('checklist')}
            className="mt-3 text-sm text-amber-400 font-semibold flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            View Checklist <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Status */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          <QuickStatusCard
            icon={FileText}
            title="Visa Status"
            status="In Progress"
            detail="COE needed from university first"
            accentClass="bg-blue-500/20 text-blue-400"
          />
          <QuickStatusCard
            icon={Home}
            title="Housing"
            status="Pending"
            detail="Research neighborhoods near university"
            accentClass="bg-emerald-500/20 text-emerald-400"
          />
          <QuickStatusCard
            icon={Baby}
            title="Kids' School"
            status="Pending"
            detail="Aranya: Yochien | Aradhya: Hoikuen"
            accentClass="bg-pink-500/20 text-pink-400"
          />
          <QuickStatusCard
            icon={FileText}
            title="Documents"
            status="Urgent"
            detail="Apostille marriage + birth certs"
            accentClass="bg-amber-500/20 text-amber-400"
          />
        </div>
      </div>

      {/* Two Phases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Phase 1 */}
        <div className="bg-gray-900 border border-amber-500/20 rounded-2xl overflow-hidden">
          <div className="border-l-4 border-amber-500 bg-gray-800 px-5 py-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-amber-500/20 border border-amber-500/40 rounded-lg flex items-center justify-center font-bold text-amber-400 text-sm">1</div>
            <div>
              <p className="font-bold text-gray-100 text-sm">Phase 1 — Brindha Solo</p>
              <p className="text-gray-400 text-xs">By End of June 2026</p>
            </div>
            <Plane className="w-4 h-4 text-amber-400 ml-auto" />
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
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => onNavigate('visa')}
              className="w-full text-center text-sm font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 py-2 rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              View Visa Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-gray-900 border border-teal-500/20 rounded-2xl overflow-hidden">
          <div className="border-l-4 border-teal-500 bg-gray-800 px-5 py-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-teal-500/20 border border-teal-500/40 rounded-lg flex items-center justify-center font-bold text-teal-400 text-sm">2</div>
            <div>
              <p className="font-bold text-gray-100 text-sm">Phase 2 — Family Together</p>
              <p className="text-gray-400 text-xs">End of August 2026</p>
            </div>
            <Heart className="w-4 h-4 text-teal-400 ml-auto" />
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
                <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => onNavigate('checklist')}
              className="w-full text-center text-sm font-semibold text-teal-400 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20 py-2 rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              Full Checklist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Upcoming Tasks
          </h2>
          <button
            onClick={() => onNavigate('checklist')}
            className="text-sm text-amber-400 font-semibold flex items-center gap-1 hover:text-amber-300"
          >
            All Tasks <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-1">
          {upcomingTasks.map((task, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition-colors">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                task.priority === 'urgent' ? 'bg-red-400' :
                task.priority === 'high' ? 'bg-amber-400' : 'bg-blue-400'
              }`} />
              <span className="flex-1 text-sm text-gray-300">{task.task}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                task.phase === 1
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
              }`}>
                P{task.phase}
              </span>
              <span className="text-xs text-gray-500 flex-shrink-0 hidden sm:block">{task.deadline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Encouragement Footer */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">🌸 🗼 🌸</div>
        <p className="font-bold text-gray-100 text-lg">桜が咲く — The cherry blossoms are waiting for you!</p>
        <p className="text-gray-400 text-sm mt-1 max-w-lg mx-auto">
          Tokyo is going to be an incredible home for your family. Brindha, you're juggling so much — work, two little ones, a masters degree, AND this move. You're absolutely amazing. 🧡
        </p>
      </div>
    </div>
  )
}
