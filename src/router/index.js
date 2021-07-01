import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Calendar from '../views/Calendar.vue'
import Speakers from '../views/Speakers.vue'
import Resources from '../views/Resources.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import NewPage from '../views/NewPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: Speakers
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/newpath',
    name: 'newpath',
    component: NewPage
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
