import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebaseServices from './firebase'

import store from './store'


let app 

firebaseServices.auth.onAuthStateChanged((user)=>{
    if(!app){
        app = createApp(App)
        app.use(router).use(store).mount('#app')
    }
    if(user){
    //   store.dispatch('fetchUserProfile', user)
    // firebaseServices.auth.signOut()
    console.log(user)
    }
  })

