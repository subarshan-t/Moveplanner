// IndexedDB configuration
const DB_NAME = 'tokyo-bound-photos'
const DB_VERSION = 1
const STORE_NAME = 'item-photos'

let db = null

export function initDB() {
  return new Promise((resolve, reject) => {
    if (db) { resolve(db); return }
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = (event) => {
      const database = event.target.result
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'key' })
      }
    }
    request.onsuccess = (event) => {
      db = event.target.result
      resolve(db)
    }
    request.onerror = (event) => {
      console.error('IndexedDB error:', event.target.error)
      reject(event.target.error)
    }
  })
}

function makePhotoKey(personId, categoryId, itemId) {
  return `${personId}__${categoryId}__${itemId}`
}

export async function saveItemPhoto(personId, categoryId, itemId, photoDataUrl) {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const key = makePhotoKey(personId, categoryId, itemId)
    const request = store.put({ key, photoDataUrl, updatedAt: Date.now() })
    request.onsuccess = () => resolve()
    request.onerror = (e) => reject(e.target.error)
  })
}

export async function getItemPhoto(personId, categoryId, itemId) {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const key = makePhotoKey(personId, categoryId, itemId)
    const request = store.get(key)
    request.onsuccess = (e) => resolve(e.target.result?.photoDataUrl || null)
    request.onerror = (e) => reject(e.target.error)
  })
}

export async function deleteItemPhoto(personId, categoryId, itemId) {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const key = makePhotoKey(personId, categoryId, itemId)
    const request = store.delete(key)
    request.onsuccess = () => resolve()
    request.onerror = (e) => reject(e.target.error)
  })
}

// LocalStorage wrappers
export function saveItemState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('localStorage save error:', e)
  }
}

export function getItemState(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return defaultValue
    return JSON.parse(raw)
  } catch (e) {
    return defaultValue
  }
}
