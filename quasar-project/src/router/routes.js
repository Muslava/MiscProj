
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AuthPage.vue') },
      { path: '/', component: () => import('src/pages/AuthPage.vue') },
      { path: '/homepage', component: () => import('src/pages/HomePage.vue'), meta: {requiresAuth: true} }
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
