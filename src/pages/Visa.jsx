import React, { useState } from 'react'
import {
  FileText, AlertCircle, CheckCircle2, Clock, Info,
  ChevronDown, ChevronUp, Star, AlertTriangle
} from 'lucide-react'

function Section({ title, emoji, children, defaultOpen = false, accentColor = 'amber' }) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = {
    amber: { border: 'border-amber-500/30', accent: 'border-amber-500', badge: 'text-amber-400' },
    teal: { border: 'border-teal-500/30', accent: 'border-teal-500', badge: 'text-teal-400' },
    blue: { border: 'border-blue-500/30', accent: 'border-blue-500', badge: 'text-blue-400' },
    pink: { border: 'border-pink-500/30', accent: 'border-pink-500', badge: 'text-pink-400' },
  }
  const c = colors[accentColor] || colors.amber

  return (
    <div className={`bg-gray-900 rounded-2xl border ${c.border} overflow-hidden mb-5`}>
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className={`border-l-4 ${c.accent} bg-gray-800 px-5 py-4 flex items-center gap-3`}>
          <span className="text-2xl">{emoji}</span>
          <h2 className={`font-bold text-gray-100 text-base flex-1`}>{title}</h2>
          {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </div>
      </button>
      {open && <div className="p-5">{children}</div>}
    </div>
  )
}

function StepCard({ number, title, detail, note, urgent }) {
  return (
    <div className={`flex gap-4 p-4 rounded-xl bg-gray-800 border ${urgent ? 'border-amber-500/30' : 'border-gray-700'} mb-3`}>
      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm ${
        urgent ? 'bg-amber-500 text-gray-900' : 'bg-gray-700 text-gray-300'
      }`}>
        {number}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-100 text-sm">{title}</p>
        {detail && <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{detail}</p>}
        {note && (
          <div className="mt-2 flex items-start gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-400">{note}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function DocItem({ text, required = true }) {
  return (
    <div className="flex items-start gap-2.5 py-2 border-b border-gray-700 last:border-0">
      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-xs ${
        required ? 'bg-amber-500/20 text-amber-400' : 'bg-gray-700 text-gray-500'
      }`}>
        {required ? '✓' : '?'}
      </div>
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  )
}

