import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'hello world',
  routes: [{ path: '/', component: '@/pages/home/index' }],
});
