import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  productList: string;
  checkout: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  productList: '/product-list',
  checkout: '/checkout',
};

interface Routes extends SwitchRoutes {}

export const routes: Routes = switchRoutes;
