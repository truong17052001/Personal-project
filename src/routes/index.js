// Layouts

// Pages
import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
