import { createMemoryHistory, createRouter } from 'vue-router'

import PointsView from '@/views/PointsView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { 
    path: '', 
    component: PointsView,
    name: 'Локации',  
    sideBar: false,
    redirect: to => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: '/points' }
    },
  },
  { 
    path: '/points', 
    component: PointsView,
    name: 'Локации',  
    sideBar: true,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router