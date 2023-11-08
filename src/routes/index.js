// Layouts

// Pages
import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import Product from '~/pages/Product/Product';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/product', component: Product },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
