import React, { useState } from 'react'
import { Package, ChevronDown, ChevronUp, Star, AlertCircle, CheckCircle2 } from 'lucide-react'

function Collapsible({ title, emoji, children, defaultOpen = true, color = 'orange' }) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = {
    orange: { header: 'from-orange-500 to-amber-400', border: 'border-orange-200' },
    teal: { header: 'from-teal-500 to-cyan-400', border: 'border-teal-200' },
    green: { header: 'from-green-500 to-emerald-400', border: 'border-green-200' },
    blue: { header: 'from-blue-500 to-cyan-400', border: 'border-blue-200' },
    purple: { header: 'from-purple-500 to-violet-400', border: 'border-purple-200' },
    pink: { header: 'from-pink-500 to-rose-400', border: 'border-pink-200' },
    red: { header: 'from-red-500 to-rose-400', border: 'border-red-200' },
  }
  const c = colors[color]
  return (
    <div className={`rounded-2xl border-2 ${c.border} overflow-hidden mb-5 bg-white`}>
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className={`bg-gradient-to-r ${c.header} px-5 py-4 flex items-center gap-3`}>
          <span className="text-2xl">{emoji}</span>
          <h2 className="font-display font-bold text-white text-lg flex-1">{title}</h2>
          {open ? <ChevronUp className="w-5 h-5 text-white/80" /> : <ChevronDown className="w-5 h-5 text-white/80" />}
        </div>
      </button>
      {open && <div className="p-5">{children}</div>}
    </div>
  )
}

