import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Kasa from '../pages/Kasa';
import webRestaurace from '../pages/Restaurace';

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
    {
        path: '/kasa',
        component: Kasa,
        name: 'Kasa',
    },
    {
        path: '/web-restaurace',
        component: webRestaurace,
        name: 'Web restaurace',
    },
];

export default routes;
