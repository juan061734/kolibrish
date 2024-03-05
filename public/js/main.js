// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { loginCheck } from './services/auth/loginCheck.js'
import { loadIndex } from './services/index/index.js'
import { auth } from './config/firebase.js'
// #endregion

// #region functions
onAuthStateChanged(auth, (user) => {
  loadIndex() // Cargar el index
  if (user) {
    try {
      loginCheck(user) // Verificar el usuario
    } catch (error) {
      console.error(error)
    }
  }
})
// #endregion
