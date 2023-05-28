import  * as VueRouter  from 'vue-router';

//Vue.use(VueRouter);

const Register = () => import('../app/modules/auth/views/Register.vue');
const Login = () => import('../app/modules/auth/views/Login.vue');
const TaskList = () => import('../app/modules/task/views/List.vue');
const TaskEdit = () => import('../app/modules/task/views/Edit.vue');
const BaseLayout = () => import('../app/common/layouts/base-layout.vue');
const LandingPage = () => import('../app/pages/landing.vue');

const router = VueRouter.createRouter({
    ///base: '/',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: { name: 'BaseLayout'}
        },
        {
            path: '/home',
            name: 'BaseLayout',
            component: BaseLayout,
            children: [
                {
                    path: '',
                    name: 'landing',
                    component: LandingPage
                },
            ]
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});

export default router;