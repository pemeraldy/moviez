export const authState = {
    namespaced: true,
    state:{
        user:{
            id:'',
            isLoggedIn: false,
            movieCollections:[],                     
        }
    },
    mutations:{
        setIsLoggedIn:(state, payload) =>state.user.isLoggedIn = payload
    },
    actions:{
        signIn(state){
            console.log(state, 'SignIN')
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
