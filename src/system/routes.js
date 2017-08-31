import index from '../pages/index.vue'
import registration from '../pages/users/registration.vue'
import auth from '../pages/users/authorization.vue'
import profile from '../pages/users/profile.vue'
import specInfo from '../pages/specialists/info.vue'
import specCart from '../pages/specialists/cart.vue'
import specEula from '../pages/specialists/eula.vue'
import cartSpec from '../pages/newlyweds/cartSpecialists.vue'
import category from '../pages/newlyweds/category.vue'
import indexWed from '../pages/newlyweds/index.vue'
import listSpec from '../pages/newlyweds/listSpecialists.vue'

export const routes = [
    {path: '/',     component: index},
    {path: '/registration', component: registration},
    {path: '/login', component: auth},
    {path: '/profile', component: profile},
    {path: '/specialists', component: specInfo},
    {path: '/specialists/cart', component: specCart},
    {path: '/specialists/eula', component: specEula},
    {path: '/wd', component: indexWed},
    {path: '/wd/category', component: category},
    {path: '/wd/specialists', component: listSpec},
    {path: '/wd/specialists/cart', component: cartSpec}
]