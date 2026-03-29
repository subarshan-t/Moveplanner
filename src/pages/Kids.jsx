import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function InfoBox({ type = 'info', children }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    pink: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-300',
  }
  return (
    <div className={`rounded-xl p-3.5 border mb-3 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  )
}

function Collapsible({ title, emoji, children, defaultOpen = true, accentColor = 'pink' }) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = {
    pink: 'border-pink-500',
    teal: 'border-teal-500',
    purple: 'border-purple-500',
    amber: 'border-amber-500',
    emerald: 'border-emerald-500',
  }
  const border = colors[accentColor] || colors.pink
  return (
    <div className={`bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-5`}>
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

function CheckItem({ text, note }) {
  return (
    <div className="flex items-start gap-2.5 py-2 border-b border-gray-800 last:border-0">
      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
      <div>
        <span className="text-sm text-gray-300">{text}</span>
        {note && <p className="text-xs text-gray-500 mt-0.5">{note}</p>}
      </div>
    </div>
  )
}

export default function Kids() {
  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">👧</span>
          <h1 className="font-bold text-3xl text-gray-100">Kids Corner</h1>
        </div>
        <p className="text-gray-400 text-base">Everything for Aranya (4) and Aradhya (2) — their new Japanese adventure</p>
      </div>

      {/* Kids Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-900 border border-pink-500/30 rounded-2xl p-5">
          <div className="text-3xl mb-2">👧</div>
          <p className="font-bold text-xl text-gray-100">Aranya</p>
          <p className="text-pink-400 text-sm">4 years old</p>
          <div className="mt-2 bg-pink-500/10 border border-pink-500/20 rounded-xl px-3 py-1.5 text-sm font-semibold text-pink-400">
            Yochien / Hoikuen Age
          </div>
        </div>
        <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-5">
          <div className="text-3xl mb-2">👶</div>
          <p className="font-bold text-xl text-gray-100">Aradhya</p>
          <p className="text-purple-400 text-sm">2 years old</p>
          <div className="mt-2 bg-purple-500/10 border border-purple-500/20 rounded-xl px-3 py-1.5 text-sm font-semibold text-purple-400">
            Hoikuen Age
          </div>
        </div>
      </div>

      <InfoBox type="pink">
        <strong>💕 Great news for the girls!</strong> Japanese childcare is excellent and often subsidized. Young children learn Japanese incredibly quickly. Aradhya and Aranya will likely have Japanese friends and be chatting away within months! The hardest part is the first few weeks — but kids are amazingly resilient.
      </InfoBox>

      {/* Aranya's Schooling */}
      <Collapsible title="Aranya (4 years) — Yochien & Hoikuen" emoji="👧" accentColor="pink">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 border border-pink-500/20">
            <p className="font-bold text-pink-400 mb-2">🏫 Yochien (幼稚園)</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Kindergarten for ages <strong className="text-gray-100">3–5</strong>. Usually <strong className="text-gray-100">shorter hours</strong> (9am–2pm), designed for early education. Has more structured curriculum. Many types: public, private, international.
            </p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-emerald-400">✓ Good for early learning Japanese</p>
              <p className="text-xs text-emerald-400">✓ Morning-focused schedule</p>
              <p className="text-xs text-amber-400">⚠ Shorter hours may not suit working parents</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-teal-500/20">
            <p className="font-bold text-teal-400 mb-2">🏡 Hoikuen (保育園)</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Daycare center for ages <strong className="text-gray-100">0–5</strong>. Full-day care (<strong className="text-gray-100">7am–6pm+</strong>), primarily for working parents. Both Aranya and Aradhya can attend the same place!
            </p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-emerald-400">✓ Full-day care for working parents</p>
              <p className="text-xs text-emerald-400">✓ Both girls can attend together</p>
              <p className="text-xs text-amber-400">⚠ Waiting lists can be long in central Tokyo</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-4">
          <p className="font-semibold text-gray-100 mb-3">🌍 International Options in Tokyo</p>
          <div className="space-y-2">
            {[
              { name: 'Tokyo International Learning Community (TILC)', note: 'English-medium, international-focused' },
              { name: 'International Kindergartens in Minato/Shibuya/Shinjuku wards', note: 'Higher cost but English-friendly' },
              { name: 'Regular Japanese Hoikuen/Yochien', note: 'Cheapest, best for language acquisition, usually supported by ward' },
              { name: 'YMCA programs', note: 'Often have international staff, English support' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-gray-100">{s.name}</span>
                  <p className="text-xs text-gray-400">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-semibold text-gray-100 mb-2">📋 How to Apply (Yochien)</p>
        <div className="space-y-2 mb-4">
          {[
            'Go to your ward office (区役所) and ask about yochien in your area',
            'Get the application form (入園願書) — usually available from October for April enrollment',
            'Submit with: family registration document, photo, birth certificate',
            'Interview at the school (often informal)',
            'Pay enrollment fees if accepted',
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
              <span className="text-sm text-gray-300">{step}</span>
            </div>
          ))}
        </div>

        <InfoBox type="info">
          <strong>💡 Language Tip for Aranya:</strong> At 4 years old, Aranya will pick up Japanese incredibly quickly. Research shows children under 6 acquire languages almost effortlessly. Give her 3–6 months and she'll be playing naturally with Japanese friends.
        </InfoBox>
      </Collapsible>

      {/* Aradhya's Schooling */}
      <Collapsible title="Aradhya (2 years) — Hoikuen & Daycare" emoji="👶" accentColor="purple" defaultOpen={false}>
        <div className="bg-gray-800 rounded-xl p-4 border border-purple-500/20 mb-4">
          <p className="font-bold text-purple-400 mb-2">🏡 Hoikuen (保育園) — Authorized Daycare</p>
          <p className="text-sm text-gray-300 leading-relaxed">The best option for Aradhya is an authorized hoikuen (認可保育所). These are:</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { label: 'Cost', value: 'Subsidized (means-tested)' },
              { label: 'Hours', value: '7:30am – 6:30pm' },
              { label: 'Age', value: 'From 0 months to 5 years' },
              { label: 'Quality', value: 'Regulated & high-quality' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-2">
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold text-gray-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 mb-4">
          <p className="font-bold text-amber-400 mb-2">⚠️ About Waiting Lists</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Popular hoikuens in central Tokyo can have <strong className="text-amber-400">very long waiting lists</strong>, sometimes 6–12+ months.
            Apply at the ward office <strong className="text-amber-400">immediately after arriving in Japan</strong>.
          </p>
          <ul className="mt-2 space-y-1">
            {[
              'Apply to multiple hoikuens at once',
              'Be flexible about location (sometimes nearby wards have space)',
              'Ask about temporary spots while waiting',
              'University may have partner hoikuens — ask your university!',
            ].map((t, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-semibold text-gray-100 mb-2">📋 How to Apply for Hoikuen</p>
        <div className="space-y-2 mb-4">
          {[
            'Register your family at the ward office first (住民登録)',
            'Go to the hoikuen section of ward office — get application packet',
            'Submit application listing your top 3–5 preferred hoikuens',
            'Provide proof of work/study (university enrollment letter for Brindha)',
            'Wait for assignment — usually 2–4 weeks',
            'If not placed immediately, go on waiting list & check regularly',
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
              <span className="text-sm text-gray-300">{step}</span>
            </div>
          ))}
        </div>

        <InfoBox type="teal">
          <strong>Great news:</strong> As a student, Brindha qualifies as a "working/studying parent" which gives priority for hoikuen placement! Make sure to bring your university enrollment certificate.
        </InfoBox>
      </Collapsible>

      {/* Health for Both Kids */}
      <Collapsible title="Health & Insurance for Both Kids" emoji="🏥" accentColor="teal" defaultOpen={false}>
        <div className="bg-gray-800 rounded-xl p-4 border border-teal-500/20 mb-4">
          <p className="font-bold text-teal-400 mb-2">🩺 National Health Insurance (国民健康保険)</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Once registered at the ward office, enroll both girls in National Health Insurance (NHI).
            Children's medical care in Tokyo is significantly subsidized — many wards offer free or near-free
            medical care for children under 15!
          </p>
        </div>

        <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 mb-4">
          <p className="font-bold text-emerald-400 mb-2">💉 Child Medical Fee Assistance (子ども医療費助成)</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Tokyo's ward offices typically offer child medical assistance programs. In many wards, children's
            doctor visits are <strong className="text-emerald-400">completely free</strong> or require only a minimal copay (¥200–¥500).
            Ask your ward office about this when you register!
          </p>
        </div>

        <p className="font-semibold text-gray-100 mb-3">💉 Vaccinations — Get These in Sri Lanka Before Departure</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-3">
          {[
            { vax: 'MMR (Measles, Mumps, Rubella)', note: 'Japan requires proof of MMR vaccination for school enrollment' },
            { vax: 'Varicella (Chickenpox)', note: 'Recommended if not yet received' },
            { vax: 'Hepatitis A & B', note: 'Check vaccination records' },
            { vax: 'DTP (Diphtheria, Tetanus, Pertussis)', note: 'Ensure up to date' },
            { vax: 'Influenza', note: 'Japan has flu season Oct–Mar — get before or shortly after arrival' },
            { vax: 'Japanese Encephalitis', note: 'Not required but recommended for children living in Japan' },
          ].map((v, i) => (
            <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-700 last:border-0">
              <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-gray-100">{v.vax}</span>
                <p className="text-xs text-gray-400 mt-0.5">{v.note}</p>
              </div>
            </div>
          ))}
        </div>

        <InfoBox type="warning">
          <strong>Important:</strong> Get an English vaccination record booklet for each child from your doctor in Sri Lanka. Japan uses a different system and the school/hoikuen will want to see vaccination history.
        </InfoBox>
      </Collapsible>

      {/* School Preparation */}
      <Collapsible title="What to Prepare for School" emoji="🎒" accentColor="amber" defaultOpen={false}>
        <InfoBox type="info">
          Japan has very specific requirements for school supplies — and everything needs to be <strong>labeled with your child's name</strong> (名前を書く). This is taken very seriously!
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 border border-amber-500/20">
            <p className="font-bold text-amber-400 mb-2">Aranya's Yochien Supplies</p>
            {[
              'Indoor shoes (uwabaki 上履き)',
              'Backpack (randoseru for primary, simpler for yochien)',
              'Smock/uniform if required',
              'Lunch box (bento box) + chopsticks set',
              'Water bottle',
              'Bag for belongings',
              'Name labels on EVERYTHING',
            ].map((item, i) => <CheckItem key={i} text={item} />)}
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500/20">
            <p className="font-bold text-purple-400 mb-2">Aradhya's Hoikuen Supplies</p>
            {[
              '5–7 changes of clothes (labeled!)',
              'Spare pants/underwear (accidents happen!)',
              'Nap time blanket/mat (each hoikuen is different)',
              'Indoor shoes (when she starts walking at school)',
              'Toothbrush + cup',
              'Wipes, bibs (if still using)',
              'Name labels on EVERYTHING',
            ].map((item, i) => <CheckItem key={i} text={item} />)}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <p className="font-semibold text-gray-100 mb-2">🏷️ Name Labeling Tip</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            In Japan, <em>everything</em> in your child's bag needs to have their name on it — clothing, shoes, water bottles, pencils, etc.
            You can buy name label stickers (お名前シール) cheaply on Amazon Japan or at 100 yen stores (Daiso, Seria).
            Consider ordering custom printed name labels online when you arrive — they're inexpensive and save hours of handwriting!
          </p>
        </div>
      </Collapsible>

      {/* Making Friends */}
      <Collapsible title="Making Friends & Community" emoji="🌸" accentColor="emerald" defaultOpen={false}>
        <div className="space-y-3">
          <div className="bg-gray-800 rounded-xl p-4 border border-emerald-500/20">
            <p className="font-bold text-emerald-400 mb-2">🛝 Playgrounds & Parks</p>
            <p className="text-sm text-gray-300">Japan has excellent public playgrounds (公園). Local parks are great for meeting other parents and kids. Aradhya and Aranya will love Japanese playground equipment!</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500/20">
            <p className="font-bold text-blue-400 mb-2">🏛️ Community Centers (地域センター)</p>
            <p className="text-sm text-gray-300">Ward offices run free or low-cost programs for young children — music classes, reading groups, play dates. Great for meeting local families.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-pink-500/20">
            <p className="font-bold text-pink-400 mb-2">👥 International Parent Groups</p>
            <p className="text-sm text-gray-300">
              <strong className="text-gray-100">Facebook Groups:</strong> "Expat Mums in Tokyo", "International Parents Tokyo", "Sri Lankans in Japan"<br />
              <strong className="text-gray-100">Meetup.com:</strong> International parent meetups in Tokyo<br />
              <strong className="text-gray-100">Tokyo Families:</strong> tokyofamilies.com — events for families with young children
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 border border-amber-500/20">
            <p className="font-bold text-amber-400 mb-2">📱 Helpful Apps for Parents</p>
            {[
              { app: 'Google Translate', use: 'Camera translation of Japanese signs, menus, documents' },
              { app: 'NHK World Japan', use: 'English news + Japanese learning content for adults' },
              { app: 'Gojuuon', use: 'Learn hiragana/katakana fast' },
              { app: 'Line', use: 'Japan\'s main messaging app — connect with other parents, schools use it' },
              { app: 'Suica / PASMO app', use: 'Mobile IC card for trains and shopping' },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-2 py-1.5 border-b border-gray-700 last:border-0">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-gray-100">{a.app}</span>
                  <span className="text-sm text-gray-400"> — {a.use}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Collapsible>

      {/* Language Tips */}
      <Collapsible title="Language Tips for Kids" emoji="💬" accentColor="amber" defaultOpen={false}>
        <InfoBox type="success">
          <strong>🌟 The best gift you can give your children</strong> is early Japanese language immersion. Children under 7 acquire languages at incredible speed. Don't worry about them "forgetting" English — they won't!
        </InfoBox>
        <div className="space-y-3">
          {[
            { tip: 'Speak English at home, Japanese at school', detail: 'This is the most effective bilingual approach. Keep English strong at home. The school will handle Japanese.' },
            { tip: 'Don\'t worry about the transition period', detail: 'The first 1–2 months may be hard. Children sometimes go quiet at school. This is called the "silent period" — it\'s normal and healthy. They\'re absorbing the language.' },
            { tip: 'Learn Japanese together as a family', detail: 'Use apps like Duolingo, NHK\'s Japanese lessons, and picture books. Making it a family activity normalizes language learning.' },
            { tip: 'Japanese cartoons are your friend', detail: 'Shimajiro (しまじろう), Anpanman (アンパンマン), Doraemon — classic shows that Japanese kids love. Let the girls watch them!' },
            { tip: 'Praise effort, not results', detail: 'When Aranya says a Japanese word, celebrate it! Positive reinforcement builds confidence.' },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="font-semibold text-gray-100 text-sm mb-1">💡 {t.tip}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  )
}
