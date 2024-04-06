import { createMemoryHistory, createRouter } from 'vue-router'

import PointsView from '@/views/PointsView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { 
    path: '', 
    component: PointsView,
    name: 'Локации',  
    sideBar: false,
  },
  { 
    path: '/points', 
    component: PointsView,
    name: 'Локации',  
    sideBar: true,
  },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router