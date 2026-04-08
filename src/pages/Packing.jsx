import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Camera, X, CheckCircle2, Circle, ChevronDown, ChevronUp, ShoppingBag, Eye } from 'lucide-react'
import { saveItemPhoto, getItemPhoto, deleteItemPhoto, saveItemState, getItemState } from '../utils/storage.js'

// ─── Shopping Data ────────────────────────────────────────────────────────────

const shoppingData = [
  {
    personId: 'brindha',
    personName: 'Brindha',
    emoji: '👩‍🎓',
    description: 'Professional woman, 2 years in Japan, Masters program',
    categories: [
      {
        categoryId: 'brindha-work',
        title: 'Work & University Wear',
        icon: '👔',
        buyInJapan: false,
        items: [
          { itemId: 'bw1', name: 'Formal blazers/jackets', qty: 3 },
          { itemId: 'bw2', name: 'Dress trousers/tailored pants', qty: 4 },
          { itemId: 'bw3', name: 'Formal blouses/tops', qty: 5 },
          { itemId: 'bw4', name: 'Professional midi skirts', qty: 2 },
          { itemId: 'bw5', name: 'Formal shoes (closed toe, heels or block heels)', qty: 2 },
          { itemId: 'bw6', name: 'Smart casual tops for university', qty: 6 },
          { itemId: 'bw7', name: 'Cardigans (layering for lecture halls)', qty: 3 },
        ],
      },
      {
        categoryId: 'brindha-casual',
        title: 'Casual / Everyday',
        icon: '👕',
        buyInJapan: false,
        items: [
          { itemId: 'bc1', name: 'Casual t-shirts', qty: 6 },
          { itemId: 'bc2', name: 'Casual tops/blouses', qty: 5 },
          { itemId: 'bc3', name: 'Jeans (dark wash)', qty: 2 },
          { itemId: 'bc4', name: 'Casual pants/trousers', qty: 3 },
          { itemId: 'bc5', name: 'Casual dresses/summer dresses', qty: 4 },
          { itemId: 'bc6', name: 'Shorts (for home/summer)', qty: 3 },
          { itemId: 'bc7', name: 'Casual sneakers/flat shoes', qty: 2 },
          { itemId: 'bc8', name: 'Sandals', qty: 2 },
        ],
      },
      {
        categoryId: 'brindha-winter',
        title: 'Winter Essentials',
        icon: '🧥',
        buyInJapan: true,
        items: [
          { itemId: 'bwi1', name: 'Heavy winter coat', qty: 1 },
          { itemId: 'bwi2', name: 'Medium jacket/parka', qty: 1 },
          { itemId: 'bwi3', name: 'Thick knit sweaters', qty: 4 },
          { itemId: 'bwi4', name: 'Thermal undershirts (heattech)', qty: 5 },
          { itemId: 'bwi5', name: 'Thermal leggings (heattech)', qty: 4 },
          { itemId: 'bwi6', name: 'Winter boots', qty: 1 },
          { itemId: 'bwi7', name: 'Ankle boots', qty: 1 },
          { itemId: 'bwi8', name: 'Scarf', qty: 2 },
          { itemId: 'bwi9', name: 'Gloves', qty: 2 },
          { itemId: 'bwi10', name: 'Beanie/winter hat', qty: 1 },
        ],
      },
      {
        categoryId: 'brindha-traditional',
        title: 'Traditional / Formal',
        icon: '🥻',
        buyInJapan: false,
        items: [
          { itemId: 'bt1', name: 'Sarees (for cultural events, Sri Lankan gatherings)', qty: 3 },
          { itemId: 'bt2', name: 'Salwar kameez sets', qty: 3 },
          { itemId: 'bt3', name: 'Formal evening outfit', qty: 1 },
        ],
      },
      {
        categoryId: 'brindha-basics',
        title: 'Basics & Undergarments',
        icon: '🧦',
        buyInJapan: false,
        items: [
          { itemId: 'bb1', name: 'Bras', qty: 8 },
          { itemId: 'bb2', name: 'Underwear sets', qty: 12 },
          { itemId: 'bb3', name: 'Socks', qty: 10 },
          { itemId: 'bb4', name: 'Tights/stockings', qty: 5 },
          { itemId: 'bb5', name: 'Activewear/gym set', qty: 2 },
          { itemId: 'bb6', name: 'Sleepwear/pyjamas', qty: 4 },
          { itemId: 'bb7', name: 'Home wear (comfortable indoor clothes)', qty: 3 },
        ],
      },
      {
        categoryId: 'brindha-bags',
        title: 'Bags & Accessories',
        icon: '👜',
        buyInJapan: false,
        items: [
          { itemId: 'bag1', name: 'University/laptop backpack', qty: 1 },
          { itemId: 'bag2', name: 'Professional tote bag', qty: 1 },
          { itemId: 'bag3', name: 'Casual handbag', qty: 2 },
          { itemId: 'bag4', name: 'Small crossbody bag', qty: 1 },
          { itemId: 'bag5', name: 'Umbrella (buy quality one in Japan)', qty: 1 },
          { itemId: 'bag6', name: 'Belt', qty: 2 },
        ],
      },
      {
        categoryId: 'brindha-rain',
        title: 'Rain Gear',
        icon: '☔',
        buyInJapan: false,
        items: [
          { itemId: 'br1', name: 'Raincoat/waterproof jacket', qty: 1 },
        ],
      },
    ],
  },
  {
    personId: 'malaka',
    personName: 'Malaka',
    emoji: '👨',
    description: 'Husband, casual + job-seeking, 2 years',
    categories: [
      {
        categoryId: 'malaka-smart',
        title: 'Smart Casual / Job Seeking',
        icon: '👔',
        buyInJapan: false,
        items: [
          { itemId: 'ms1', name: 'Business casual shirts (button-up)', qty: 5 },
          { itemId: 'ms2', name: 'Smart trousers/chinos', qty: 3 },
          { itemId: 'ms3', name: 'Blazer', qty: 1 },
          { itemId: 'ms4', name: 'Dress shoes', qty: 1 },
          { itemId: 'ms5', name: 'Smart casual shoes', qty: 1 },
        ],
      },
      {
        categoryId: 'malaka-casual',
        title: 'Casual Everyday',
        icon: '👕',
        buyInJapan: false,
        items: [
          { itemId: 'mc1', name: 'T-shirts', qty: 8 },
          { itemId: 'mc2', name: 'Casual shirts', qty: 4 },
          { itemId: 'mc3', name: 'Jeans', qty: 3 },
          { itemId: 'mc4', name: 'Shorts', qty: 4 },
          { itemId: 'mc5', name: 'Casual sneakers', qty: 2 },
          { itemId: 'mc6', name: 'Flip flops/sandals', qty: 1 },
        ],
      },
      {
        categoryId: 'malaka-winter',
        title: 'Winter',
        icon: '🧥',
        buyInJapan: true,
        items: [
          { itemId: 'mwi1', name: 'Winter coat', qty: 1 },
          { itemId: 'mwi2', name: 'Knit sweaters', qty: 3 },
          { itemId: 'mwi3', name: 'Thermal undershirts', qty: 4 },
          { itemId: 'mwi4', name: 'Thermal leggings', qty: 3 },
          { itemId: 'mwi5', name: 'Winter boots or waterproof shoes', qty: 1 },
          { itemId: 'mwi6', name: 'Scarf', qty: 1 },
          { itemId: 'mwi7', name: 'Gloves', qty: 1 },
        ],
      },
      {
        categoryId: 'malaka-basics',
        title: 'Basics',
        icon: '🧦',
        buyInJapan: false,
        items: [
          { itemId: 'mb1', name: 'Underwear', qty: 10 },
          { itemId: 'mb2', name: 'Socks', qty: 10 },
          { itemId: 'mb3', name: 'Activewear', qty: 2 },
          { itemId: 'mb4', name: 'Sleepwear', qty: 3 },
          { itemId: 'mb5', name: 'Home wear', qty: 2 },
        ],
      },
    ],
  },
  {
    personId: 'aranya',
    personName: 'Aranya',
    emoji: '👧',
    description: '4 years old, starting yochien/nursery',
    categories: [
      {
        categoryId: 'aranya-school',
        title: 'School/Nursery Wear',
        icon: '🏫',
        buyInJapan: false,
        items: [
          { itemId: 'as1', name: 'Comfortable easy-on tops/t-shirts for school', qty: 8 },
          { itemId: 'as2', name: 'Comfortable elastic-waist pants/leggings', qty: 6 },
          { itemId: 'as3', name: 'School pinafore dress', qty: 2 },
          { itemId: 'as4', name: 'Indoor shoes (uwabaki — white canvas, required at Japanese schools)', qty: 1 },
          { itemId: 'as5', name: 'Outdoor shoes/sneakers (Velcro closure)', qty: 2 },
        ],
      },
      {
        categoryId: 'aranya-casual',
        title: 'Casual',
        icon: '👕',
        buyInJapan: false,
        items: [
          { itemId: 'ac1', name: 'Casual dresses', qty: 4 },
          { itemId: 'ac2', name: 'Shorts', qty: 3 },
          { itemId: 'ac3', name: 'Casual tops', qty: 6 },
          { itemId: 'ac4', name: 'Sandals', qty: 1 },
        ],
      },
      {
        categoryId: 'aranya-winter',
        title: 'Winter',
        icon: '🧥',
        buyInJapan: true,
        items: [
          { itemId: 'awi1', name: 'Warm winter coat with hood', qty: 1 },
          { itemId: 'awi2', name: 'Fleece zip-up', qty: 2 },
          { itemId: 'awi3', name: 'Knit sweaters', qty: 3 },
          { itemId: 'awi4', name: 'Thermal set (top + bottom)', qty: 3 },
          { itemId: 'awi5', name: 'Winter boots', qty: 1 },
          { itemId: 'awi6', name: 'Gloves (kids mittens)', qty: 2 },
          { itemId: 'awi7', name: 'Winter hat/beanie', qty: 2 },
        ],
      },
      {
        categoryId: 'aranya-basics',
        title: 'Basics',
        icon: '🧦',
        buyInJapan: false,
        items: [
          { itemId: 'ab1', name: 'Underwear', qty: 10 },
          { itemId: 'ab2', name: 'Socks', qty: 10 },
          { itemId: 'ab3', name: 'Pyjamas/sleepwear', qty: 5 },
          { itemId: 'ab4', name: 'Home wear', qty: 3 },
        ],
      },
      {
        categoryId: 'aranya-special',
        title: 'Special Items for Japanese School',
        icon: '🎒',
        buyInJapan: false,
        items: [
          { itemId: 'asp1', name: 'Randoseru-style backpack or school bag', qty: 1 },
          { itemId: 'asp2', name: 'Indoor slipper bag', qty: 1 },
          { itemId: 'asp3', name: 'Smock/art apron', qty: 2 },
          { itemId: 'asp4', name: 'Change of clothes sets to keep at school', qty: 2 },
        ],
      },
    ],
  },
  {
    personId: 'aradhya',
    personName: 'Aradhya',
    emoji: '👶',
    description: '2 years old, hoikuen/daycare',
    categories: [
      {
        categoryId: 'aradhya-daycare',
        title: 'Daycare Essentials',
        icon: '🏫',
        buyInJapan: false,
        note: 'Everything MUST be labelled with her name!',
        items: [
          { itemId: 'ad1', name: 'Easy-on/off t-shirts', qty: 10 },
          { itemId: 'ad2', name: 'Elastic waist pants', qty: 8 },
          { itemId: 'ad3', name: 'One-piece rompers', qty: 2 },
          { itemId: 'ad4', name: 'Socks', qty: 15 },
          { itemId: 'ad5', name: 'Underwear (for toilet training)', qty: 12 },
        ],
      },
      {
        categoryId: 'aradhya-casual',
        title: 'Casual / Everyday',
        icon: '👕',
        buyInJapan: false,
        items: [
          { itemId: 'aac1', name: 'Casual dresses', qty: 4 },
          { itemId: 'aac2', name: 'Shorts', qty: 4 },
          { itemId: 'aac3', name: 'Casual tops', qty: 6 },
          { itemId: 'aac4', name: 'Sandals', qty: 1 },
          { itemId: 'aac5', name: 'Sneakers (Velcro)', qty: 2 },
        ],
      },
      {
        categoryId: 'aradhya-winter',
        title: 'Winter',
        icon: '🧥',
        buyInJapan: true,
        items: [
          { itemId: 'aawi1', name: 'Winter puffer coat', qty: 1 },
          { itemId: 'aawi2', name: 'Fleece zip-up', qty: 2 },
          { itemId: 'aawi3', name: 'Warm sweaters', qty: 3 },
          { itemId: 'aawi4', name: 'Thermal set', qty: 3 },
          { itemId: 'aawi5', name: 'Winter boots', qty: 1 },
          { itemId: 'aawi6', name: 'Mittens', qty: 3 },
          { itemId: 'aawi7', name: 'Winter hat', qty: 2 },
        ],
      },
      {
        categoryId: 'aradhya-basics',
        title: 'Basics',
        icon: '🧦',
        buyInJapan: false,
        items: [
          { itemId: 'aab1', name: 'Pyjamas/sleepwear', qty: 6 },
          { itemId: 'aab2', name: 'Bibs', qty: 5 },
          { itemId: 'aab3', name: 'Home wear', qty: 4 },
        ],
      },
    ],
  },
]