function InfoBox({ type = 'info', children }) {
  const styles = {
    info: { bg: 'bg-blue-500/10 border-blue-500/30', icon: <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" /> },
    warning: { bg: 'bg-amber-500/10 border-amber-500/30', icon: <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> },
    success: { bg: 'bg-emerald-500/10 border-emerald-500/30', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> },
    urgent: { bg: 'bg-red-500/10 border-red-500/30', icon: <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> },
  }
  const s = styles[type]
  return (
    <div className={`flex gap-3 p-3.5 rounded-xl border ${s.bg} mb-3`}>
      {s.icon}
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  )
}

export default function Visa() {
  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🛂</span>
          <h1 className="font-bold text-3xl text-gray-100">Visa Guide</h1>
        </div>
        <p className="text-gray-400 text-base">Complete visa roadmap for Brindha, Malaka, Aranya & Aradhya</p>
      </div>

      <InfoBox type="warning">
        <strong className="text-amber-400">Timing is everything!</strong> The visa process takes longer than you expect. Start the COE (Certificate of Eligibility) process with your university <strong className="text-amber-400">immediately</strong> — it's the critical first step and takes 1–3 months.
      </InfoBox>

      {/* Phase 1 - Brindha's Student Visa */}
      <Section title="Brindha's Student Visa (留学ビザ)" emoji="🎓" accentColor="amber" defaultOpen={true}>
        <InfoBox type="info">
          The student visa process has two stages: (1) COE from Japan Immigration, initiated by your university, and (2) the actual visa stamp from the Japanese Embassy in Colombo.
        </InfoBox>

        <h3 className="font-bold text-gray-100 mb-3 mt-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" /> Step-by-Step Process
        </h3>

        <StepCard
          number="1"
          title="University initiates Certificate of Eligibility (COE) — 在留資格認定証明書"
          detail="Your university in Japan applies to the Immigration Services Agency on your behalf. You need to provide them with your documents: passport copy, degree certificates, financial proof, application forms."
          note="This takes 1–3 months. Apply NOW — even before you have the visa. Start in March/April 2026."
          urgent
        />
        <StepCard
          number="2"
          title="COE arrives by post"
          detail="The COE is posted to your university contact, who then sends it to you in Sri Lanka. This is a physical document you must have before applying for the visa."
          note="Expected timeline: May 2026 if started in March/April."
        />
        <StepCard
          number="3"
          title="Apply for Student Visa at Japanese Embassy, Colombo"
          detail="Visit the Japanese Embassy in Colombo (No. 20, Gregory's Road, Colombo 07). Submit your application with all documents."
          note="Processing takes 5–7 working days after submission. The embassy is open 9am–12pm weekdays."
          urgent
        />
        <StepCard
          number="4"
          title="Collect passport with visa stamp"
          detail="You'll receive a D visa stamp in your passport, valid for the period of your study."
        />
        <StepCard
          number="5"
          title="Fly to Japan & get Residence Card at airport"
          detail="At Narita or Haneda airport, you'll receive your Residence Card (在留カード) at the immigration counter. Keep this safe — you'll need it for everything in Japan!"
          urgent
        />

        <h3 className="font-bold text-gray-100 mb-3 mt-5 flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-400" /> Documents Needed for Student Visa Application
        </h3>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <DocItem text="Certificate of Eligibility (COE) — original + 1 photocopy" />
          <DocItem text="Valid passport (must have 6+ months validity beyond planned stay)" />
          <DocItem text="Passport-sized photo (4cm × 3cm, white background, taken within 3 months)" />
          <DocItem text="Completed visa application form (available at embassy or online)" />
          <DocItem text="Bank statements showing sufficient funds (last 3–6 months)" />
          <DocItem text="University acceptance letter (if not already included in COE)" />
          <DocItem text="Visa application fee (check current amount with embassy)" required={false} />
        </div>

        <InfoBox type="success">
          <strong className="text-emerald-400">Good news:</strong> The Japanese Embassy in Colombo is known to be efficient for student visa applications. As long as your COE is valid and documents are complete, approval rates are high.
        </InfoBox>

        <h3 className="font-bold text-gray-100 mb-3 mt-5">⏱️ Timeline Summary</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { period: 'Mar–Apr', task: 'Start COE process with university', color: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
            { period: 'May', task: 'COE arrives, apply for visa', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
            { period: 'Late May–Jun', task: 'Visa ready, book flight, DEPART!', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
          ].map((t, i) => (
            <div key={i} className={`rounded-xl p-3 text-center border ${t.color}`}>
              <p className="font-bold text-sm">{t.period}</p>
              <p className="text-xs mt-0.5 leading-tight text-gray-300">{t.task}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Phase 2 - Dependent Visa */}
      <Section title="Malaka + Kids' Dependent Visa (家族滞在ビザ)" emoji="👨‍👩‍👧‍👧" accentColor="teal" defaultOpen={false}>
        <InfoBox type="warning">
          <strong className="text-amber-400">Important:</strong> Malaka, Aranya, and Aradhya can only apply for dependent visas <strong className="text-amber-400">AFTER Brindha has received her Residence Card in Japan</strong>. Don't start this process before then.
        </InfoBox>

        <h3 className="font-bold text-gray-100 mb-3 mt-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-teal-400" /> Step-by-Step Process
        </h3>

        <StepCard number="1" title="Brindha registers at ward office & gets Residence Card"
          detail="After Brindha arrives in Japan, she registers at the ward office (区役所) and receives her Residence Card (在留カード). She must send a certified copy of this to Malaka in Sri Lanka."
          urgent />
        <StepCard number="2" title="Malaka gathers all required documents"
          detail="Collect all the documents listed below. The apostille on marriage certificate and birth certificates must be done well in advance (start in April 2026)."
          note="Start apostille process now — do not wait!"
          urgent />
        <StepCard number="3" title="Apply at Japanese Embassy in Colombo"
          detail="Malaka submits application for himself and both children (Aranya and Aradhya) at the Japanese Embassy, Colombo. Children are included in Malaka's application."
          note="Processing takes 1–2 weeks typically, but can be longer." />
        <StepCard number="4" title="Receive dependent visas"
          detail="Once approved, all three will receive D visa stamps in their passports." />
        <StepCard number="5" title="Family flies to Tokyo!"
          detail="Book flights after visas are confirmed. Aim for end of August 2026."
          urgent />

        <h3 className="font-bold text-gray-100 mb-3 mt-5 flex items-center gap-2">
          <FileText className="w-4 h-4 text-teal-400" /> Documents Needed
        </h3>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-3">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-wide mb-2">For Malaka</p>
          <DocItem text="Valid passport (6+ months validity)" />
          <DocItem text="Completed visa application form" />
          <DocItem text="Passport-sized photo" />
          <DocItem text="Marriage certificate with APOSTILLE — 婚姻証明書" />
          <DocItem text="Copy of Brindha's Residence Card (在留カード) — send from Japan" />
          <DocItem text="Proof of relationship (additional documents may be requested)" required={false} />
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-3">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-wide mb-2">For Each Child (Aranya & Aradhya)</p>
          <DocItem text="Valid passport (or apply for passport if not done)" />
          <DocItem text="Birth certificate with APOSTILLE — 出生証明書" />
          <DocItem text="Passport-sized photo" />
          <DocItem text="Completed visa application form" />
          <DocItem text="Copy of Brindha's Residence Card" />
          <DocItem text="Copy of Malaka's visa application (they apply together)" />
        </div>

        <div className="bg-amber-500/10 rounded-xl border border-amber-500/20 p-4 mb-3">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-2">💡 About Apostille</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Apostille is an international certification that makes a document recognized in other countries.
            In Sri Lanka, you get apostilles from the <strong className="text-amber-400">Ministry of Foreign Affairs</strong>.
            <br /><br />
            Documents to apostille: Marriage certificate + both kids' birth certificates.
            <strong className="text-amber-400"> Start this process in March/April 2026</strong> — it can take 2–4 weeks.
          </p>
        </div>

        <InfoBox type="info">
          <strong className="text-blue-400">Financial proof:</strong> Brindha needs to show she can financially support the family. University scholarship letters, bank statements, or employment records are typically accepted.
        </InfoBox>
      </Section>

      {/* Malaka Work Rights */}
      <Section title="Malaka's Work Rights on Dependent Visa" emoji="💼" accentColor="blue" defaultOpen={false}>
        <InfoBox type="urgent">
          <strong className="text-red-400">Critical:</strong> On a dependent visa (家族滞在), Malaka <strong className="text-red-400">CANNOT work</strong> by default. He must apply for special permission to work. Without this permission, working would be illegal and could jeopardize the family's visa status.
        </InfoBox>

        <h3 className="font-bold text-gray-100 mb-3 mt-4">
          Permission to Work (資格外活動許可 — Shikaku-gai Katsudo Kyoka)
        </h3>

        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-100 text-sm">With Permission: Up to 28 hours per week</p>
                <p className="text-gray-400 text-sm mt-0.5">Malaka can work up to 28 hours per week in most jobs with this permission.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-100 text-sm">School Holiday Reduction: 8 hours per week max</p>
                <p className="text-gray-400 text-sm mt-0.5">During Japanese school holidays (summer, winter, spring break), the limit drops to 8 hours per week.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-100 text-sm">Cannot own or manage a business</p>
                <p className="text-gray-400 text-sm mt-0.5">The work permission is for employment only, not business activities.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-gray-100 mb-3">How to Apply for Work Permission</h3>
        <StepCard number="1" title="Apply at Regional Immigration Bureau (入国管理局)"
          detail="After arriving in Japan, Malaka goes to the nearest Regional Immigration Bureau or Branch. In Tokyo, the main office is in Minato-ku. Or apply online through the Immigration Services Agency portal."
          urgent />
        <StepCard number="2" title="Fill in Application Form"
          detail="Application for Permission to Engage in Activity other than that Permitted. Bring: passport, residence card, and statement of reason." />
        <StepCard number="3" title="Permission stamp on Residence Card"
          detail="If approved (usually yes for dependent spouses), a stamp is added to the back of the Residence Card showing 'Permitted' and the conditions." />

        <h3 className="font-bold text-gray-100 mb-3 mt-5">Suitable Jobs for Malaka in Tokyo</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { job: 'English Conversation Teacher', emoji: '👨‍🏫', note: 'High demand, good pay (¥2,500–¥3,500/hr)' },
            { job: 'English Tutor (private)', emoji: '📚', note: 'Flexible hours, online possible' },
            { job: 'Restaurant / Food Service', emoji: '🍱', note: 'Easy to get, useful Japanese practice' },
            { job: 'Convenience Store (コンビニ)', emoji: '🏪', note: 'Common for foreigners, flexible shifts' },
            { job: 'Retail / Supermarket', emoji: '🛒', note: 'Many accept non-Japanese speakers' },
            { job: 'Translation / Editing (online)', emoji: '💻', note: 'Can do within 28hr limit' },
          ].map((j, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-3 border border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{j.emoji}</span>
                <p className="font-semibold text-gray-100 text-sm">{j.job}</p>
              </div>
              <p className="text-xs text-gray-400 leading-tight">{j.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
          <p className="font-semibold text-emerald-400 text-sm mb-1">💡 Income Estimate</p>
          <p className="text-sm text-gray-300">
            At 28 hours/week at ¥1,200/hr (Tokyo minimum wage ~¥1,163): approximately <strong className="text-emerald-400">¥134,400/month</strong>. English teaching at ¥2,500/hr: approximately <strong className="text-emerald-400">¥280,000/month</strong> — very helpful for the family budget!
          </p>
        </div>
      </Section>

      {/* Kids Documentation */}
      <Section title="Kids' Documentation — Aranya & Aradhya" emoji="👧" accentColor="pink" defaultOpen={false}>
        <InfoBox type="info">
          Both Aranya (4) and Aradhya (2) will receive dependent visas as Brindha's children. They travel with Malaka in Phase 2.
        </InfoBox>

        <h3 className="font-bold text-gray-100 mb-3 mt-2">Passports for Kids</h3>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Check if Aranya and Aradhya have valid passports. Sri Lankan children's passports are valid for 5 years.
            If they don't have passports, apply at the <strong className="text-pink-400">Department of Immigration and Emigration</strong> in Colombo.
            Required: birth certificate, parent's NIC, passport photos, application form.
            <br /><br />
            <strong className="text-gray-100">Processing time:</strong> 2–3 weeks for normal, 1 week for urgent.
          </p>
        </div>

        <h3 className="font-bold text-gray-100 mb-3">After Arriving in Japan</h3>
        <StepCard number="1" title="Register children at ward office"
          detail="Within 14 days of arrival, register Aranya and Aradhya at the local ward office (区役所). They'll receive residence cards." />
        <StepCard number="2" title="Enroll in National Health Insurance"
          detail="Children are covered under the family's national health insurance (国民健康保険). Children's medical copay is often 0–20%, much less than adults."
          note="Tokyo also has child medical fee assistance programs (子ども医療費助成) — ask your ward office!" />
        <StepCard number="3" title="Apply for Hoikuen / Yochien spots"
          detail="Apply ASAP after arrival. Waiting lists can be long in central Tokyo. Ask your ward office about availability."
          urgent />

        <InfoBox type="success">
          <strong className="text-emerald-400">Great news for the kids:</strong> Children are incredibly adaptable! Many expat children in Japan pick up Japanese surprisingly quickly, especially at hoikuen age. Aradhya and Aranya will likely be chatting in Japanese within 6 months! 🌟
        </InfoBox>
      </Section>

      {/* Important Contacts */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mt-4">
        <h3 className="font-bold text-gray-100 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-400" /> Important Contacts
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-xl border border-amber-500/20">
            <span className="text-2xl">🇯🇵</span>
            <div>
              <p className="font-semibold text-gray-100 text-sm">Embassy of Japan in Sri Lanka</p>
              <p className="text-gray-400 text-sm">No. 20, Gregory's Road, Colombo 07</p>
              <p className="text-gray-400 text-sm">Tel: +94-11-2693831 | Mon–Fri, 9am–12pm (visa section)</p>
              <a href="https://www.lk.emb-japan.go.jp" className="text-amber-400 text-xs font-semibold hover:underline" target="_blank" rel="noopener noreferrer">www.lk.emb-japan.go.jp</a>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-xl border border-blue-500/20">
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="font-semibold text-gray-100 text-sm">Immigration Services Agency of Japan</p>
              <p className="text-gray-400 text-sm">For work permission after arriving in Japan</p>
              <a href="https://www.isa.go.jp/en/" className="text-blue-400 text-xs font-semibold hover:underline" target="_blank" rel="noopener noreferrer">www.isa.go.jp/en/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
