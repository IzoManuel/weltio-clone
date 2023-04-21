import  * as VueRouter  from 'vue-router';

//Vue.use(VueRouter);

const Register = () => import('../app/modules/auth/views/Register.vue');
const Login = () => import('../app/modules/auth/views/Login.vue');
const TaskList = () => import('../app/modules/task/views/List.vue');
const TaskEdit = () => import('../app/modules/task/views/Edit.vue');
const TaskBaseLayout = () => import('../app/modules/task/views/TaskBaseLayout.vue');

const router = VueRouter.createRouter({
    ///base: '/',
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: { name: 'TasksBaseLayout'}
        },
        {
            path: '/home',
            name: 'TasksBaseLayout',
            component: TaskBaseLayout,
            //redirect: { name: 'tasks.index'},
            children: [
                {
                    path: '/tasks',
                    name: 'tasks.index',
                    component: TaskList
                },
                {
                    path: '/tasks/:id',
                    name: 'tasks.edit',
                    component: TaskEdit
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