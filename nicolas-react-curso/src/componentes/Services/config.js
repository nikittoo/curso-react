// PROMPT PARA CONTINUAR: Hemos integrado Firestore como BD. Siguientes pasos:
// 1. Configurar credenciales reales de Firebase en este archivo (reemplazar placeholders).
// 2. Crear proyecto en Firebase Console, habilitar Firestore.
// 3. Crear colección 'products' con documentos de productos (id, titulo, precio, imagen, descripcion, category, stock).
// 4. Crear colección 'orders' vacía para guardar pedidos.
// 5. Probar la app: productos se cargan desde Firestore, pedidos se guardan al confirmar en checkout.
// Después, revisar CSS y finalizar.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIouuiW-XBwpx6-I7odZaya3AIxG0yGlY",
  authDomain: "nicolas-react1.firebaseapp.com",
  projectId: "nicolas-react1",
  storageBucket: "nicolas-react1.firebasestorage.app",
  messagingSenderId: "608373828963",
  appId: "1:608373828963:web:4b7d1a93b1c6e28b08f756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);