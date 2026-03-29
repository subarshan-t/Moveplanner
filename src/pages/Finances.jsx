import React, { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react'

function InfoBox({ type = 'info', children }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    orange: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-300',
  }
  return (
    <div className={`rounded-xl p-3.5 border mb-3 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  )
}

function Collapsible({ title, emoji, children, defaultOpen = true, accentColor = 'amber' }) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = {
    amber: 'border-amber-500',
    teal: 'border-teal-500',
    emerald: 'border-emerald-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
  }
  const border = colors[accentColor] || colors.amber
  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-5">
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className={`border-l-4 ${border} bg-gray-800 px-5 py-4 flex items-center gap-3`}>
          <span className="text-2xl">{emoji}</span>
          <h2 className="font-bold text-gray-100 text-base flex-1">{title}</h2>
          {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </div>
      </button>
      {open && <div className="p-5">{children}</div>}
    </div>
  )
}

const transferComparison = [
  {
    service: 'Wise (TransferWise)', emoji: '💚',
    rate: 'Mid-market rate + small fee (0.3–0.8%)', speed: '1–2 days',
    best: 'Best for regular transfers', recommended: true,
    note: 'The best option for sending LKR → JPY. Low fees, real exchange rate. Set up before you leave Sri Lanka.',
  },
  {
    service: 'Western Union', emoji: '🏦',
    rate: 'Below mid-market, higher fees', speed: 'Minutes to 1 day',
    best: 'Emergency transfers', recommended: false,
    note: 'Use only in emergencies. Much higher fees than Wise.',
  },
  {
    service: 'Bank Transfer (SWIFT)', emoji: '🏛️',
    rate: 'Bank rate + SWIFT fees (often ¥2,000–5,000 fee)', speed: '3–5 days',
    best: 'Large one-time transfers', recommended: false,
    note: 'Fine for occasional large transfers but expensive for regular use.',
  },
  {
    service: 'Remitly', emoji: '💙',
    rate: 'Competitive, slightly below Wise', speed: '1–3 days',
    best: 'Alternative to Wise', recommended: false,
    note: 'Good backup option. Sometimes has promotional rates.',
  },
]

const bankingOptions = [
  {
    bank: 'Japan Post Bank (ゆうちょ銀行)', english: 'Japan Post Bank (Yucho Ginko)',
    difficulty: 'Easy', emoji: '📮',
    note: 'Best for newly arrived foreigners! Available at post offices everywhere. No minimum balance. English support. Recommended as your first account.',
    requirements: ['Residence card (在留カード)', 'Passport', 'Seal/signature (can use signature)'],
    color: 'border-amber-500/30',
  },
  {
    bank: 'SMBC (三井住友銀行)', english: 'Sumitomo Mitsui Banking Corp',
    difficulty: 'Medium', emoji: '🏦',
    note: 'Major bank with English app. More widely accepted for payments and automatic deductions.',
    requirements: ['Residence card', 'Passport', 'Must have lived in Japan for several months'],
    color: 'border-blue-500/30',
  },
  {
    bank: 'Sony Bank', english: 'Sony Bank (Online)',
    difficulty: 'Medium', emoji: '💻',
    note: 'Online bank with excellent foreign currency exchange rates. Great for transfers. English interface.',
    requirements: ['Residence card', 'Japanese phone number', 'Online setup'],
    color: 'border-gray-600',
  },
]

const discounts = [
  { discount: 'Student Commuter Pass (定期券)', detail: 'Get a student commuter pass for your regular train route. Saves 30–50% vs buying tickets daily.', emoji: '🚃' },
  { discount: 'University Library', detail: 'Free access to massive research collections. Save ¥5,000–10,000/month vs buying books.', emoji: '📚' },
  { discount: 'Museum/Gallery Discounts', detail: 'Student ID card (学生証) gets discounts at most museums, theaters, and attractions in Tokyo.', emoji: '🎭' },
  { discount: '学割 (Gakuwari) Student Discount', detail: 'Flash your student ID at restaurants, software, travel booking — many places offer discounts (usually 10–20%).', emoji: '🎫' },
  { discount: 'University Cafeteria (学食)', detail: 'University cafeterias serve meals for ¥300–500. Much cheaper than outside restaurants.', emoji: '🍱' },
  { discount: '100 Yen Stores', detail: 'Daiso, Seria, Can★Do — everything from kitchen to stationery for ¥110. Amazing value!', emoji: '🛍️' },
  { discount: 'Second-hand Stores (リサイクルショップ)', detail: 'Hard Off, BookOff, Mode Off — great furniture and clothing. Especially good for kids\' items!', emoji: '♻️' },
]

export default function Finances() {
  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">💴</span>
          <h1 className="font-bold text-3xl text-gray-100">Money Matters</h1>
        </div>
        <p className="text-gray-400 text-base">Transfers, banking, budgeting, and making the most of your yen</p>
      </div>

      {/* Stipend Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">🎓</span>
          <p className="font-bold text-amber-400">Government Scholarship Stipend</p>
        </div>
        <p className="text-gray-300 text-sm">
          Brindha's monthly stipend: <strong className="text-amber-400 text-lg">¥150,000/month</strong> — plus Malaka's part-time income.
          Together this makes Tokyo fully feasible for a family of 4.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-900 border border-amber-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">¥150k</p>
          <p className="text-xs text-gray-400 mt-0.5">Monthly Stipend</p>
          <p className="text-xs text-gray-500">(government scholarship)</p>
        </div>
        <div className="bg-gray-900 border border-teal-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-teal-400">28h/wk</p>
          <p className="text-xs text-gray-400 mt-0.5">Malaka can work</p>
          <p className="text-xs text-gray-500">(with work permission)</p>
        </div>
        <div className="bg-gray-900 border border-emerald-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">¥1,163</p>
          <p className="text-xs text-gray-400 mt-0.5">Tokyo min. wage/hr</p>
          <p className="text-xs text-gray-500">(as of 2025)</p>
        </div>
      </div>

      {/* Money Transfers */}
      <Collapsible title="Sending Money Sri Lanka → Japan" emoji="💸" accentColor="amber" defaultOpen={true}>
        <InfoBox type="success">
          <strong className="text-emerald-400">Top Recommendation: Use Wise!</strong> Wise gives you the mid-market (real) exchange rate with transparent fees. Sign up at <strong className="text-emerald-400">wise.com</strong> before you leave Sri Lanka. You can send LKR directly to your Japan Post Bank account.
        </InfoBox>

        <div className="space-y-3">
          {transferComparison.map((t, i) => (
            <div key={i} className={`rounded-xl p-4 border-2 bg-gray-800 ${t.recommended ? 'border-emerald-500/40' : 'border-gray-700'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{t.emoji}</span>
                <p className="font-bold text-gray-100">{t.service}</p>
                {t.recommended && (
                  <span className="ml-auto bg-emerald-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    ★ Recommended
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-xs">
                  <span className="text-gray-500">Rate: </span>
                  <span className="text-gray-300 font-medium">{t.rate}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Speed: </span>
                  <span className="text-gray-300 font-medium">{t.speed}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{t.note}</p>
            </div>
          ))}
        </div>

        <InfoBox type="info">
          <strong>💡 Pro Tip:</strong> Set up automatic monthly transfers on Wise for scholarship money or family support. You can schedule recurring transfers and lock in good rates when they're available.
        </InfoBox>
      </Collapsible>

      {/* Banking */}
      <Collapsible title="Banking in Japan" emoji="🏦" accentColor="blue" defaultOpen={false}>
        <InfoBox type="warning">
          <strong>First thing to do when you arrive:</strong> Open a Japan Post Bank account. You'll need this for:
          receiving salary/scholarship, setting up utility direct debits, and receiving money from Sri Lanka.
        </InfoBox>

        <div className="space-y-3 mb-4">
          {bankingOptions.map((bank, i) => (
            <div key={i} className={`rounded-xl p-4 border-2 bg-gray-800 ${bank.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{bank.emoji}</span>
                <div>
                  <p className="font-bold text-gray-100 text-sm">{bank.bank}</p>
                  <p className="text-xs text-gray-500">{bank.english}</p>
                </div>
                <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${
                  bank.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' :
                  bank.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-red-500/20 text-red-400'
                }`}>{bank.difficulty}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-2">{bank.note}</p>
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-1">Requirements:</p>
                {bank.requirements.map((r, j) => (
                  <p key={j} className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-gray-600">•</span> {r}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl border border-blue-500/20 p-4">
          <p className="font-semibold text-gray-100 mb-2">💳 IC Card (Suica / Pasmo) — Also a Payment Tool</p>
          <p className="text-sm text-gray-400 leading-relaxed">Your Suica or Pasmo IC card works at:</p>
          <ul className="mt-2 space-y-1">
            {[
              'All trains and buses in Tokyo (and most of Japan)',
              'Convenience stores (7-Eleven, FamilyMart, Lawson)',
              'Supermarkets and vending machines',
              'Some restaurants',
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>

      {/* Malaka's Work Income */}
      <Collapsible title="Malaka's Work Income Potential" emoji="💼" accentColor="teal" defaultOpen={false}>
        <InfoBox type="teal">
          <strong>Good news!</strong> With work permission (資格外活動許可), Malaka can work up to 28 hours/week.
          English skills are a significant asset in Tokyo — English teaching pays well above minimum wage!
        </InfoBox>

        <div className="space-y-3 mb-4">
          {[
            { job: 'English Conversation School Teacher', hourlyRate: '¥2,500–¥3,500/hr', monthlyEst: '¥280,000–¥392,000', note: 'Apply to NOVA, ECC, AEON, Berlitz, or private language schools. Often flexible hours.', emoji: '👨‍🏫', color: 'border-teal-500/30' },
            { job: 'Private English Tutor', hourlyRate: '¥3,000–¥5,000/hr', monthlyEst: 'Variable', note: 'Higher rate but requires finding students. Platforms: iTalki, Superprof, Preply for online. Word of mouth locally.', emoji: '📚', color: 'border-blue-500/30' },
            { job: 'Restaurant / Cafe Work', hourlyRate: '¥1,200–¥1,500/hr', monthlyEst: '¥134,400–¥168,000', note: 'Easier to find quickly. Many restaurants in central Tokyo welcome English speakers. Good for Japanese practice.', emoji: '🍱', color: 'border-amber-500/30' },
            { job: 'Convenience Store (コンビニ)', hourlyRate: '¥1,163–¥1,300/hr', monthlyEst: '¥130,000–¥146,000', note: 'Very foreigner-friendly. 7-Eleven, FamilyMart, Lawson all hire part-timers. Good Japanese practice.', emoji: '🏪', color: 'border-gray-600' },
          ].map((j, i) => (
            <div key={i} className={`rounded-xl p-4 border-2 bg-gray-800 ${j.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{j.emoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-100">{j.job}</p>
                  <div className="flex gap-4 mt-1 mb-2">
                    <div>
                      <p className="text-xs text-gray-500">Hourly</p>
                      <p className="text-sm font-semibold text-teal-400">{j.hourlyRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Monthly (28h/wk)</p>
                      <p className="text-sm font-semibold text-gray-100">{j.monthlyEst}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{j.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <InfoBox type="warning">
          <strong>Remember the hours limit:</strong> 28 hours/week during normal time. <strong className="text-amber-400">Only 8 hours/week</strong> during Japanese school holidays (summer July–Aug, winter Dec–Jan, spring late Mar). Plan income accordingly.
        </InfoBox>
      </Collapsible>

      {/* Student Discounts */}
      <Collapsible title="Student Discounts & Saving Tips" emoji="🎓" accentColor="purple" defaultOpen={false}>
        <div className="space-y-2">
          {discounts.map((d, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-3.5 border border-purple-500/20 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">{d.emoji}</span>
              <div>
                <p className="font-semibold text-gray-100 text-sm">{d.discount}</p>
                <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Budget Overview */}
      <Collapsible title="Monthly Budget Overview" emoji="📊" accentColor="emerald" defaultOpen={false}>
        <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 mb-4">
          <p className="font-bold text-amber-400 mb-3">Phase 1 — Brindha Alone (July–August)</p>
          <div className="space-y-2">
            {[
              { label: 'Rent (temporary housing)', amount: '¥60,000–80,000' },
              { label: 'Food & daily expenses', amount: '¥40,000–60,000' },
              { label: 'Transport', amount: '¥8,000–12,000' },
              { label: 'Phone/Internet', amount: '¥3,000–5,000' },
              { label: 'Misc / study materials', amount: '¥10,000–20,000' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-300">{item.label}</span>
                <span className="font-semibold text-amber-400">{item.amount}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm border-t border-amber-500/20 pt-2 mt-2">
              <span className="font-bold text-gray-100">Total</span>
              <span className="font-bold text-amber-400">¥121,000–177,000/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Stipend</span>
              <span className="font-semibold text-emerald-400">¥150,000/mo ✓</span>
            </div>
          </div>
        </div>

        <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/20">
          <p className="font-bold text-teal-400 mb-3">Phase 2 — Whole Family (September onwards)</p>
          <div className="space-y-2">
            {[
              { label: 'Rent (family 2–3LDK)', amount: '¥150,000–200,000' },
              { label: 'Food & groceries', amount: '¥60,000–80,000' },
              { label: 'Transport (all)', amount: '¥15,000–25,000' },
              { label: 'Utilities', amount: '¥18,000–28,000' },
              { label: 'Kids hoikuen/yochien', amount: '¥0–50,000 (income-tested)' },
              { label: 'Misc, clothing, medical', amount: '¥20,000–40,000' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-300">{item.label}</span>
                <span className="font-semibold text-teal-400">{item.amount}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm border-t border-teal-500/20 pt-2 mt-2">
              <span className="font-bold text-gray-100">Total (without Malaka working)</span>
              <span className="font-bold text-teal-400">¥263,000–423,000/mo</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-bold text-gray-100">With Malaka English teaching (28h/wk)</span>
              <span className="font-bold text-emerald-400">+¥280,000 = surplus! ✓</span>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Scholarship reminder:</strong> The government scholarship stipend is ¥150,000/month. Check if it includes any family supplement. JASSO scholarships and MEXT sometimes have family living allowances. Ask your academic advisor!
        </InfoBox>
      </Collapsible>
    </div>
  )
}
