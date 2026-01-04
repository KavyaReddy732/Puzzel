import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import FrontPage from '../components/FrontPage.vue';
import BasketSmall from '../components/BasketSmall.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Products',
    component: FrontPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: BasketSmall,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;