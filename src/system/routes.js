import index from '../pages/index.vue'
import registration from '../pages/users/registration.vue'
import auth from '../pages/users/authorization.vue'
import profile from '../pages/users/profile.vue'
import specInfo from '../pages/specialists/info.vue'
import specCart from '../pages/specialists/cart.vue'

export const routes = [
    {path: '/',     component: index},
    {path: '/registration', component: registration},
    {path: '/login', component: auth},
    {path: '/profile', component: profile},
    {path: '/specialists', component: specInfo},
    {path: '/specialists/cart', component: specCart}
]