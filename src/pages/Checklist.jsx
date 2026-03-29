import React, { useState, useEffect } from 'react'
import { CheckCircle2, Circle, ChevronDown, ChevronUp, RotateCcw, TrendingUp } from 'lucide-react'

const checklistData = [
  {
    phase: 1,
    phaseLabel: 'Phase 1 — Before Brindha Leaves',
    phaseSubtitle: 'March – June 2026',
    phaseColor: 'amber',
    categories: [
      {
        id: 'ph1-docs', title: 'Documents', emoji: '📄',
        items: [
          { id: 'p1d1', text: 'Check passport validity for Brindha (needs 6+ months beyond stay)', urgent: true },
          { id: 'p1d2', text: 'Check passports for Malaka, Aranya, and Aradhya', urgent: true },
          { id: 'p1d3', text: 'Contact university — initiate Certificate of Eligibility (COE) process', urgent: true },
          { id: 'p1d4', text: 'Get marriage certificate apostilled at Ministry of Foreign Affairs', urgent: true },
          { id: 'p1d5', text: "Get Aranya's birth certificate apostilled", urgent: true },
          { id: 'p1d6', text: "Get Aradhya's birth certificate apostilled", urgent: true },
          { id: 'p1d7', text: 'Collect COE from university (expected May 2026)', urgent: false },
          { id: 'p1d8', text: 'Apply for student visa at Japanese Embassy, Colombo', urgent: true },
          { id: 'p1d9', text: 'Make certified copies of all important documents', urgent: false },
          { id: 'p1d10', text: 'Compile original documents folder for travel (in carry-on!)', urgent: false },
        ],
      },
      {
        id: 'ph1-housing', title: 'Housing', emoji: '🏠',
        items: [
          { id: 'p1h1', text: 'Research neighborhoods near your university (commute time, family friendliness)', urgent: false },
          { id: 'p1h2', text: 'Contact university housing office about dormitory availability', urgent: false },
          { id: 'p1h3', text: 'Research gaijin houses / share houses for first month', urgent: false },
          { id: 'p1h4', text: 'Book temporary accommodation for first 4–8 weeks', urgent: true },
          { id: 'p1h5', text: 'Research UR Housing (foreigner-friendly, no guarantor needed)', urgent: false },
          { id: 'p1h6', text: 'Look at GaijinPot Housing, SUUMO, for family apartments', urgent: false },
        ],
      },
      {
        id: 'ph1-finance', title: 'Finance', emoji: '💴',
        items: [
          { id: 'p1f1', text: 'Set up Wise account for international transfers', urgent: true },
          { id: 'p1f2', text: 'Ensure enough funds in bank for visa application + first months in Japan', urgent: true },
          { id: 'p1f3', text: 'Research Japan Post Bank (easiest for foreigners to open)', urgent: false },
          { id: 'p1f4', text: 'Inform Sri Lankan bank about international transfers', urgent: false },
          { id: 'p1f5', text: 'Budget for initial Japan setup costs (¥200,000–300,000 estimated)', urgent: false },
        ],
      },
      {
        id: 'ph1-medical', title: 'Medical & Health', emoji: '🏥',
        items: [
          { id: 'p1m1', text: 'Full family health checkup before departure', urgent: false },
          { id: 'p1m2', text: 'Dental checkup for all family members', urgent: false },
          { id: 'p1m3', text: 'Stock up on medications (3–6 month supply for items hard to find in Japan)', urgent: true },
          { id: 'p1m4', text: 'Kids vaccinations — confirm up to date (Japan has specific requirements)', urgent: true },
          { id: 'p1m5', text: 'Get health records / vaccination records in English', urgent: false },
          { id: 'p1m6', text: 'Buy travel insurance for Brindha covering first months', urgent: true },
          { id: 'p1m7', text: "Brindha's eye checkup + spare glasses/contacts if needed", urgent: false },
        ],
      },
      {
        id: 'ph1-kids', title: 'Kids Preparation', emoji: '👧',
        items: [
          { id: 'p1k1', text: 'Research hoikuen (保育園) and yochien (幼稚園) near prospective housing', urgent: false },
          { id: 'p1k2', text: "Gather Aranya's nursery records from Lyceum", urgent: false },
          { id: 'p1k3', text: "Gather Aradhya's preschool records", urgent: false },
          { id: 'p1k4', text: 'Buy comfort items and favorite snacks for kids', urgent: false },
          { id: 'p1k5', text: "Pack kids' comfort objects (blanket, stuffed animal) in carry-on", urgent: false },
          { id: 'p1k6', text: 'Prepare Malaka for solo parenting during Phase 1 (routines, emergency contacts)', urgent: true },
        ],
      },
      {
        id: 'ph1-work', title: 'Work & Study', emoji: '💼',
        items: [
          { id: 'p1w1', text: 'Notify employer about departure date', urgent: true },
          { id: 'p1w2', text: 'Complete or plan completion of previous masters final assignment', urgent: true },
          { id: 'p1w3', text: 'Handover work responsibilities, say goodbye to colleagues', urgent: false },
          { id: 'p1w4', text: 'Contact new university with any questions about orientation', urgent: false },
          { id: 'p1w5', text: 'Look into university orientation schedule to plan arrival date', urgent: false },
        ],
      },
      {
        id: 'ph1-shopping', title: 'Shopping & Packing', emoji: '🛍️',
        items: [
          { id: 'p1s1', text: 'Buy Sri Lankan food items hard to find in Japan (spices, specific snacks)', urgent: false },
          { id: 'p1s2', text: 'Pack warm clothes — Tokyo winters are cold (Nov–Feb below 10°C)', urgent: false },
          { id: 'p1s3', text: 'Pack sari / traditional clothes if desired (Japan has occasions!)', urgent: false },
          { id: 'p1s4', text: 'Buy adapters (Japan uses Type A plugs, 100V)', urgent: false },
          { id: 'p1s5', text: 'Buy a sturdy suitcase if needed', urgent: false },
          { id: 'p1s6', text: 'Pack photos of family for Brindha (for room in Japan, comfort)', urgent: false },
        ],
      },
    ],
  },
  {
    phase: 2,
    phaseLabel: 'Phase 2 — Brindha in Japan',
    phaseSubtitle: 'July – August 2026 (Brindha\'s tasks)',
    phaseColor: 'teal',
    categories: [
      {
        id: 'ph2-settle', title: 'Settling In Japan', emoji: '🏛️',
        items: [
          { id: 'p2s1', text: 'Register at ward office (区役所) within 14 days of arrival — 住民登録', urgent: true },
          { id: 'p2s2', text: 'Get Residence Card (在留カード) at airport or ward office', urgent: true },
          { id: 'p2s3', text: 'Set up Japan Post Bank account (ゆうちょ銀行)', urgent: true },
          { id: 'p2s4', text: 'Get SIM card (IIJmio, ahamo, Rakuten Mobile, or similar)', urgent: true },
          { id: 'p2s5', text: 'Get Suica or Pasmo IC card at train station', urgent: true },
          { id: 'p2s6', text: 'Apply for My Number card (マイナンバーカード) at ward office', urgent: false },
          { id: 'p2s7', text: 'Enroll in National Health Insurance (国民健康保険)', urgent: true },
          { id: 'p2s8', text: 'University registration and orientation', urgent: true },
          { id: 'p2s9', text: 'Send Residence Card copy to Malaka for dependent visa application', urgent: true },
        ],
      },
      {
        id: 'ph2-family', title: 'Preparing for Family', emoji: '❤️',
        items: [
          { id: 'p2f1', text: 'Find larger family apartment (2LDK or 3LDK) before family arrives', urgent: true },
          { id: 'p2f2', text: 'Set up apartment with basics — futons, kids corner, kitchen essentials', urgent: true },
          { id: 'p2f3', text: 'Buy children\'s items: car seats/strollers if needed, kids bedding', urgent: false },
          { id: 'p2f4', text: 'Research best hoikuen / yochien near family apartment — get applications ready', urgent: true },
          { id: 'p2f5', text: 'Map out nearest supermarkets, parks, doctor, convenience stores', urgent: false },
          { id: 'p2f6', text: 'Find nearest Sri Lankan / South Asian grocery stores', urgent: false },
          { id: 'p2f7', text: 'Learn basic Japanese for everyday situations (numbers, shopping, directions)', urgent: false },
        ],
      },
    ],
  },
  {
    phase: 3,
    phaseLabel: 'Phase 3 — Family Preparation in Sri Lanka',
    phaseSubtitle: 'July – August 2026 (Malaka\'s tasks)',
    phaseColor: 'teal',
    categories: [
      {
        id: 'ph3-visa', title: 'Visa Applications', emoji: '🛂',
        items: [
          { id: 'p3v1', text: "Collect Brindha's Residence Card copy from Japan", urgent: true },
          { id: 'p3v2', text: 'Malaka applies for dependent visa at Japanese Embassy, Colombo', urgent: true },
          { id: 'p3v3', text: "Aranya's dependent visa application", urgent: true },
          { id: 'p3v4', text: "Aradhya's dependent visa application", urgent: true },
          { id: 'p3v5', text: 'Collect passports with dependent visas when ready', urgent: true },
        ],
      },
      {
        id: 'ph3-prep', title: 'Final Preparations', emoji: '📦',
        items: [
          { id: 'p3p1', text: 'Book family flights to Tokyo (Malaka + Aranya + Aradhya)', urgent: true },
          { id: 'p3p2', text: 'Pack family belongings — clothes, comfort items, documents', urgent: false },
          { id: 'p3p3', text: 'Decide what to store vs sell vs donate in Sri Lanka', urgent: false },
          { id: 'p3p4', text: 'Sell or store furniture and large items', urgent: false },
          { id: 'p3p5', text: 'Final kids health checkups and stock up on baby medications', urgent: true },
          { id: 'p3p6', text: 'Notify kids\' schools (Lyceum) about departure', urgent: false },
          { id: 'p3p7', text: 'Arrange storage for sentimental items with family', urgent: false },
          { id: 'p3p8', text: 'Final goodbyes with family and friends 💕', urgent: false },
        ],
      },
    ],
  },
  {
    phase: 4,
    phaseLabel: 'Phase 4 — After Family Arrives',
    phaseSubtitle: 'September 2026 onwards',
    phaseColor: 'emerald',
    categories: [
      {
        id: 'ph4-register', title: 'Registration & Admin', emoji: '🏛️',
        items: [
          { id: 'p4r1', text: 'Register Malaka, Aranya & Aradhya at ward office within 14 days', urgent: true },
          { id: 'p4r2', text: 'Get Residence Cards for all family members', urgent: true },
          { id: 'p4r3', text: 'Enroll whole family in National Health Insurance', urgent: true },
          { id: 'p4r4', text: 'Apply for My Number cards for Malaka and kids', urgent: false },
          { id: 'p4r5', text: 'Add Malaka to bank account or open separate account', urgent: false },
          { id: 'p4r6', text: 'Malaka: apply for work permission at immigration office', urgent: true },
        ],
      },
      {
        id: 'ph4-kids', title: 'Kids School', emoji: '🎒',
        items: [
          { id: 'p4k1', text: 'Apply for hoikuen (保育園) spot for Aradhya — apply ASAP, long wait lists!', urgent: true },
          { id: 'p4k2', text: 'Apply for yochien (幼稚園) for Aranya', urgent: true },
          { id: 'p4k3', text: 'Health checkups for both kids at local clinic', urgent: true },
          { id: 'p4k4', text: 'Buy school supplies (name-tag everything in Japan!)', urgent: false },
          { id: 'p4k5', text: 'Visit kids\' school/daycare before first day to familiarize them', urgent: false },
          { id: 'p4k6', text: 'Connect with other international families in the area', urgent: false },
        ],
      },
      {
        id: 'ph4-settle', title: 'Family Settling', emoji: '🌸',
        items: [
          { id: 'p4s1', text: 'Explore the neighborhood together as a family', urgent: false },
          { id: 'p4s2', text: 'Find nearest playground, park, and family-friendly spaces', urgent: false },
          { id: 'p4s3', text: 'Join local community center (地域センター) for family programs', urgent: false },
          { id: 'p4s4', text: 'Find Sri Lankan community in Tokyo — online groups, temples', urgent: false },
          { id: 'p4s5', text: 'Celebrate settling in together! 🎉', urgent: false },
        ],
      },
    ],
  },
]

