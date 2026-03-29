import React, { useState } from 'react'
import { CheckCircle2, Clock, Star, Plane, Home, FileText, Baby, Users, Sparkles } from 'lucide-react'

const months = [
  {
    month: 'March 2026',
    shortMonth: 'Mar',
    phase: 1,
    status: 'current',
    emoji: '🌱',
    subtitle: 'Start Your Engines!',
    color: 'orange',
    tasks: [
      { text: 'Check all passports — need 6+ months validity', priority: 'urgent', icon: '📄' },
      { text: 'Contact university about Certificate of Eligibility (COE) process', priority: 'urgent', icon: '🎓' },
      { text: 'Research neighborhoods in Tokyo near your university', priority: 'high', icon: '🗺️' },
      { text: 'Set up Wise account for money transfers', priority: 'medium', icon: '💸' },
      { text: 'Get marriage certificate ready for apostille', priority: 'high', icon: '💍' },
      { text: 'Get kids\' birth certificates ready for apostille', priority: 'high', icon: '👶' },
    ],
    note: 'You have about 3 months until Brindha leaves. Start the COE process immediately — it takes 1–3 months!',
  },
  {
    month: 'April 2026',
    shortMonth: 'Apr',
    phase: 1,
    status: 'upcoming',
    emoji: '🌸',
    subtitle: 'Documents & Preparation',
    color: 'orange',
    tasks: [
      { text: 'University submits COE application to Japanese immigration', priority: 'urgent', icon: '📋' },
      { text: 'Get marriage certificate apostilled at Sri Lankan Dept of Government Printing', priority: 'urgent', icon: '📜' },
      { text: 'Get Aranya & Aradhya\'s birth certificates apostilled', priority: 'urgent', icon: '📜' },
      { text: 'Research temporary housing options in Tokyo (university dorm, share house)', priority: 'high', icon: '🏠' },
      { text: 'Book dental & medical checkups for whole family', priority: 'medium', icon: '🦷' },
      { text: 'Start researching hoikuen and yochien options', priority: 'medium', icon: '🏫' },
      { text: 'Stock up on Sri Lankan medications (hard to find in Japan)', priority: 'medium', icon: '💊' },
    ],
    note: 'The apostille process is critical — don\'t delay this! Japanese immigration requires apostilled documents.',
  },
  {
    month: 'May 2026',
    shortMonth: 'May',
    phase: 1,
    status: 'upcoming',
    emoji: '✈️',
    subtitle: 'Visa & Flight Time!',
    color: 'orange',
    tasks: [
      { text: 'COE should arrive — apply for student visa at Japanese Embassy, Colombo', priority: 'urgent', icon: '🛂' },
      { text: 'Book Brindha\'s one-way flight to Tokyo', priority: 'urgent', icon: '✈️' },
      { text: 'Confirm temporary housing booking for first 4–8 weeks', priority: 'urgent', icon: '🏡' },
      { text: 'Buy travel insurance for Brindha', priority: 'high', icon: '🛡️' },
      { text: 'Start packing essentials (documents, medicine, clothes)', priority: 'high', icon: '🧳' },
      { text: 'Brief Malaka on kids\' routines — he\'ll be solo parent for 2 months!', priority: 'high', icon: '👨' },
      { text: 'Notify employer about departure', priority: 'high', icon: '👔' },
      { text: 'Complete final masters assignment if possible', priority: 'medium', icon: '📝' },
    ],
    note: 'Visa processing at Embassy in Colombo takes 5–7 working days after submitting. Apply as soon as COE arrives!',
  },
  {
    month: 'June 2026',
    shortMonth: 'Jun',
    phase: 1,
    status: 'upcoming',
    emoji: '🎓',
    subtitle: 'Brindha Takes Flight!',
    color: 'orange',
    tasks: [
      { text: '🎉 BRINDHA DEPARTS FOR TOKYO!', priority: 'urgent', icon: '🌸' },
      { text: 'Arrive at temporary housing (dorm or share house)', priority: 'urgent', icon: '🏠' },
      { text: 'Register at ward office (区役所) within 14 days of arrival', priority: 'urgent', icon: '🏛️' },
      { text: 'Get Residence Card at airport or ward office', priority: 'urgent', icon: '🪪' },
      { text: 'Set up Japan Post Bank account', priority: 'high', icon: '🏦' },
      { text: 'Get SIM card (IIJmio, ahamo, or similar)', priority: 'high', icon: '📱' },
      { text: 'Get IC card (Suica or Pasmo) for transit', priority: 'high', icon: '🚃' },
      { text: 'Malaka starts gathering documents for dependent visa', priority: 'high', icon: '📋' },
    ],
    note: 'First 2 weeks in Japan are intense! Register at ward office ASAP — this unlocks national health insurance and other services.',
  },
  {
    month: 'July 2026',
    shortMonth: 'Jul',
    phase: 2,
    status: 'upcoming',
    emoji: '🏠',
    subtitle: 'Brindha Settles In',
    color: 'teal',
    tasks: [
      { text: 'Apply for My Number card (マイナンバー)', priority: 'urgent', icon: '🪪' },
      { text: 'Enroll in National Health Insurance (国民健康保険)', priority: 'urgent', icon: '🏥' },
      { text: 'University registration & orientation', priority: 'urgent', icon: '🎓' },
      { text: 'Start searching for family apartment (2LDK or 3LDK)', priority: 'high', icon: '🔍' },
      { text: 'Research hoikuen near family housing area', priority: 'high', icon: '🏫' },
      { text: 'Send Brindha\'s Residence Card copy to Malaka for dependent visa', priority: 'urgent', icon: '📬' },
      { text: 'Malaka applies for dependent visas (family + kids)', priority: 'urgent', icon: '🛂' },
      { text: 'In Sri Lanka: Book family flights', priority: 'high', icon: '✈️' },
    ],
    note: 'In Sri Lanka, Malaka needs Brindha\'s residence card copy + apostilled documents to apply for dependent visas. Timeline: 2–4 weeks processing.',
  },
  {
    month: 'August 2026',
    shortMonth: 'Aug',
    phase: 2,
    status: 'upcoming',
    emoji: '👨‍👩‍👧‍👧',
    subtitle: 'Family Getting Ready!',
    color: 'teal',
    tasks: [
      { text: 'Brindha: Secure family apartment (lease signed!)', priority: 'urgent', icon: '🔑' },
      { text: 'Brindha: Set up family apartment — furniture, kids\' essentials', priority: 'high', icon: '🛋️' },
      { text: 'In Sri Lanka: Dependent visas should be ready — collect passports', priority: 'urgent', icon: '🛂' },
      { text: 'In Sri Lanka: Pack family belongings', priority: 'high', icon: '📦' },
      { text: 'In Sri Lanka: Sell or store large items', priority: 'medium', icon: '🏷️' },
      { text: 'In Sri Lanka: Last medical checkups for kids', priority: 'high', icon: '🩺' },
      { text: '🎉 MALAKA + ARANYA + ARADHYA ARRIVE IN TOKYO!', priority: 'urgent', icon: '🌸' },
      { text: 'FAMILY REUNION! You\'re all finally together in Japan! 💕', priority: 'urgent', icon: '💕' },
    ],
    note: 'The whole family will be together in Tokyo by end of August. What an achievement! 🎊',
  },
  {
    month: 'September 2026',
    shortMonth: 'Sep',
    phase: 2,
    status: 'future',
    emoji: '🌟',
    subtitle: 'New Life Begins!',
    color: 'teal',
    tasks: [
      { text: 'Register family at ward office (住民登録)', priority: 'urgent', icon: '🏛️' },
      { text: 'Apply for kids\' residence cards', priority: 'urgent', icon: '🪪' },
      { text: 'Enroll kids in national health insurance', priority: 'urgent', icon: '🏥' },
      { text: 'Apply for hoikuen spots for Aradhya (waiting lists!)', priority: 'urgent', icon: '🏫' },
      { text: 'Apply for yochien for Aranya', priority: 'high', icon: '🏫' },
      { text: 'Malaka: Apply for work permission (資格外活動許可)', priority: 'high', icon: '💼' },
      { text: 'Explore your neighborhood — find parks, shops, community', priority: 'medium', icon: '🌳' },
      { text: 'Join expat groups and find Sri Lankan community in Tokyo', priority: 'medium', icon: '🤝' },
    ],
    note: 'September is the start of a beautiful new chapter. Take it one day at a time — you\'re not alone in this!',
  },
]

