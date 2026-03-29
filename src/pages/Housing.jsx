import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

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

const neighborhoods = [
  {
    name: 'Bunkyo (文京区)', vibe: 'Academic, quiet, green',
    pros: ['Home to Tokyo University, many academic institutions', 'Good parks (Koishikawa Korakuen)', 'Family friendly', 'Reasonable rent for Tokyo'],
    cons: ['A bit far from central entertainment areas'],
    rent: '¥80,000–¥130,000 (1LDK)', emoji: '🎓', good: true,
  },
  {
    name: 'Suginami (杉並区)', vibe: 'Residential, family-friendly',
    pros: ['Very family-oriented', 'Good schools', 'Quiet streets', 'More affordable'],
    cons: ['Less central', 'Requires train to most universities'],
    rent: '¥70,000–¥110,000 (1LDK)', emoji: '🏡', good: true,
  },
  {
    name: 'Nerima (練馬区)', vibe: 'Suburban, affordable, green',
    pros: ['Most affordable among Tokyo wards', 'Large parks', 'Family community feel', 'Good schools'],
    cons: ['Far from central Tokyo'],
    rent: '¥60,000–¥100,000 (1LDK)', emoji: '🌳', good: true,
  },
  {
    name: 'Shinjuku (新宿区)', vibe: 'Busy, central, expensive',
    pros: ['Central location', 'Korean Town (Shin-Okubo) — Asian foods nearby!', 'Great transport hub'],
    cons: ['Expensive', 'Very busy', 'Not ideal for small children'],
    rent: '¥110,000–¥200,000 (1LDK)', emoji: '🌆', good: false,
  },
  {
    name: 'Koenji / Nakano (中野区)', vibe: 'Trendy, artsy, affordable',
    pros: ['Good balance of affordability and access', 'Expat community', 'Great food scene'],
    cons: ['Busy on weekends', 'Not the quietest for kids'],
    rent: '¥75,000–¥115,000 (1LDK)', emoji: '🎨', good: true,
  },
]

const monthlyBudget = [
  { item: 'Rent (family 2–3LDK)', low: 150000, high: 250000, emoji: '🏠' },
  { item: 'Utilities (electricity, gas, water)', low: 15000, high: 25000, emoji: '💡' },
  { item: 'Internet + mobile (2 phones)', low: 6000, high: 10000, emoji: '📱' },
  { item: 'Food & groceries', low: 50000, high: 80000, emoji: '🛒' },
  { item: 'Transport (IC cards)', low: 10000, high: 20000, emoji: '🚃' },
  { item: 'Kids hoikuen/yochien fees', low: 0, high: 50000, emoji: '🏫' },
  { item: 'Miscellaneous / household', low: 15000, high: 30000, emoji: '🧺' },
]