// ─── Photo slot component ─────────────────────────────────────────────────────

function PhotoSlot({ personId, categoryId, itemId, slotIndex, onView }) {
  const [photo, setPhoto] = useState(null)
  const fileRef = useRef(null)
  const storageKey = `${personId}__${categoryId}__${itemId}__${slotIndex}`

  useEffect(() => {
    getItemPhoto(personId, categoryId, `${itemId}__${slotIndex}`)
      .then(p => setPhoto(p))
      .catch(() => {})
  }, [personId, categoryId, itemId, slotIndex])

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const dataUrl = ev.target.result
      await saveItemPhoto(personId, categoryId, `${itemId}__${slotIndex}`, dataUrl)
      setPhoto(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const handleRemove = async (e) => {
    e.stopPropagation()
    await deleteItemPhoto(personId, categoryId, `${itemId}__${slotIndex}`)
    setPhoto(null)
  }

  if (photo) {
    return (
      <div className="relative w-12 h-12 rounded-lg overflow-hidden border-2 border-emerald-500/50 flex-shrink-0 group cursor-pointer"
        onClick={() => onView(photo)}>
        <img src={photo} alt="item" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
          <Eye className="w-3 h-3 text-white" />
        </div>
        <button
          onClick={handleRemove}
          className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-bl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="w-2.5 h-2.5 text-white" />
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => fileRef.current?.click()}
      className="w-12 h-12 rounded-lg border-2 border-dashed border-gray-600 flex-shrink-0 flex items-center justify-center hover:border-amber-500/60 hover:bg-amber-500/5 transition-all group"
    >
      <Camera className="w-4 h-4 text-gray-600 group-hover:text-amber-400 transition-colors" />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </button>
  )
}

// ─── Item Row ─────────────────────────────────────────────────────────────────

function ItemRow({ personId, categoryId, item, checked, onToggle, onView }) {
  const slots = Array.from({ length: Math.min(item.qty, 6) })

  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl transition-all group ${checked ? 'opacity-60' : 'hover:bg-gray-800/60'}`}>
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item.itemId)}
        className="flex-shrink-0 mt-0.5"
      >
        {checked
          ? <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          : <Circle className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
        }
      </button>

      {/* Name + qty */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm ${checked ? 'line-through text-gray-500' : 'text-gray-200'}`}>
            {item.name}
          </span>
          <span className="text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded-full flex-shrink-0">
            ×{item.qty}
          </span>
        </div>

        {/* Photo slots */}
        <div className="flex gap-1.5 mt-2 flex-wrap">
          {slots.map((_, i) => (
            <PhotoSlot
              key={i}
              personId={personId}
              categoryId={categoryId}
              itemId={item.itemId}
              slotIndex={i}
              onView={onView}
            />
          ))}
          {item.qty > 6 && (
            <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-gray-500">+{item.qty - 6}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Category Section ────────────────────────────────────────────────────────

function CategorySection({ personId, category, checked, onToggle, onView }) {
  const [open, setOpen] = useState(true)
  const catChecked = category.items.filter(it => checked[it.itemId]).length
  const catTotal = category.items.length

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-base">{category.icon}</span>
        <span className="font-semibold text-gray-100 flex-1 text-left text-sm">{category.title}</span>
        {category.buyInJapan && (
          <span className="text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
            Buy in Japan
          </span>
        )}
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
          catChecked === catTotal ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'
        }`}>
          {catChecked}/{catTotal}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>

      {/* mini bar */}
      <div className="h-0.5 mx-3 bg-gray-800 rounded-full mb-1">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: catTotal > 0 ? `${(catChecked / catTotal) * 100}%` : '0%' }}
        />
      </div>

      {category.note && open && (
        <div className="mx-3 mb-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
          ⚠️ {category.note}
        </div>
      )}

      {open && (
        <div className="space-y-0.5">
          {category.items.map(item => (
            <ItemRow
              key={item.itemId}
              personId={personId}
              categoryId={category.categoryId}
              item={item}
              checked={checked[item.itemId] || false}
              onToggle={onToggle}
              onView={onView}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Photo Lightbox ──────────────────────────────────────────────────────────

function PhotoLightbox({ photo, onClose }) {
  if (!photo) return null
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-lg w-full">
        <img src={photo} alt="Full view" className="w-full rounded-2xl shadow-2xl" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// ─── Budget Section ───────────────────────────────────────────────────────────

function BudgetSection() {
  const budgetItems = [
    { person: 'Brindha', emoji: '👩‍🎓', color: 'text-amber-400', low: 50000, high: 80000, note: 'Professional wardrobe + basics. Winter in Japan.' },
    { person: 'Malaka', emoji: '👨', color: 'text-blue-400', low: 25000, high: 40000, note: 'Smart casual + everyday. Winter in Japan.' },
    { person: 'Aranya', emoji: '👧', color: 'text-pink-400', low: 15000, high: 25000, note: 'School + casual. Most winter bought in Japan.' },
    { person: 'Aradhya', emoji: '👶', color: 'text-purple-400', low: 10000, high: 20000, note: 'Mostly buy in Japan (Nishimatsuya). Bring favorites.' },
  ]
  const totalLow = budgetItems.reduce((s, i) => s + i.low, 0)
  const totalHigh = budgetItems.reduce((s, i) => s + i.high, 0)

  return (
    <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-5">
      <h2 className="font-bold text-gray-100 text-lg mb-1 flex items-center gap-2">
        <span>💴</span> Shopping Budget Tracker
      </h2>
      <p className="text-gray-400 text-sm mb-4">Estimated clothing/shopping budget from your 2-month setup allowance</p>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-amber-400">Monthly Stipend</span>
          <span className="text-xl font-bold text-amber-400">¥150,000/month</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Estimated one-time shopping budget (first 2 months setup)</span>
          <span className="text-base font-bold text-amber-300">≈ ¥150,000</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {budgetItems.map((item, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-3 border border-gray-700 flex items-center gap-3">
            <span className="text-xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-0.5">
                <span className={`font-semibold text-sm ${item.color}`}>{item.person}</span>
                <span className={`text-sm font-bold ${item.color}`}>¥{item.low.toLocaleString()}–{item.high.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-400">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl p-3 border border-emerald-500/30 flex items-center justify-between">
        <span className="font-bold text-gray-100">Total Estimate</span>
        <div className="text-right">
          <span className="font-bold text-emerald-400 text-lg">¥{totalLow.toLocaleString()}–{totalHigh.toLocaleString()}</span>
          <p className="text-xs text-gray-400">Within 2-month setup budget</p>
        </div>
      </div>

      <div className="mt-4 bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
        <p className="font-semibold text-teal-400 text-sm mb-2">💡 Shopping Tips</p>
        <div className="space-y-1.5">
          {[
            'Buy winter coats, boots, and thermals IN JAPAN — Uniqlo Heattech is excellent',
            'Nishimatsuya & Akachan Honpo for kids: great quality, affordable prices',
            'Don Quijote, GU, and Uniqlo for everyday basics in Japan',
            'Bring professional wear from Sri Lanka — harder to find in Japan for South Asian body types',
            'Sri Lanka: professional blouses, sarees, salwar kameez — these are harder to find in Japan',
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-teal-400 mt-0.5 flex-shrink-0">•</span>
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Shopping() {
  const [activePerson, setActivePerson] = useState('brindha')
  const [selectedCat, setSelectedCat] = useState(null)
  const [checked, setChecked] = useState(() => getItemState('shopping-checked', {}))
  const [lightboxPhoto, setLightboxPhoto] = useState(null)

  // Persist checked state
  useEffect(() => {
    saveItemState('shopping-checked', checked)
  }, [checked])

  const toggleItem = useCallback((itemId) => {
    setChecked(prev => ({ ...prev, [itemId]: !prev[itemId] }))
  }, [])

  // When person changes, auto-select first category
  useEffect(() => {
    const pd = shoppingData.find(p => p.personId === activePerson)
    if (pd && pd.categories.length) setSelectedCat(pd.categories[0].categoryId)
  }, [activePerson])

  // Compute per-person progress
  const personProgress = shoppingData.map(person => {
    const allItems = person.categories.flatMap(c => c.items)
    const done = allItems.filter(it => checked[it.itemId]).length
    return { personId: person.personId, done, total: allItems.length }
  })

  const activePD = shoppingData.find(p => p.personId === activePerson)
  const activeProgress = personProgress.find(p => p.personId === activePerson)
  const selectedCatData = activePD?.categories.find(c => c.categoryId === selectedCat)

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <ShoppingBag className="w-6 h-6 text-amber-400" />
          <h1 className="font-bold text-2xl text-gray-100">Shopping & Packing Planner</h1>
        </div>
        <p className="text-gray-500 text-sm">Check items off as you buy them — upload a photo for each piece to confirm you have it</p>
      </div>

      {/* ── Person selector cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {shoppingData.map((person) => {
          const prog = personProgress.find(p => p.personId === person.personId)
          const pct = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0
          const isActive = activePerson === person.personId
          return (
            <button
              key={person.personId}
              onClick={() => setActivePerson(person.personId)}
              className={`rounded-xl p-3.5 border-2 transition-all duration-150 text-left ${
                isActive
                  ? 'bg-amber-500/15 border-amber-500/50'
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700 hover:bg-gray-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xl">{person.emoji}</span>
                <p className={`font-bold text-sm ${isActive ? 'text-amber-400' : 'text-gray-100'}`}>
                  {person.personName}
                </p>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full mb-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{prog.done}/{prog.total} items · {pct}%</p>
            </button>
          )
        })}
      </div>

      {/* ── Active person panel ── */}
      {activePD && (
        <>
          {/* Person header strip */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 mb-3 flex items-center gap-3">
            <span className="text-xl">{activePD.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-100 text-sm">{activePD.personName}</p>
              <p className="text-gray-500 text-xs truncate">{activePD.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-amber-400">{activeProgress.done}/{activeProgress.total}</p>
              <p className="text-xs text-gray-500">items ready</p>
            </div>
            <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden flex-shrink-0">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: activeProgress.total > 0 ? `${(activeProgress.done / activeProgress.total) * 100}%` : '0%' }}
              />
            </div>
          </div>

          {/* ── DESKTOP: Two-panel layout ── */}
          <div className="hidden lg:flex bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden" style={{ minHeight: '520px' }}>

            {/* Left: Category list */}
            <div className="w-52 flex-shrink-0 border-r border-gray-800 flex flex-col bg-gray-900">
              <div className="px-3 py-2.5 border-b border-gray-800">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Categories</p>
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {activePD.categories.map(cat => {
                  const catDone = cat.items.filter(it => checked[it.itemId]).length
                  const catPct = cat.items.length > 0 ? (catDone / cat.items.length) * 100 : 0
                  const isSelected = selectedCat === cat.categoryId
                  return (
                    <button
                      key={cat.categoryId}
                      onClick={() => setSelectedCat(cat.categoryId)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left transition-all border-r-2 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500'
                          : 'border-transparent hover:bg-gray-800/60'
                      }`}
                    >
                      <span className="text-base flex-shrink-0">{cat.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold truncate leading-tight ${isSelected ? 'text-amber-400' : 'text-gray-300'}`}>
                          {cat.title}
                        </p>
                        <div className="h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${catDone === cat.items.length && cat.items.length > 0 ? 'bg-emerald-500' : 'bg-amber-500/50'}`}
                            style={{ width: `${catPct}%` }}
                          />
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold flex-shrink-0 ${
                        catDone === cat.items.length && cat.items.length > 0 ? 'text-emerald-400' : 'text-gray-600'
                      }`}>
                        {catDone === cat.items.length && cat.items.length > 0 ? '✓' : `${catDone}/${cat.items.length}`}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: Items for selected category */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {selectedCatData ? (
                <>
                  {/* Category header */}
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-800/60 border-b border-gray-800 flex-shrink-0">
                    <span className="text-xl">{selectedCatData.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-gray-100 text-sm">{selectedCatData.title}</p>
                      {selectedCatData.note && (
                        <p className="text-xs text-amber-400">⚠️ {selectedCatData.note}</p>
                      )}
                    </div>
                    {selectedCatData.buyInJapan && (
                      <span className="text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full flex-shrink-0">
                        🛒 Buy in Japan
                      </span>
                    )}
                  </div>
                  {/* Items */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-0.5">
                    {selectedCatData.items.map(item => (
                      <ItemRow
                        key={item.itemId}
                        personId={activePD.personId}
                        categoryId={selectedCatData.categoryId}
                        item={item}
                        checked={checked[item.itemId] || false}
                        onToggle={toggleItem}
                        onView={setLightboxPhoto}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-600 text-sm">
                  Select a category →
                </div>
              )}
            </div>
          </div>

          {/* ── MOBILE: Accordion layout ── */}
          <div className="lg:hidden bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="p-4">
              {activePD.categories.map(cat => (
                <CategorySection
                  key={cat.categoryId}
                  personId={activePD.personId}
                  category={cat}
                  checked={checked}
                  onToggle={toggleItem}
                  onView={setLightboxPhoto}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Budget Section */}
      <BudgetSection />

      {/* Lightbox */}
      <PhotoLightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
    </div>
  )
}
