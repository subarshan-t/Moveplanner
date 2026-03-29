import React, { useState } from 'react'

const months = [
  {
    month: 'March 2026', shortMonth: 'Mar', phase: 1, status: 'current', emoji: '🌱',
    subtitle: 'Start Your Engines!', color: 'amber',
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
    month: 'April 2026', shortMonth: 'Apr', phase: 1, status: 'upcoming', emoji: '🌸', color: 'amber',
    subtitle: 'Documents & Preparation',
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
    month: 'May 2026', shortMonth: 'May', phase: 1, status: 'upcoming', emoji: '✈️', color: 'amber',
    subtitle: 'Visa & Flight Time!',
    tasks: [
      { text: 'COE should arrive — apply for student visa at Japanese Embassy, Colombo', priority: 'urgent', icon: '🛂' },
      { text: 'Book Brindha\'s one-way flight to Tokyo', priority: 'urgent', icon: '✈️' },
      { text: 'Confirm temporary housing booking for first 4–8 weeks', priority: 'urgent', icon: '🏡' },
      { text: 'Buy travel insurance for Brindha', priority: 'high', icon: '🛡️' },
      { text: 'Start packing essentials (documents, medicine, clothes)', priority: 'high', icon: '🧳' },
      { text: 'Brief Malaka on kids\' routines — he\'ll be solo parent for 2 months!', priority: 'high', icon: '👨' },
      { text: 'Notify employer about departure', priority: 'high', icon: '👔' },
    ],
    note: 'Visa processing at Embassy in Colombo takes 5–7 working days after submitting. Apply as soon as COE arrives!',
  },
  {
    month: 'June 2026', shortMonth: 'Jun', phase: 1, status: 'upcoming', emoji: '🎓', color: 'amber',
    subtitle: 'Brindha Takes Flight!',
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
    month: 'July 2026', shortMonth: 'Jul', phase: 2, status: 'upcoming', emoji: '🏠', color: 'teal',
    subtitle: 'Brindha Settles In',
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
    month: 'August 2026', shortMonth: 'Aug', phase: 2, status: 'upcoming', emoji: '👨‍👩‍👧‍👧', color: 'teal',
    subtitle: 'Family Getting Ready!',
    tasks: [
      { text: 'Brindha: Secure family apartment (lease signed!)', priority: 'urgent', icon: '🔑' },
      { text: 'Brindha: Set up family apartment — furniture, kids\' essentials', priority: 'high', icon: '🛋️' },
      { text: 'In Sri Lanka: Dependent visas should be ready — collect passports', priority: 'urgent', icon: '🛂' },
      { text: 'In Sri Lanka: Pack family belongings', priority: 'high', icon: '📦' },
      { text: 'In Sri Lanka: Last medical checkups for kids', priority: 'high', icon: '🩺' },
      { text: '🎉 MALAKA + ARANYA + ARADHYA ARRIVE IN TOKYO!', priority: 'urgent', icon: '🌸' },
      { text: 'FAMILY REUNION! You\'re all finally together in Japan! 💕', priority: 'urgent', icon: '💕' },
    ],
    note: 'The whole family will be together in Tokyo by end of August. What an achievement! 🎊',
  },
  {
    month: 'September 2026', shortMonth: 'Sep', phase: 2, status: 'future', emoji: '🌟', color: 'teal',
    subtitle: 'New Life Begins!',
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

const priorityColors = {
  urgent: 'bg-red-500/20 text-red-400 border border-red-500/30',
  high: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  medium: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
}

export default function Timeline() {
  const [expandedMonth, setExpandedMonth] = useState('March 2026')

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">📅</span>
          <h1 className="font-bold text-3xl text-gray-100">Your Journey Timeline</h1>
        </div>
        <p className="text-gray-400 text-base">Month-by-month roadmap from Sri Lanka to Tokyo — March to September 2026</p>
      </div>

      {/* Phase Legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-sm font-semibold text-amber-400">Phase 1 — Brindha Solo (Mar–Jun)</span>
        </div>
        <div className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-xl px-4 py-2">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
          <span className="text-sm font-semibold text-teal-400">Phase 2 — Family Journey (Jul–Sep)</span>
        </div>
      </div>

      {/* Horizontal Month Picker */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-6">
        {months.map((m) => {
          const isActive = expandedMonth === m.month
          const isAmber = m.color === 'amber'
          return (
            <button
              key={m.month}
              onClick={() => setExpandedMonth(isActive ? null : m.month)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 transition-all duration-200 ${
                isActive
                  ? isAmber
                    ? 'bg-amber-500/20 border-amber-500/60 text-amber-400'
                    : 'bg-teal-500/20 border-teal-500/60 text-teal-400'
                  : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <span className="text-lg">{m.emoji}</span>
              <span className="text-xs font-bold tracking-wide">{m.shortMonth}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                isActive
                  ? isAmber ? 'bg-amber-500/30 text-amber-300' : 'bg-teal-500/30 text-teal-300'
                  : 'bg-gray-800 text-gray-500'
              }`}>Ph{m.phase}</span>
            </button>
          )
        })}
      </div>

      {/* Timeline Months */}
      <div className="space-y-3">
        {months.map((m) => {
          const isExpanded = expandedMonth === m.month
          const isCurrent = m.status === 'current'
          const isAmber = m.color === 'amber'

          return (
            <div
              key={m.month}
              className={`bg-gray-900 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                isAmber ? 'border-amber-500/30' : 'border-teal-500/30'
              } ${isCurrent ? 'ring-1 ring-amber-400/50' : ''}`}
            >
              {/* Month Header */}
              <button
                className="w-full text-left"
                onClick={() => setExpandedMonth(isExpanded ? null : m.month)}
              >
                <div className={`border-l-4 ${isAmber ? 'border-amber-500' : 'border-teal-500'} bg-gray-800 px-5 py-4 flex items-center gap-4`}>
                  <span className="text-2xl">{m.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-bold text-gray-100 text-base">{m.month}</h2>
                      {isCurrent && (
                        <span className="bg-amber-400/20 text-amber-400 border border-amber-400/40 text-xs font-bold px-2 py-0.5 rounded-full">
                          ← YOU ARE HERE
                        </span>
                      )}
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isAmber ? 'bg-amber-500/20 text-amber-400' : 'bg-teal-500/20 text-teal-400'
                      }`}>
                        Phase {m.phase}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{m.subtitle}</p>
                  </div>
                  <div className={`text-sm font-bold ${isAmber ? 'text-amber-400' : 'text-teal-400'}`}>
                    {isExpanded ? '▲' : '▼'}
                  </div>
                </div>
              </button>

              {/* Month Content */}
              {isExpanded && (
                <div className="p-5">
                  {/* Note */}
                  <div className={`rounded-xl p-3.5 mb-4 border ${
                    isAmber ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-teal-500/10 border-teal-500/20 text-teal-300'
                  }`}>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">💡 Note: </span>
                      <span className="text-gray-300">{m.note}</span>
                    </p>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2">
                    {m.tasks.map((task, i) => {
                      const isBig = task.text.includes('DEPARTS') || task.text.includes('ARRIVES') || task.text.includes('REUNION') || task.text.startsWith('🎉')
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-3 rounded-xl ${
                            isBig
                              ? isAmber ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-teal-500/10 border border-teal-500/20'
                              : 'hover:bg-gray-800'
                          }`}
                        >
                          <span className="text-lg flex-shrink-0 mt-0.5">{task.icon}</span>
                          <span className={`flex-1 text-sm ${
                            isBig
                              ? isAmber ? 'font-bold text-amber-400' : 'font-bold text-teal-400'
                              : 'text-gray-300'
                          }`}>{task.text}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${priorityColors[task.priority]}`}>
                            {task.priority}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
        <p className="font-bold text-gray-100 text-lg mb-1">🌸 One Step at a Time</p>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          This timeline is your guide, not a pressure cooker. Every family's journey is unique.
          Focus on today's tasks, and the rest will follow. You've got an amazing adventure ahead! 🗼
        </p>
      </div>
    </div>
  )
}
