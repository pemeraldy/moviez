export const authState = {
    namespaced: true,
    state:{
        user:{
            id:'',
            isLoggedIn: false,            
        }
    },
    mutations:{},
    actions:{
        signIn(state){
            console.log(state)
        },
        signOut(state){            
            console.log(state)
        },
        signIwithGoogle(state){            
            console.log(state)
        }
    },
    getters:{},
}