const phaseColors = {
  amber: {
    accent: 'border-amber-500',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-400',
    checkbox: 'bg-amber-500 border-amber-500',
    bar: 'bg-amber-500',
    label: 'text-amber-400',
  },
  teal: {
    accent: 'border-teal-500',
    border: 'border-teal-500/30',
    badge: 'bg-teal-500/20 text-teal-400',
    checkbox: 'bg-teal-500 border-teal-500',
    bar: 'bg-teal-500',
    label: 'text-teal-400',
  },
  emerald: {
    accent: 'border-emerald-500',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/20 text-emerald-400',
    checkbox: 'bg-emerald-500 border-emerald-500',
    bar: 'bg-emerald-500',
    label: 'text-emerald-400',
  },
}

export default function Checklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem('tokyo-bound-checklist')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })
  const [expandedCategories, setExpandedCategories] = useState({})

  useEffect(() => {
    try {
      localStorage.setItem('tokyo-bound-checklist', JSON.stringify(checked))
    } catch (e) {}
  }, [checked])

  const toggleItem = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({ ...prev, [catId]: !prev[catId] }))
  }

  const allItems = checklistData.flatMap(p => p.categories.flatMap(c => c.items))
  const totalCount = allItems.length
  const doneCount = allItems.filter(item => checked[item.id]).length
  const overallPercent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0

  const resetAll = () => {
    if (window.confirm('Reset all checklist progress? This cannot be undone.')) {
      setChecked({})
    }
  }

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">✅</span>
            <h1 className="font-bold text-3xl text-gray-100">Master Checklist</h1>
          </div>
          <p className="text-gray-400 text-base">Track every task for your Japan move — saved automatically!</p>
        </div>
        <button
          onClick={resetAll}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-400 transition-colors px-3 py-2 rounded-xl hover:bg-red-500/10"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-gray-100">Overall Progress</span>
          </div>
          <span className="font-bold text-2xl text-amber-400">{overallPercent}%</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
        <p className="text-sm text-gray-500">{doneCount} of {totalCount} tasks completed</p>
        {doneCount === totalCount && totalCount > 0 && (
          <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl p-3 text-center font-semibold text-sm">
            🎉 Everything done! You're incredible, Brindha!
          </div>
        )}
      </div>

      {/* Phases */}
      {checklistData.map((phase) => {
        const c = phaseColors[phase.phaseColor] || phaseColors.amber
        const phaseItems = phase.categories.flatMap(cat => cat.items)
        const phaseDone = phaseItems.filter(item => checked[item.id]).length
        const phasePercent = phaseItems.length > 0 ? Math.round((phaseDone / phaseItems.length) * 100) : 0

        return (
          <div key={phase.phase} className="mb-6">
            {/* Phase Header */}
            <div className={`rounded-2xl bg-gray-900 border-l-4 ${c.accent} border border-r-gray-800 border-t-gray-800 border-b-gray-800 p-4 mb-3`}
              style={{ borderRightColor: 'rgb(31 41 55)', borderTopColor: 'rgb(31 41 55)', borderBottomColor: 'rgb(31 41 55)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm ${c.badge}`}>
                    {phase.phase}
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-100 text-base">{phase.phaseLabel}</h2>
                    <p className="text-gray-400 text-xs">{phase.phaseSubtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-xl ${c.label}`}>{phasePercent}%</p>
                  <p className="text-gray-500 text-xs">{phaseDone}/{phaseItems.length}</p>
                </div>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${c.bar} rounded-full transition-all duration-500`}
                  style={{ width: `${phasePercent}%` }}
                />
              </div>
            </div>

            {/* Categories */}
            {phase.categories.map((cat) => {
              const catDone = cat.items.filter(item => checked[item.id]).length
              const catPercent = cat.items.length > 0 ? Math.round((catDone / cat.items.length) * 100) : 0
              const isOpen = expandedCategories[cat.id] !== false

              return (
                <div key={cat.id} className={`bg-gray-900 rounded-2xl border ${c.border} mb-3 overflow-hidden`}>
                  <button
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800/50 transition-colors"
                    onClick={() => toggleCategory(cat.id)}
                  >
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="font-bold text-gray-100 flex-1">{cat.title}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                      {catDone}/{cat.items.length}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                  </button>

                  {/* Mini progress bar */}
                  <div className="h-0.5 bg-gray-800">
                    <div
                      className={`h-full ${c.bar} transition-all duration-300`}
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>

                  {isOpen && (
                    <div className="px-2 py-2">
                      {cat.items.map((item) => {
                        const isDone = !!checked[item.id]
                        return (
                          <button
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                            className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left group ${
                              isDone ? 'opacity-50' : 'hover:bg-gray-800/60'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200 ${
                              isDone
                                ? `${c.checkbox} text-white`
                                : `border-gray-600 group-hover:${c.accent}`
                            }`}>
                              {isDone && (
                                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className={`text-sm ${isDone ? 'line-through text-gray-500' : 'text-gray-300 group-hover:text-gray-100'}`}>
                                {item.text}
                              </span>
                            </div>
                            {item.urgent && !isDone && (
                              <span className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
                                Urgent
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}

      <div className="text-center py-6 text-gray-500 text-sm">
        ✨ Progress is saved automatically in your browser
      </div>
    </div>
  )
}
