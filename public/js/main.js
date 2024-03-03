// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
// import {
//   getDocs,
//   collection
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { loginCheck } from './services/auth/loginCheck.js'
import { loadIndex } from './services/index/index.js'
import { auth } from './config/firebase.js'

// #endregion
// #region functions
// -------- TODAS LAS FUNCIONES VAN ACA SIN ESTE COMENTARIO --------
onAuthStateChanged(auth, (user) => {
  loadIndex()
  if (user) {
    try {
      loginCheck(user)
    } catch (error) {
      console.error(error)
    }
  }
})
// #endregion