export default function Housing() {
  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🏡</span>
          <h1 className="font-bold text-3xl text-gray-100">Finding a Home in Tokyo</h1>
        </div>
        <p className="text-gray-400 text-base">From Brindha's first temporary room to your family home together</p>
      </div>

      {/* Phase 1 - Temporary Housing */}
      <Collapsible title="Phase 1 — Brindha's Temporary Housing" emoji="🛏️" accentColor="amber" defaultOpen={true}>
        <InfoBox type="orange">
          <strong>First priority when you land:</strong> Brindha needs somewhere to stay for the first 4–8 weeks while finding a family apartment. Temporary housing is fine — this is just a launching pad!
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 border border-amber-500/20">
            <p className="text-2xl mb-2">🎓</p>
            <p className="font-bold text-amber-400 text-sm">University Dormitory</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Many Japanese universities offer dorm rooms for international students. Usually cheapest (¥30,000–¥60,000/mo). Apply through university housing office ASAP.</p>
            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-emerald-400">✓ Cheapest option</p>
              <p className="text-xs text-emerald-400">✓ On/near campus</p>
              <p className="text-xs text-emerald-400">✓ Community</p>
              <p className="text-xs text-red-400">✗ Limited availability</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500/20">
            <p className="text-2xl mb-2">🏘️</p>
            <p className="font-bold text-blue-400 text-sm">Gaijin House / Share House</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Houses specifically for foreigners. Month-to-month contracts, furnished, bills included. Great for meeting other expats. Usually ¥50,000–¥80,000/mo including bills.</p>
            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-emerald-400">✓ No guarantor needed</p>
              <p className="text-xs text-emerald-400">✓ Flexible contracts</p>
              <p className="text-xs text-emerald-400">✓ Meet expat community</p>
              <p className="text-xs text-red-400">✗ Shared facilities</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500/20">
            <p className="text-2xl mb-2">🏩</p>
            <p className="font-bold text-purple-400 text-sm">Monthly Apartment (マンスリー)</p>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Short-term furnished apartments available weekly/monthly. More privacy, no key money/deposit. Around ¥70,000–¥120,000/mo.</p>
            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-emerald-400">✓ Private, furnished</p>
              <p className="text-xs text-emerald-400">✓ Flexible term</p>
              <p className="text-xs text-red-400">✗ More expensive</p>
              <p className="text-xs text-red-400">✗ Harder to find</p>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Websites to find temporary housing:</strong><br />
          • <strong className="text-gray-100">Sakura House</strong> (sakura-house.com) — popular gaijin houses, no guarantor<br />
          • <strong className="text-gray-100">GaijinPot Housing</strong> (housing.gaijinpot.com) — foreigner-friendly listings<br />
          • <strong className="text-gray-100">Oak House</strong> (oakhouse.jp) — share houses across Tokyo<br />
          • <strong className="text-gray-100">Expat Housing Japan</strong> — furnished short-term apartments
        </InfoBox>
      </Collapsible>

      {/* Family Apartment Search */}
      <Collapsible title="Family Apartment — What You Need" emoji="🏠" accentColor="teal" defaultOpen={false}>
        <div className="bg-gray-800 rounded-xl p-4 border border-teal-500/20 mb-4">
          <p className="font-bold text-teal-400 mb-2">What to look for as a family of 4</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Size', value: '2LDK to 3LDK (2–3 bedrooms + living room)' },
              { label: 'Budget', value: '¥150,000–¥200,000/month for family size' },
              { label: 'Distance', value: 'Within 30–45 min of university by train' },
              { label: 'Priority', value: 'Near good hoikuen/yochien' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-2.5">
                <p className="text-xs text-teal-400 font-semibold">{item.label}</p>
                <p className="text-sm text-gray-100 mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-semibold text-gray-100 mb-3">🔑 Understanding the Rental Process</p>
        <div className="space-y-2 mb-4">
          {[
            { term: '保証人 (Hoshounin) — Guarantor', desc: 'Most regular apartments require a Japanese guarantor. Foreigners often can\'t provide this. Look for apartments with "保証会社OK" (guarantor company OK) or use foreigner-friendly agencies.' },
            { term: '礼金 (Reikin) — Key Money', desc: 'Non-refundable gift to landlord, 1–2 months rent. Many modern apartments have "礼金なし" (no key money) — seek these!' },
            { term: '敷金 (Shikikin) — Security Deposit', desc: 'Refundable deposit, usually 1–2 months rent. Returned at end of lease minus cleaning/repairs.' },
            { term: '仲介手数料 (Agency Fee)', desc: 'Typically 1 month\'s rent paid to the real estate agent.' },
            { term: 'Total Move-in Cost', desc: 'Expect to pay 4–6 months rent upfront for the first apartment (deposit + key money + agency fee + first month).' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-3.5 border border-teal-500/20">
              <p className="font-semibold text-teal-400 text-sm">{item.term}</p>
              <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <InfoBox type="success">
          <strong className="text-emerald-400">UR Housing (UR都市機構)</strong> is the best option for foreigners! Government-managed housing with:
          <ul className="mt-1 space-y-1">
            <li>• No guarantor required</li>
            <li>• No key money</li>
            <li>• Reasonable prices</li>
            <li>• Many family-sized units (2LDK, 3LDK)</li>
            <li>• Website: <strong>ur-net.go.jp</strong></li>
          </ul>
          Apply as soon as you have your residence card!
        </InfoBox>

        <p className="font-semibold text-gray-100 mb-3 mt-4">🌐 Useful Housing Websites</p>
        <div className="grid grid-cols-1 gap-2">
          {[
            { site: 'SUUMO (suumo.jp)', desc: 'Japan\'s largest property portal — most listings, Japanese language' },
            { site: 'GaijinPot Housing (housing.gaijinpot.com)', desc: 'English-language listings, foreigner-friendly' },
            { site: 'UR Housing (ur-net.go.jp)', desc: 'Government housing, no guarantor, English support available' },
            { site: 'Leopalace21 (leopalace21.com)', desc: 'Furnished apartments, foreigner-friendly, flexible contracts' },
            { site: 'Real Estate Japan (realestate.co.jp)', desc: 'English-language listings across Japan' },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 bg-gray-800 rounded-xl border border-teal-500/20">
              <ExternalLink className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-teal-400">{s.site}</p>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Neighborhoods */}
      <Collapsible title="Best Neighborhoods for Your Family" emoji="🗺️" accentColor="blue" defaultOpen={false}>
        <InfoBox type="info">
          <strong>Key factors:</strong> proximity to your university, good hoikuen/yochien access, safety, and reasonable rent. These neighborhoods are great for families!
        </InfoBox>

        <div className="space-y-3">
          {neighborhoods.map((n, i) => (
            <div key={i} className={`bg-gray-800 rounded-xl border-2 p-4 ${n.good ? 'border-emerald-500/30' : 'border-gray-700'}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{n.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-100">{n.name}</p>
                    <p className="text-xs text-gray-400">{n.vibe}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Rent approx</p>
                  <p className="text-sm font-bold text-gray-300">{n.rent}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  {n.pros.map((p, j) => (
                    <p key={j} className="text-xs text-emerald-400 flex items-center gap-1">
                      <span>✓</span> {p}
                    </p>
                  ))}
                </div>
                <div>
                  {n.cons.map((c, j) => (
                    <p key={j} className="text-xs text-gray-500 flex items-center gap-1">
                      <span>–</span> {c}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Monthly Costs */}
      <Collapsible title="Monthly Costs Breakdown" emoji="💴" accentColor="emerald" defaultOpen={false}>
        <InfoBox type="teal">
          <strong>Important:</strong> Kids' hoikuen fees in Japan are income-tested. As a student, Brindha may qualify for significantly reduced or free childcare. Ask your ward office about the 幼児教育無償化 (free early childhood education) program — children 3–5 years old often qualify!
        </InfoBox>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-4">
          <div className="bg-emerald-500/10 px-4 py-2 grid grid-cols-3 gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wide">
            <span>Item</span>
            <span className="text-right">Low est.</span>
            <span className="text-right">High est.</span>
          </div>
          {monthlyBudget.map((item, i) => (
            <div key={i} className={`px-4 py-3 grid grid-cols-3 gap-2 border-b border-gray-700 last:border-0 ${i % 2 === 0 ? '' : 'bg-gray-700/30'}`}>
              <span className="text-sm text-gray-300 flex items-center gap-1.5">
                <span>{item.emoji}</span> {item.item}
              </span>
              <span className="text-sm font-semibold text-emerald-400 text-right">¥{item.low.toLocaleString()}</span>
              <span className="text-sm font-semibold text-gray-300 text-right">¥{item.high.toLocaleString()}</span>
            </div>
          ))}
          <div className="px-4 py-3 grid grid-cols-3 gap-2 bg-emerald-500/10 border-t-2 border-emerald-500/30">
            <span className="text-sm font-bold text-gray-100">Total Monthly</span>
            <span className="text-sm font-bold text-emerald-400 text-right">¥{monthlyBudget.reduce((s, i) => s + i.low, 0).toLocaleString()}</span>
            <span className="text-sm font-bold text-gray-100 text-right">¥{monthlyBudget.reduce((s, i) => s + i.high, 0).toLocaleString()}</span>
          </div>
        </div>

        <InfoBox type="info">
          <strong>💡 Cost-saving tips:</strong><br />
          • Buy furniture second-hand from ハードオフ (Hard Off), ジモティー (Jmty — like Craigslist), or Facebook Marketplace Japan<br />
          • 100 yen stores (Daiso, Seria) for household items — amazing quality!<br />
          • Cook at home using local supermarkets — much cheaper than eating out<br />
          • Get a family discount card (子育て支援カード) from your ward office for discounts at many facilities
        </InfoBox>
      </Collapsible>

      {/* Setting Up Utilities */}
      <Collapsible title="Setting Up Utilities" emoji="⚡" accentColor="amber" defaultOpen={false}>
        <div className="space-y-3">
          {[
            { utility: 'Electricity (電気)', provider: 'TEPCO (Tokyo Electric Power) or choose from competitive providers', how: 'Fill in form left in the apartment mailbox, or call/go online. Usually takes 1–2 days to activate.', emoji: '💡' },
            { utility: 'Gas (ガス)', provider: 'Tokyo Gas or local provider', how: 'An engineer must come to your home to turn on gas. Book appointment online or by phone.', emoji: '🔥' },
            { utility: 'Water (水道)', provider: 'Tokyo Metropolitan Waterworks Bureau', how: 'Usually already active. Fill in change of occupancy form at the ward office.', emoji: '💧' },
            { utility: 'Internet (インターネット)', provider: 'NTT Flets, SoftBank Hikari, NURO — or mobile Wi-Fi (Wi-Fi egg) for flexibility', how: 'Sign up online. Takes 2–4 weeks for fiber installation. Use pocket Wi-Fi initially.', emoji: '📶' },
            { utility: 'Mobile SIM', provider: 'IIJmio, ahamo (NTT Docomo), Rakuten Mobile, Y!mobile', how: 'Sign up online or at stores. Bring residence card + passport. IIJmio is popular with foreign residents.', emoji: '📱' },
          ].map((u, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{u.emoji}</span>
                <p className="font-semibold text-gray-100">{u.utility}</p>
              </div>
              <p className="text-xs text-amber-400 font-medium mb-0.5">Provider: {u.provider}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{u.how}</p>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  )
}
