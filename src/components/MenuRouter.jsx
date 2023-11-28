import Home from './Home';
import Category from './Category';
import Usuarios from './Usuarios';
import CartWidget from './CartWidget';

export const MenuRouter = [
    {
        id: 'home',
        path: '/',
        Element: Home,
    },
    {
        id: 'category',
        path: '/category',
        Element: Category,
    },
    {
        id: 'usuarios',
        path: '/usuarios',
        Element: Usuarios,
    },
    {
        id: 'cart',
        path: '/cart',
        Element: CartWidget,
    },

];
  
    

