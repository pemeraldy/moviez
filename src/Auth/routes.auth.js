import Login from './Login.vue'
import SignUp from './SignUp.vue'


const authRoute = [
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path: '/signup',
        name:'signup',
        component: SignUp
    }
]

export default authRoute