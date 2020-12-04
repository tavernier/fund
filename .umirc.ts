import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'hello world',
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/home/index',
        },
        {
          path: '/etf',
          component: '@/pages/etf/index',
        },
        {
          path: '/debt',
          component: '@/pages/debt/index',
        },
      ],
    },
    {
      path: '/404',
      component: '@/pages/home/index',
    },
  ],
  antd: {
    dark: true,
  },
  request: {
    dataField: 'data',
  },
});