function PackItem({ emoji, text, note, important }) {
  return (
    <div className={`flex items-start gap-2.5 py-2.5 border-b border-gray-100 last:border-0 ${important ? 'bg-orange-50 -mx-1 px-1 rounded-lg' : ''}`}>
      <span className="text-lg flex-shrink-0">{emoji}</span>
      <div className="flex-1">
        <span className={`text-sm ${important ? 'font-semibold text-orange-800' : 'text-gray-700'}`}>{text}</span>
        {note && <p className="text-xs text-gray-400 mt-0.5 leading-tight">{note}</p>}
      </div>
      {important && <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full flex-shrink-0">Must!</span>}
    </div>
  )
}

export default function Packing() {
  return (
    <div className="page-container p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🎒</span>
          <h1 className="font-display font-bold text-3xl text-gray-800">Packing Guide</h1>
        </div>
        <p className="text-gray-500 text-base">What to bring, what to leave, what to buy in Japan</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-orange-800 mb-1">🌸 General Rule</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Japan has excellent quality goods at every price point. <strong>You can buy almost everything in Japan</strong> — often cheaper than Sri Lanka (especially household items, electronics, clothing). Focus on bringing what's uniquely Sri Lankan, documents, medications, and comfort items. Don't overpack!
        </p>
      </div>

      {/* Documents - MOST IMPORTANT */}
      <Collapsible title="Documents — Carry-On ONLY!" emoji="📄" color="orange" defaultOpen={true}>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="font-bold text-red-700 mb-1">⚠️ Critical: Keep ALL documents in your carry-on bag!</p>
          <p className="text-sm text-gray-700">Never check important documents in your hold luggage. These are irreplaceable.</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-orange-100">
          <PackItem emoji="📋" text="Certificate of Eligibility (COE) — original!" note="This is what gets you through Japanese immigration. Guard it with your life." important />
          <PackItem emoji="🛂" text="Passport with student visa" important />
          <PackItem emoji="📸" text="Extra passport photos (at least 10)" note="Needed for various applications in Japan" />
          <PackItem emoji="📜" text="Apostilled marriage certificate — original + certified copies" />
          <PackItem emoji="📜" text="Kids' apostilled birth certificates — originals + copies" />
          <PackItem emoji="🎓" text="University acceptance letter / enrollment documents" />
          <PackItem emoji="🏥" text="Vaccination records for whole family (in English)" />
          <PackItem emoji="💉" text="Kids' medical records / vaccination booklets" />
          <PackItem emoji="🦷" text="Dental records if any ongoing treatment" />
          <PackItem emoji="💊" text="Prescription letters for any medications you're bringing" />
          <PackItem emoji="🎓" text="Degree certificates and transcripts" />
          <PackItem emoji="💳" text="International driving license (if you have one)" note="May be useful later" />
          <PackItem emoji="📱" text="Digital copies of ALL documents (Google Drive / encrypted storage)" important />
        </div>
      </Collapsible>

      {/* Medications */}
      <Collapsible title="Medications & Health" emoji="💊" color="blue" defaultOpen={false}>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Japan has strict medication import rules.</strong> Some common medications in Sri Lanka are controlled substances in Japan.
            Bring a supply of your regular medications (3–6 months recommended). Carry prescriptions translated to English.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-blue-100">
          <PackItem emoji="💊" text="Prescription medications — 3–6 month supply" note="Bring letter from doctor listing medication names and dosages" important />
          <PackItem emoji="🌡️" text="Familiar pain relievers (Panadol/Paracetamol)" note="Japan has different brand names; get what you know works" />
          <PackItem emoji="🤧" text="Cold/flu remedies you trust" note="Japanese pharmacies have great options but different brands" />
          <PackItem emoji="🤢" text="Antacids / digestive remedies" note="Diet change can cause stomach issues initially" />
          <PackItem emoji="🩹" text="Antiseptic cream, bandages" note="Basic first aid kit" />
          <PackItem emoji="🌿" text="Ayurvedic or herbal remedies you regularly use" note="Hard to find in Japan" important />
          <PackItem emoji="💊" text="Vitamin supplements you use regularly" />
          <PackItem emoji="🧴" text="Mosquito repellent (Japan has mosquitoes in summer)" />
          <PackItem emoji="☀️" text="Sunscreen you like (Japan has good options but check ingredients)" />
          <PackItem emoji="🧴" text="Preferred moisturizer / skincare for first months" note="Japanese dry winters can affect skin" />

          <div className="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
            <p className="font-semibold text-amber-800 text-sm mb-1">⚠️ For Kids Especially:</p>
            {[
              { item: 'Calpol / Children\'s Paracetamol', note: 'Japanese equivalent exists but different concentration' },
              { item: 'Children\'s antihistamine if they have allergies', note: '' },
              { item: 'Teething gel for Aradhya if needed', note: '' },
              { item: 'Diaper rash cream (Drapolene, Sudocrem)', note: 'Japanese brands available too' },
              { item: 'Preferred baby wipes for Aradhya', note: '' },
            ].map((m, i) => (
              <p key={i} className="text-sm text-gray-700 flex items-center gap-2 py-1 border-b border-amber-100 last:border-0">
                <span className="text-amber-500">→</span>
                <span><strong>{m.item}</strong>{m.note ? ` — ${m.note}` : ''}</span>
              </p>
            ))}
          </div>
        </div>
      </Collapsible>

      {/* Sri Lankan Items */}
      <Collapsible title="Sri Lankan Items You'll Miss" emoji="🇱🇰" color="teal" defaultOpen={false}>
        <div className="bg-teal-50 rounded-xl p-4 border border-teal-100 mb-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            Tokyo has excellent South Asian grocery stores (especially in Edogawa ward and some Indian neighborhoods), but specific Sri Lankan items can be hard to find. Stock up!
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <p className="font-semibold text-gray-700 mb-2 text-sm">🌶️ Spices & Condiments</p>
          <PackItem emoji="🌶️" text="Sri Lankan curry powder (you won't find the right blend!)" important />
          <PackItem emoji="🌶️" text="Roasted curry powder" important />
          <PackItem emoji="🟤" text="Goraka / gambooge (essential for fish curries)" important />
          <PackItem emoji="🌿" text="Dried Maldive fish" note="Sometimes available in Japanese Asian stores" />
          <PackItem emoji="🥥" text="Coconut milk powder / coconut cream packets" note="Canned coconut milk available in Japan" />
          <PackItem emoji="🫙" text="Favourite pickle / achar" note="Indonesian/Thai pickles are similar" />
          <PackItem emoji="🌿" text="Moringa (drumstick) powder" />

          <p className="font-semibold text-gray-700 mb-2 text-sm mt-4">🍪 Snacks & Comfort Food</p>
          <PackItem emoji="🍪" text="Favourite Sri Lankan biscuits (Kist, Munchee, etc.)" note="Homesickness hits hardest through food!" />
          <PackItem emoji="🫙" text="Seeni sambol / lunu miris paste in jar" note="The real stuff can't be replicated" />
          <PackItem emoji="🧁" text="Kavum, kokis, or other traditional snacks for special occasions" />

          <p className="font-semibold text-gray-700 mb-2 text-sm mt-4">✨ Personal Items</p>
          <PackItem emoji="🧵" text="A few saris or traditional wear for special occasions" note="Japan has many formal occasions!" />
          <PackItem emoji="📿" text="Religious items — temple offerings, etc." note="Hard to find exact versions in Japan" />
          <PackItem emoji="📸" text="Printed family photos for the apartment" note="Makes your Japanese home feel like home" important />
        </div>

        <div className="bg-green-50 rounded-xl p-4 border border-green-100 mt-3">
          <p className="font-semibold text-green-800 text-sm mb-1">🛒 Where to find South Asian items in Tokyo:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>National Azabu</strong> (Minami-Azabu) — international supermarket</li>
            <li>• <strong>Hanamasa</strong> — bulk food store with international items</li>
            <li>• <strong>Jupiter Coffee</strong> — imported goods</li>
            <li>• <strong>Amazon Japan</strong> — surprisingly good for imported spices</li>
            <li>• <strong>Koenji / Edogawa area</strong> — has Indian/Sri Lankan grocery stores</li>
          </ul>
        </div>
      </Collapsible>

      {/* Clothing */}
      <Collapsible title="Clothing — What to Pack" emoji="👗" color="purple" defaultOpen={false}>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <p className="font-bold text-purple-800 mb-2 text-sm">🌸 Brindha's Wardrobe</p>
            {[
              'Everyday casual clothes (you wear now)',
              '1-2 formal/smart outfits (job, university events)',
              'Underwear (Japanese sizes run small)',
              'Comfortable walking shoes (Tokyo = lots of walking!)',
              'One warm jacket for autumn',
            ].map((item, i) => (
              <p key={i} className="text-xs text-gray-700 flex items-center gap-1.5 py-1 border-b border-purple-50 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                {item}
              </p>
            ))}
          </div>
          <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
            <p className="font-bold text-pink-800 mb-2 text-sm">👧 Kids Clothing</p>
            {[
              'Pack 2 sizes up — kids grow fast!',
              'Comfortable play clothes × many sets',
              'One "nice" outfit for each girl',
              'Sturdy shoes + indoor shoes',
              'Warm layer (sweater/jacket)',
            ].map((item, i) => (
              <p key={i} className="text-xs text-gray-700 flex items-center gap-1.5 py-1 border-b border-pink-50 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
          <p className="font-bold text-amber-800 mb-2 text-sm">🌡️ Tokyo Weather Guide — Pack Accordingly</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { season: 'June (arrival)', temp: '22–28°C', note: 'Warm, humid. Light clothes OK.' },
              { season: 'July–August', temp: '28–35°C', note: 'Hot & humid. Lightest clothes!' },
              { season: 'September', temp: '24–30°C', note: 'Still warm. Light layers.' },
              { season: 'October–November', temp: '14–22°C', note: 'Need light jacket + sweater.' },
              { season: 'December–February', temp: '2–12°C', note: 'COLD. Heavy coat needed (buy in Japan).' },
              { season: 'March–April', temp: '8–18°C', note: 'Cherry blossom season! Cool, lovely.' },
            ].map((w, i) => (
              <div key={i} className="bg-white rounded-lg p-2">
                <p className="text-xs font-bold text-gray-800">{w.season}</p>
                <p className="text-xs text-orange-600 font-semibold">{w.temp}</p>
                <p className="text-xs text-gray-500 mt-0.5">{w.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 bg-green-50 rounded-xl p-3 border border-green-100">
          <p className="text-sm text-gray-700">
            <strong>💡 Pro tip:</strong> Don't pack heavy winter clothes! Japanese winter coats, boots, and layers are excellent quality and often cheaper than you'd expect. Buy them in Japan when the season changes (autumn sales are great). Save the suitcase space for what you can't buy there.
          </p>
        </div>
      </Collapsible>

      {/* For Kids Specifically */}
      <Collapsible title="Kids' Essentials to Pack" emoji="👶" color="pink" defaultOpen={false}>
        <div className="bg-white rounded-xl p-4 border border-pink-100 mb-3">
          <p className="font-semibold text-pink-800 mb-2 text-sm">💕 Comfort & Emotional Wellbeing</p>
          <PackItem emoji="🧸" text="Aradhya's favorite stuffed animal / comfort object" note="Non-negotiable! This is her security in a new place." important />
          <PackItem emoji="🦁" text="Aranya's favorite toy(s) — a few, not all" note="She'll make new friends and discover new toys, but familiar ones help at first" important />
          <PackItem emoji="📚" text="3–5 favorite storybooks in Sinhala or English" note="Bedtime stories in the familiar language are comforting" />
          <PackItem emoji="🎨" text="Small art kit (crayons, stickers)" note="Keeps them entertained on the long flight and first days" />
        </div>
        <div className="bg-white rounded-xl p-4 border border-pink-100 mb-3">
          <p className="font-semibold text-pink-800 mb-2 text-sm">🍼 Practical Items for Aradhya (2 years)</p>
          <PackItem emoji="🧴" text="Preferred baby shampoo / wash (travel size to start)" note="Japanese baby products are excellent — you'll find replacements" />
          <PackItem emoji="👶" text="5–7 days of diapers / pull-ups" note="Buy Japanese brands (Merries, Moony — highly rated!)" />
          <PackItem emoji="🥣" text="Any preferred sippy cup / eating utensils" />
          <PackItem emoji="🛌" text="Portable travel bed if she has one (inflatable)" note="Japanese apartments can have minimal furniture initially" />
        </div>
        <div className="bg-white rounded-xl p-4 border border-pink-100">
          <p className="font-semibold text-pink-800 mb-2 text-sm">🎒 Practical Items for Aranya (4 years)</p>
          <PackItem emoji="📓" text="Her Lyceum school report / portfolio if available" note="Good to show new school for context" />
          <PackItem emoji="✏️" text="Pencil case with familiar stationery" />
          <PackItem emoji="🖼️" text="A drawing she made for the new room" note="Decorating her own space gives her ownership" />
        </div>

        <div className="mt-3 bg-teal-50 rounded-xl p-3 border border-teal-100">
          <p className="text-sm font-semibold text-teal-800 mb-1">✈️ Flight Tips with Kids</p>
          <ul className="space-y-1">
            {[
              'Book a bassinet seat for Aradhya on long flights (request when booking)',
              'Bring lots of snacks from home — familiar tastes reduce meltdowns',
              'Download offline shows/apps before the flight',
              'Pack a change of clothes for each kid + yourself in carry-on',
              'Small new toy as a "flight surprise" to keep them engaged',
            ].map((tip, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>

      {/* Leave Behind */}
      <Collapsible title="Leave Behind — Don't Bother Packing" emoji="🚫" color="red" defaultOpen={false}>
        <div className="bg-red-50 rounded-xl p-4 border border-red-100 mb-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            Suitcase space is precious. These items are better bought in Japan — cheaper, better quality, or simply not worth the shipping cost.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-red-100">
          {[
            { item: 'Furniture of any kind', reason: 'Japanese apartments come furnished or furniture is cheap to buy/rent' },
            { item: 'Large kitchen appliances', reason: 'Japan uses 100V electricity (same plug shape as Sri Lanka but different voltage) — some appliances may not work safely' },
            { item: 'Winter clothes (jackets, boots)', reason: 'Buy in Japan for actual Japanese weather. Much better selection and sizing.' },
            { item: 'Most baby gear (stroller, car seat)', reason: 'Available cheaply second-hand in Japan. Not worth the airline oversize fees.' },
            { item: 'Bulk toiletries', reason: 'Japan has amazing, affordable toiletries at every konbini (convenience store) and drugstore' },
            { item: 'Most cleaning products', reason: '100 yen stores have everything you need' },
            { item: 'Large stuffed animals / bulk toys', reason: 'Takes too much space. Japan has incredible toy shops!' },
            { item: 'Expensive electronics (unless region-free)', reason: 'Japan has latest models often at good prices. Some electronics have Japan-specific versions that work better locally.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
              <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">✗</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.item}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Buy in Japan */}
      <Collapsible title="Buy in Japan — Great Value!" emoji="🛒" color="green" defaultOpen={false}>
        <div className="grid grid-cols-2 gap-3">
          {[
            { category: 'Baby & Kids', emoji: '👶', items: ['Diapers (Merries brand = amazing!)', 'Baby food pouches', 'Kids clothing', 'Toys & books', 'Children\'s medicine'] },
            { category: 'Household', emoji: '🏠', items: ['All kitchen utensils', 'Bedding & pillows', 'Cleaning supplies', 'Storage solutions', 'Furniture (second-hand)'] },
            { category: 'Electronics', emoji: '📱', items: ['SIM card / pocket WiFi', 'Electric fan/heater', 'Rice cooker', 'Small appliances', 'USB chargers'] },
            { category: 'Clothing', emoji: '👕', items: ['Winter coats and boots', 'Rain gear (excellent!)', 'Comfortable shoes', 'School supplies', 'Seasonal clothing'] },
            { category: 'Food & Kitchen', emoji: '🛒', items: ['All fresh produce', 'Japanese pantry staples', 'International sauces', 'Most snacks', 'Cooking oils'] },
            { category: 'Beauty & Health', emoji: '💄', items: ['Sunscreen (Japanese brands are excellent)', 'Skincare', 'Over-the-counter medicine', 'Vitamins', 'Hair care'] },
          ].map((cat, i) => (
            <div key={i} className="bg-white rounded-xl p-3.5 border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{cat.emoji}</span>
                <p className="font-bold text-green-800 text-sm">{cat.category}</p>
              </div>
              {cat.items.map((item, j) => (
                <p key={j} className="text-xs text-gray-600 flex items-center gap-1.5 py-0.5">
                  <span className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-100">
          <p className="font-semibold text-green-800 mb-2 text-sm">🏪 Best Shopping in Tokyo</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { store: 'Daiso / Seria / Can★Do', desc: '100 yen stores — incredible value!' },
              { store: 'Don Quijote (ドン・キホーテ)', desc: 'Discount store with everything' },
              { store: 'Nitori', desc: 'Affordable home furnishings (Japan\'s IKEA)' },
              { store: 'ハードオフ (Hard Off)', desc: 'Second-hand electronics + furniture' },
              { store: 'ジモティー (Jmty)', desc: 'Free/cheap local items (like Craigslist)' },
              { store: 'Amazon Japan', desc: 'Fast delivery, huge selection' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-2.5">
                <p className="text-xs font-bold text-gray-800">{s.store}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Collapsible>
    </div>
  )
}
