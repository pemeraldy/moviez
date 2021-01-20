import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import firebaseServices from './firebase'

import Vuelidate from 'vuelidate'


const app = createApp(App)
app.use(Vuelidate)
app.use(router).mount('#app')

// firebaseServices.auth.onAuthStateChanged((user)=>{
//     console.log('Hello')
//     if(!app){
//     }
//     if(user){
//       store.dispatch('fetchUserProfile', user)
//     }
//   })

