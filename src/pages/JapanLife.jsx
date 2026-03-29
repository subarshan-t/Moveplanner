import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function Collapsible({ title, emoji, children, defaultOpen = true, accentColor = 'amber' }) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = {
    amber: 'border-amber-500',
    teal: 'border-teal-500',
    emerald: 'border-emerald-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    pink: 'border-pink-500',
    red: 'border-red-500',
    indigo: 'border-indigo-500',
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

function InfoCard({ emoji, title, children, accentColor = 'amber' }) {
  const colors = {
    amber: 'bg-amber-500/10 border-amber-500/20',
    blue: 'bg-blue-500/10 border-blue-500/20',
    emerald: 'bg-emerald-500/10 border-emerald-500/20',
    purple: 'bg-purple-500/10 border-purple-500/20',
    pink: 'bg-pink-500/10 border-pink-500/20',
    teal: 'bg-teal-500/10 border-teal-500/20',
    red: 'bg-red-500/10 border-red-500/20',
    yellow: 'bg-yellow-500/10 border-yellow-500/20',
    green: 'bg-emerald-500/10 border-emerald-500/20',
    orange: 'bg-amber-500/10 border-amber-500/20',
    indigo: 'bg-indigo-500/10 border-indigo-500/20',
  }
  return (
    <div className={`rounded-xl border-2 ${colors[accentColor] || colors.amber} p-4 mb-3`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">{emoji}</span>
        <div>
          {title && <p className="font-bold text-gray-100 mb-1">{title}</p>}
          <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

function TipRow({ jp, en, note }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-700 last:border-0">
      <span className="font-bold text-pink-400 text-base min-w-[110px]">{jp}</span>
      <span className="text-gray-300 text-sm flex-1">{en}{note && <span className="text-gray-500 ml-2">— {note}</span>}</span>
    </div>
  )
}

function AppCard({ name, emoji, desc, platform }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-3 flex items-start gap-3">
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="font-semibold text-gray-100 text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{desc}</p>
        {platform && <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full mt-1 inline-block">{platform}</span>}
      </div>
    </div>
  )
}

export default function JapanLife() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          🌸 Japan Life Guide
        </div>
        <h1 className="text-3xl font-bold text-gray-100 mb-2">
          Life in Japan
        </h1>
        <p className="text-gray-400 text-lg">
          Everything you need to know to settle in and feel at home in Tokyo 🗼
        </p>
      </div>

      {/* Transport */}
      <Collapsible title="Getting Around Tokyo" emoji="🚃" accentColor="blue">
        <InfoCard emoji="💳" title="Get a Suica or Pasmo IC Card — First!" accentColor="blue">
          This rechargeable card is your best friend in Japan. Use it on trains, subways, buses, and even to pay at convenience stores. Get one at any major JR station on arrival.
        </InfoCard>
        <InfoCard emoji="🚇" title="Tokyo's Train System" accentColor="blue">
          Tokyo has one of the world's best public transport systems. Trains run on time almost to the minute. There are multiple operators (JR, Tokyo Metro, Toei) — your IC card works on all of them. Google Maps works perfectly for navigating.
        </InfoCard>
        <InfoCard emoji="🚌" title="Buses" accentColor="teal">
          Buses are useful for shorter local trips within a neighbourhood. Pay with your IC card as you board.
        </InfoCard>
        <InfoCard emoji="🚲" title="Cycling" accentColor="emerald">
          Many Tokyo residents cycle for short trips. Bike rental apps like Docomo Bike Share are available across the city — great for exploring the neighbourhood.
        </InfoCard>
        <InfoCard emoji="🚕" title="Taxis & Ride Apps" accentColor="amber">
          Taxis are safe but expensive. GO app is the most popular taxi app in Japan. Uber also operates in Tokyo but is more limited.
        </InfoCard>
        <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
          <p className="text-blue-400 font-semibold text-sm mb-1">💡 Family tip</p>
          <p className="text-gray-300 text-sm">Children under 6 ride trains FREE with a paying adult. Aranya and Aradhya can travel at no cost!</p>
        </div>
      </Collapsible>

      {/* Language */}
      <Collapsible title="Language & Communication" emoji="🗣️" accentColor="pink" defaultOpen={false}>
        <p className="text-gray-400 text-sm mb-4">Most daily life in Tokyo can be managed without Japanese — especially in shops and stations. But learning a few basics goes a long way and people really appreciate the effort.</p>
        <h3 className="font-bold text-gray-100 mb-3">Essential Phrases for Brindha & Malaka</h3>
        <div className="bg-gray-800 rounded-xl border border-pink-500/20 p-4 mb-4">
          <TipRow jp="ありがとう" en="Arigatou" note="Thank you" />
          <TipRow jp="すみません" en="Sumimasen" note="Excuse me / Sorry" />
          <TipRow jp="〜はどこですか？" en="~ wa doko desu ka?" note="Where is ~?" />
          <TipRow jp="いくらですか？" en="Ikura desu ka?" note="How much is it?" />
          <TipRow jp="英語を話せますか？" en="Eigo o hanasemasu ka?" note="Do you speak English?" />
          <TipRow jp="わかりません" en="Wakarimasen" note="I don't understand" />
          <TipRow jp="助けてください" en="Tasukete kudasai" note="Please help me" />
          <TipRow jp="病院はどこ？" en="Byouin wa doko?" note="Where is the hospital?" />
        </div>
        <InfoCard emoji="📱" title="Google Translate Camera" accentColor="pink">
          Point your phone camera at any Japanese sign or menu and it translates instantly. A lifesaver for reading menus, labels, and official notices.
        </InfoCard>
        <InfoCard emoji="📚" title="Learning Japanese" accentColor="purple">
          Apps like Duolingo, HelloTalk, and Pimsleur are great. Even learning hiragana (Japan's basic phonetic alphabet — 46 characters) helps enormously with reading menus and signs.
        </InfoCard>
        <InfoCard emoji="🏫" title="Japanese Language Classes" accentColor="teal">
          Many ward offices offer free or subsidised Japanese classes for foreign residents. Ask at your local ward office (区役所) after registering. Great way to meet people too!
        </InfoCard>
      </Collapsible>

      {/* Shopping */}
      <Collapsible title="Shopping & Daily Life" emoji="🛒" accentColor="emerald" defaultOpen={false}>
        <InfoCard emoji="🏪" title="Convenience Stores (コンビニ)" accentColor="emerald">
          7-Eleven, FamilyMart, and Lawson are everywhere and open 24/7. They sell hot food, fresh meals, toiletries, medicine, snacks, and you can even pay bills there. They will become a core part of daily life!
        </InfoCard>
        <InfoCard emoji="🏬" title="Don Quijote (ドン・キホーテ)" accentColor="amber">
          The ultimate everything store — open late, sometimes 24/7. Great for household items, electronics, kids' toys, snacks, clothes, and everyday supplies at low prices.
        </InfoCard>
        <InfoCard emoji="🍱" title="Supermarkets" accentColor="teal">
          Look for Seiyu, Ito-Yokado, or local supermarkets for groceries. Evening discounts on prepared food after 7–8pm are common. Many supermarkets have an excellent selection of fresh produce and ready meals.
        </InfoCard>
        <InfoCard emoji="💊" title="Drugstores (ドラッグストア)" accentColor="pink">
          Matsumoto Kiyoshi, Welcia, Sundrug — for medicine, baby products, cosmetics, snacks, and household goods. Often cheaper than supermarkets for daily essentials.
        </InfoCard>
        <InfoCard emoji="👶" title="Baby & Kids Shopping" accentColor="purple">
          Akachan Honpo and Nishimatsuya are the go-to stores for children's clothes, nappies, formula, and baby gear at very reasonable prices.
        </InfoCard>
        <InfoCard emoji="🌿" title="Sri Lankan / South Asian Groceries" accentColor="red">
          Tokyo has several South Asian grocery stores. Areas like Shin-Okubo (Koreatown area) and Nishi-Kasai have Indian/Sri Lankan grocery shops where you can find spices, rice, coconut milk, and familiar ingredients.
        </InfoCard>
      </Collapsible>

      {/* Healthcare */}
      <Collapsible title="Healthcare in Japan" emoji="🏥" accentColor="red" defaultOpen={false}>
        <InfoCard emoji="🩺" title="National Health Insurance (国民健康保険)" accentColor="red">
          Once registered at the ward office, enrol in National Health Insurance. It covers 70% of medical costs for you and the family. Monthly premiums are income-based and often low for students.
        </InfoCard>
        <InfoCard emoji="👶" title="Kids' Healthcare" accentColor="pink">
          Tokyo offers free medical care for children under 15 (varies by ward). Aranya and Aradhya's medical costs may be fully covered — check with your ward office immediately after registering!
        </InfoCard>
        <InfoCard emoji="🏨" title="Finding English-Speaking Doctors" accentColor="blue">
          <ul className="list-disc pl-4 space-y-1">
            <li>JMIP-accredited hospitals have English support</li>
            <li>Tokyo Medical and Surgical Clinic (Minato-ku)</li>
            <li>St. Luke's International Hospital — excellent English service</li>
            <li>Search <strong className="text-blue-400">himawari.metro.tokyo.jp</strong> for English-speaking clinics by area</li>
          </ul>
        </InfoCard>
        <InfoCard emoji="🦷" title="Dental" accentColor="teal">
          Dental care is covered under National Health Insurance. Find a local dentist (歯科 / shika) — many now have basic English communication. Get a checkup done in Sri Lanka before leaving as a precaution.
        </InfoCard>
        <InfoCard emoji="💊" title="Bringing Medication from Sri Lanka" accentColor="amber">
          You can bring up to a 3-month supply of prescription medication. For larger amounts, get a letter from your doctor. Some common medicines (including certain allergy meds and painkillers) have Japanese equivalents available at drugstores.
        </InfoCard>
        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-4 mt-2">
          <p className="font-bold text-red-400 mb-2">🚨 Emergency Numbers</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-red-500/20">
              <p className="text-2xl font-bold text-red-400">119</p>
              <p className="text-xs text-gray-400">Ambulance & Fire</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-red-500/20">
              <p className="text-2xl font-bold text-red-400">110</p>
              <p className="text-xs text-gray-400">Police</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-red-500/20 col-span-2">
              <p className="text-base font-bold text-red-400">#7119</p>
              <p className="text-xs text-gray-400">Tokyo Medical Consultation (non-emergency, English available)</p>
            </div>
          </div>
        </div>
      </Collapsible>

      {/* Useful Apps */}
      <Collapsible title="Must-Have Apps" emoji="📱" accentColor="purple" defaultOpen={false}>
        <p className="text-gray-400 text-sm mb-4">Download these before or immediately after arriving in Japan.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <AppCard name="Google Maps" emoji="🗺️" desc="Best for Tokyo navigation — knows all trains, buses, and walking routes" platform="iOS & Android" />
          <AppCard name="Google Translate" emoji="🌐" desc="Camera translation is essential. Download the Japanese offline pack." platform="iOS & Android" />
          <AppCard name="Suica / Pasmo App" emoji="💳" desc="Digital IC card — load money and pay with your phone" platform="iOS & Android" />
          <AppCard name="LINE" emoji="💬" desc="Japan's dominant messaging app — everyone uses it, including schools and doctors" platform="iOS & Android" />
          <AppCard name="Yahoo! Transit (乗換案内)" emoji="🚃" desc="Train route planner — excellent for complex Tokyo routes" platform="iOS & Android" />
          <AppCard name="NHK World" emoji="📺" desc="English news and Japan info — great for staying informed" platform="iOS & Android" />
          <AppCard name="Mercari" emoji="🛍️" desc="Japan's biggest second-hand marketplace — great for cheap furniture and kids' items" platform="iOS & Android" />
          <AppCard name="PayPay" emoji="💰" desc="Most popular payment app in Japan — many shops accept it. Easy cashless payments." platform="iOS & Android" />
          <AppCard name="Duolingo / HelloTalk" emoji="📚" desc="Learn Japanese basics — even a little helps enormously in daily life" platform="iOS & Android" />
          <AppCard name="GO (タクシー)" emoji="🚕" desc="Most reliable taxi booking app in Japan" platform="iOS & Android" />
        </div>
        <InfoCard emoji="📶" title="SIM Card / Internet" accentColor="purple">
          Get a SIM card at the airport on arrival (IIJmio, Rakuten Mobile, or Mobal are popular for foreigners). OR get a pocket Wi-Fi router to share with Malaka when the family arrives. IIJmio and Rakuten offer affordable family plans.
        </InfoCard>
      </Collapsible>

      {/* Sri Lankan Community */}
      <Collapsible title="Sri Lankan & South Asian Community" emoji="🇱🇰" accentColor="amber" defaultOpen={false}>
        <InfoCard emoji="🤝" title="Sri Lankan Community in Japan" accentColor="amber">
          There is a growing Sri Lankan community in Japan, particularly in Tokyo. Facebook groups like "Sri Lankans in Japan" and "Sri Lankan Community Tokyo" are active and welcoming. Members share advice on everything from groceries to visa tips.
        </InfoCard>
        <InfoCard emoji="🛕" title="Hindu & Buddhist Temples" accentColor="purple">
          Tokyo has several Hindu temples and Buddhist temples where the South Asian community gathers. A great way to connect with others and maintain cultural ties for the kids.
        </InfoCard>
        <InfoCard emoji="🍛" title="Sri Lankan Restaurants in Tokyo" accentColor="red">
          There are Sri Lankan restaurants in Tokyo — particularly in areas like Shin-Okubo. A familiar meal will feel wonderful after a tough week! Indian restaurants are also plentiful and offer similar flavours.
        </InfoCard>
        <InfoCard emoji="👩‍👩‍👧" title="Expat Parent Groups" accentColor="emerald">
          Look for expat parent groups on Facebook and Meetup.com in Tokyo. These communities are invaluable for sharing tips on schools, kids' activities, and navigating life with young children in a new country.
        </InfoCard>
      </Collapsible>

      {/* Culture Tips */}
      <Collapsible title="Culture & Day-to-Day Tips" emoji="🎌" accentColor="teal" defaultOpen={false}>
        <div className="grid grid-cols-1 gap-3">
          <InfoCard emoji="🤫" title="Quiet in Public" accentColor="teal">
            Trains and public spaces are quiet. Avoid phone calls on trains, keep voices low. Kids being kids is generally understood and forgiven — Japanese people are very kind to small children.
          </InfoCard>
          <InfoCard emoji="👟" title="Shoes Off!" accentColor="amber">
            Always remove shoes when entering a home, many traditional restaurants, and some changing rooms. Aranya and Aradhya will pick this up quickly — kids adapt fast!
          </InfoCard>
          <InfoCard emoji="🗑️" title="Rubbish Sorting" accentColor="emerald">
            Japan has strict recycling rules. Rubbish is sorted into burnable (燃えるゴミ), non-burnable (燃えないゴミ), plastics, and cans/bottles. Your ward office will give you a guide when you register. It feels complicated at first but becomes second nature.
          </InfoCard>
          <InfoCard emoji="💴" title="Cash is Still King" accentColor="yellow">
            Japan still uses a lot of cash. Keep some yen on you at all times, especially for small shops, some restaurants, and temple visits. ATMs at 7-Eleven and Japan Post accept foreign cards.
          </InfoCard>
          <InfoCard emoji="🏪" title="Convenience Store Etiquette" accentColor="blue">
            When buying hot food at a convenience store, staff will ask if you want it warmed up (温めますか? / Atatame masu ka?). Say はい (hai) for yes!
          </InfoCard>
          <InfoCard emoji="🌸" title="Seasons to Look Forward To" accentColor="pink">
            <strong className="text-pink-400">Cherry blossoms (sakura)</strong> in late March–April are magical — perfect for Aranya and Aradhya's first spring in Japan. <strong className="text-pink-400">Summer festivals (matsuri)</strong> are wonderful for kids. <strong className="text-pink-400">Autumn leaves</strong> in October–November are stunning.
          </InfoCard>
          <InfoCard emoji="❄️" title="Winters are Cold!" accentColor="indigo">
            Tokyo winters (December–February) can be 0–10°C. Pack warm clothes for the kids, or buy them at Nishimatsuya or Akachan Honpo cheaply. Japanese homes are often not centrally heated — a kotatsu (heated table) is a cosy solution!
          </InfoCard>
        </div>
      </Collapsible>

      {/* Weather */}
      <Collapsible title="Tokyo Weather by Season" emoji="🌤️" accentColor="indigo" defaultOpen={false}>
        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-left p-3 font-semibold text-gray-300">Month</th>
                <th className="text-left p-3 font-semibold text-gray-300">Temp</th>
                <th className="text-left p-3 font-semibold text-gray-300">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: 'June', temp: '20–27°C', note: "Brindha arrives 🛬 Rainy season (梅雨) — bring an umbrella!", highlight: 'amber' },
                { month: 'July', temp: '24–32°C', note: 'Hot & humid. Summer begins. Great festivals!', highlight: null },
                { month: 'August', temp: '26–34°C', note: "Family arrives 🛬 Very hot and humid. Stay hydrated.", highlight: 'teal' },
                { month: 'September', temp: '22–30°C', note: 'Cooling down. Typhoon season — watch weather alerts.', highlight: null },
                { month: 'October', temp: '16–24°C', note: 'Beautiful autumn. Great for exploring with kids!', highlight: null },
                { month: 'November', temp: '10–18°C', note: 'Autumn leaves. Start layering clothes.', highlight: null },
                { month: 'December', temp: '5–12°C', note: 'Cold. Christmas lights everywhere — kids will love it!', highlight: null },
                { month: 'Jan–Feb', temp: '2–10°C', note: 'Coldest months. Possible snow. Warm coats essential.', highlight: null },
                { month: 'March', temp: '6–14°C', note: 'Warming up. Cherry blossom season approaching!', highlight: null },
                { month: 'April', temp: '12–20°C', note: '🌸 Peak cherry blossom. Magical for the family.', highlight: null },
              ].map((row, i) => (
                <tr key={i} className={`border-t border-gray-700 ${
                  row.highlight === 'amber' ? 'bg-amber-500/10' :
                  row.highlight === 'teal' ? 'bg-teal-500/10' :
                  i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'
                }`}>
                  <td className="p-3 font-semibold text-gray-100">{row.month}</td>
                  <td className="p-3 text-indigo-400 font-mono font-semibold">{row.temp}</td>
                  <td className="p-3 text-gray-400">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>

      {/* Encouragement */}
      <div className="mt-6 bg-gray-900 border border-pink-500/30 rounded-2xl p-6 text-center">
        <p className="text-3xl mb-3">🌸</p>
        <h3 className="text-xl font-bold text-gray-100 mb-2">You've got this, Brindha!</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
          Millions of families have made this journey and built beautiful lives in Japan.
          Tokyo is one of the safest, cleanest, and most family-friendly cities in the world.
          Aranya and Aradhya are going to thrive — and so will you.
          One step at a time. <span className="text-amber-400 font-semibold">頑張って！</span> (Ganbatte — You can do it!) 💪
        </p>
      </div>
    </div>
  )
}
