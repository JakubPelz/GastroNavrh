import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const routes = [
    {
        path: '/',
        component: Login,
        name: 'Login',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
    },
];

export default routes;
