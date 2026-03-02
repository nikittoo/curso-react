// PROMPT PARA CONTINUAR: Hemos integrado Firestore como BD. Siguientes pasos:
// 1. Configurar credenciales reales de Firebase en este archivo (reemplazar placeholders).
// 2. Crear proyecto en Firebase Console, habilitar Firestore.
// 3. Crear colección 'products' con documentos de productos (id, titulo, precio, imagen, descripcion, category, stock).
// 4. Crear colección 'orders' vacía para guardar pedidos.
// 5. Probar la app: productos se cargan desde Firestore, pedidos se guardan al confirmar en checkout.
// Después, revisar CSS y finalizar.

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)