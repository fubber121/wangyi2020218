

import Msite from '../pages/Msite/Msite.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Sort from '../pages/Sort/Sort.vue'
import Buy from '../pages/Buy/Buy.vue'


export default [
    {
        path:'/msite',
        component: Msite
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/sort',
        component: Sort
    },
    {
        path:'/buy',
        component: Buy
    },
    {
        path:'/',
        redirect: '/msite'
    }
]