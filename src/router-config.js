
export const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('./components/AboutUs.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListOfTrans.vue')
    },
    {
        path: '/send',
        name: 'send',
        component: () => import('./components/SendLetter.vue')
    }
];