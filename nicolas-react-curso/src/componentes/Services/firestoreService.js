import { collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
import { db } from './config'

export const getProducts = async () => {
  const productsRef = collection(db, 'cursoReact')
  const snapshot = await getDocs(productsRef)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
  const productsRef = collection(db, 'cursoReact')
  const q = query(productsRef, where('category', '==', category))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductById = async (id) => {
  const q = query(collection(db, 'cursoReact'), where('id', '==', parseInt(id)))
  const snapshot = await getDocs(q)
  if (!snapshot.empty) {
    const doc = snapshot.docs[0]
    return { id: doc.id, ...doc.data() }
  } else {
    throw new Error('Producto no encontrado')
  }
}

export const addOrder = async (order) => {
  const ordersRef = collection(db, 'orders')
  const docRef = await addDoc(ordersRef, order)
  return docRef.id
}