import { collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
import { db } from './config'

export const getProducts = async () => {
  const productsRef = collection(db, 'products')
  const snapshot = await getDocs(productsRef)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
  const productsRef = collection(db, 'products')
  const q = query(productsRef, where('category', '==', category))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductById = async (id) => {
  const productRef = doc(db, 'products', id)
  const snapshot = await getDoc(productRef)
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() }
  } else {
    throw new Error('Producto no encontrado')
  }
}

export const addOrder = async (order) => {
  const ordersRef = collection(db, 'orders')
  const docRef = await addDoc(ordersRef, order)
  return docRef.id
}