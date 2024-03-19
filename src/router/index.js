import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import layout1 from '../layouts/layout1'
import layout2 from '../layouts/layout2'
import layout3 from '../layouts/layout3'
import blank from '../layouts/blank'

const routes = [
  {
    path: '/',
    component: layout1,
    children: [
      {
        path: '',
        component: () => import('@/components/Index')
      }, {
        path: '/logout',
        component: () => import('@/components/logout')
      }, {
        path: 'login',
        component: () => import('@/components/Login')
      }, {
        path: 'blog',
        component: () => import('@/components/blog')
      }, {
        path: 'contact-us',
        component: () => import('@/components/ContactUs')
      }, {
        path: 'about-us',
        component: () => import('@/components/AboutUs')
      }


    ]
  }, {
    path: '/dashboard/',
    component: layout2,
    children: [
      {
        path: 'profile',
        component: () => import('@/components/user/profile')
      },
      {
        path: 'my-plans',
        component: () => import('@/components/user/MyPlans')
      },
      {
        path: 'balances',
        component: () => import('@/components/user/Balances')
      },
      {
        path: 'jobs',
        component: () => import('@/components/user/jobs')
      },
      {
        path: 'charge',
        component: () => import('@/components/user/Charge')
      },
      {
        path: 'withdraw',
        component: () => import('@/components/user/Withdraw')
      },
      {
        path: 'profit-history',
        component: () => import('@/components/user/Profits')
      },
      {
        path: 'transactions',
        component: () => import('@/components/user/Transactions')
      },
    ]
  }, {
    path: '/admin-dashboard/',
    component: layout3,
    children: [
      {
        path: 'coin-management',
        component: () => import('@/components/admin/coinmanagement')
      }, {
        path: 'saving-plans',
        component: () => import('@/components/admin/plans')
      }, {
        path: 'mainpage',
        component: () => import('@/components/admin/mainpage')
      }
    ]
  }, {
    path: '/',
    component: blank,
    children: [
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
