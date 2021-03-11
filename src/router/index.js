import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import ContactPage from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
