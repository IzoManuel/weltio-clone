import  * as VueRouter  from 'vue-router';

//Vue.use(VueRouter);

const BaseLayout = () => import('../app/common/layouts/base-layout.vue');
const LandingPage = () => import('../app/pages/landing.vue');

const router = VueRouter.createRouter({
    ///base: '/',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: { name: 'LandingPage'}
        },
        {
            path: '/home',
            name: 'LandingPage',
            component: LandingPage,
        },
    ]
});

export default router;