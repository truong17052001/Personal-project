// Layouts

// Pages
import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import Product from '~/pages/Product/Product';
import Cart from '~/pages/Cart/Cart';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/cart', component: Cart },
    { path: '/product', component: Product },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
