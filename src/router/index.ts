import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '~/utils/nprogress'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Root',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            meta: {
                title: '主页'
            },
            component: () => import('~/views/Home.vue'),
            children: []
        },
        {
            path: '/about',
            name: 'About',
            meta: {
                title: '关于'
            },
            component: () => import('~/views/About.vue'),
            children: []
        }
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(() => {
    if (!NProgress.isStarted()) {
        NProgress.start()
    }
})

router.afterEach(() => {
    NProgress.done()
})