const colorMap = {
  orange: {
    bg: 'bg-orange-500',
    light: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    ring: 'ring-orange-400',
    dot: 'bg-orange-400',
    headerBg: 'bg-gradient-to-r from-orange-500 to-amber-400',
  },
  teal: {
    bg: 'bg-teal-500',
    light: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700',
    ring: 'ring-teal-400',
    dot: 'bg-teal-400',
    headerBg: 'bg-gradient-to-r from-teal-500 to-cyan-400',
  },
}

const priorityColors = {
  urgent: 'bg-red-100 text-red-600',
  high: 'bg-orange-100 text-orange-600',
  medium: 'bg-blue-100 text-blue-600',
}

export default function Timeline() {
  const [expandedMonth, setExpandedMonth] = useState('March 2026')

  return (
    <div className="page-container p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">📅</span>
          <h1 className="font-display font-bold text-3xl text-gray-800">Your Journey Timeline</h1>
        </div>
        <p className="text-gray-500 text-base">Month-by-month roadmap from Sri Lanka to Tokyo — March to September 2026</p>
      </div>

      {/* Phase Legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2">
          <div className="w-3 h-3 rounded-full bg-orange-400" />
          <span className="text-sm font-semibold text-orange-700">Phase 1 — Brindha Solo (Mar–Jun)</span>
        </div>
        <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-4 py-2">
          <div className="w-3 h-3 rounded-full bg-teal-400" />
          <span className="text-sm font-semibold text-teal-700">Phase 2 — Family Journey (Jul–Sep)</span>
        </div>
      </div>

      {/* Horizontal Month Picker */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-6">
        {months.map((m) => {
          const c = colorMap[m.color]
          const isActive = expandedMonth === m.month
          return (
            <button
              key={m.month}
              onClick={() => setExpandedMonth(isActive ? null : m.month)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 transition-all duration-200 ${
                isActive
                  ? `${c.bg} border-transparent text-white shadow-lg`
                  : `bg-white ${c.border} text-gray-600 hover:${c.light}`
              }`}
            >
              <span className="text-lg">{m.emoji}</span>
              <span className="text-xs font-bold tracking-wide">{m.shortMonth}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                isActive ? 'bg-white/25 text-white' : c.badge
              }`}>Ph{m.phase}</span>
            </button>
          )
        })}
      </div>

      {/* Timeline Months */}
      <div className="space-y-4">
        {months.map((m, idx) => {
          const c = colorMap[m.color]
          const isExpanded = expandedMonth === m.month
          const isCurrent = m.status === 'current'

          return (
            <div
              key={m.month}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                isCurrent ? `${c.border} ring-2 ${c.ring} ring-offset-1` : c.border
              } bg-white`}
            >
              {/* Month Header */}
              <button
                className="w-full text-left"
                onClick={() => setExpandedMonth(isExpanded ? null : m.month)}
              >
                <div className={`${c.headerBg} px-5 py-4 flex items-center gap-4`}>
                  <span className="text-3xl">{m.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-display font-bold text-white text-lg">{m.month}</h2>
                      {isCurrent && (
                        <span className="bg-white/30 text-white text-xs font-bold px-2.5 py-0.5 rounded-full animate-pulse-soft">
                          YOU ARE HERE
                        </span>
                      )}
                      <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        Phase {m.phase}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm font-medium">{m.subtitle}</p>
                  </div>
                  <div className="text-white/70 text-sm font-bold">
                    {isExpanded ? '▲' : '▼'}
                  </div>
                </div>
              </button>

              {/* Month Content */}
              {isExpanded && (
                <div className="p-5">
                  {/* Note */}
                  <div className={`rounded-xl p-3.5 mb-4 ${c.light} border ${c.border}`}>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold">💡 Note: </span>{m.note}
                    </p>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2">
                    {m.tasks.map((task, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                          task.text.includes('!') || task.text.startsWith('🎉') || task.text.includes('ARRIVES') || task.text.includes('DEPARTS')
                            ? `${c.light} border ${c.border}`
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">{task.icon}</span>
                        <span className={`flex-1 text-sm ${
                          task.text.includes('DEPARTS') || task.text.includes('ARRIVES') || task.text.includes('REUNION')
                            ? `font-bold ${c.text}`
                            : 'text-gray-700'
                        }`}>{task.text}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${priorityColors[task.priority]}`}>
                          {task.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-6 text-center border border-orange-100">
        <p className="font-display font-bold text-gray-800 text-lg mb-1">🌸 One Step at a Time</p>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          This timeline is your guide, not a pressure cooker. Every family's journey is unique.
          Focus on today's tasks, and the rest will follow. You've got an amazing adventure ahead! 🗼
        </p>
      </div>
    </div>
  )
}
