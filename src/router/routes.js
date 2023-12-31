
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'Login', path: '/login', component: () => import('pages/LoginPage.vue') },
      { name: 'Register', path: '/register', component: () => import('pages/RegisterPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
