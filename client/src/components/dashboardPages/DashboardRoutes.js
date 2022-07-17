import DailyMenu from './DailyMenu';
import Economics from './Economics';
import MainPage from './MainPage';
import Minutes from './Minutes';
import Orders from './Orders';
import Pizza from './Pizza';
import Settings from './Settings';
import Users from './Users';
import Receptury from './Receptury';
import Moduls from './Moduls';

const DashBoardRoutes = [
    {
        name: 'Hlavní stránka',
        component: MainPage,
    },
    {
        name: 'Receptury',
        component: Receptury,
    },
    {
        name: 'Denní menu',
        component: DailyMenu,
    },
    {
        name: 'Minutky',
        component: Minutes,
    },
    {
        name: 'Pizza',
        component: Pizza,
    },
    {
        name: 'Objednávky',
        component: Orders,
    },

    {
        name: 'Uživatelé',
        component: Users,
    },
    {
        name: 'Ekonomika',
        component: Economics,
    },
    {
        name: 'Moduly',
        component: Moduls,
    },
    {
        name: 'nastavení',
        component: Settings,
    },
];

export default DashBoardRoutes;
