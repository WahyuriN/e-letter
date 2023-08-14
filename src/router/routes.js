const routes = [
  { 
    path: '/', 
    component: () => import('@/layouts/DefaultLayout.vue'),

    children: [
      {
        path: 'home',
        alias: '',
        name: 'home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'profil',
        alias: '',
        name: 'profil',
        component: () => import('@/pages/Profil.vue')
      },
      {
        path: 'pengajuan',
        alias: '',
        name: 'pengajuan surat',
        component: () => import('@/pages/Pengajuan.vue')
      },

      {
        path: 'riwayat',
        alias: '',
        name: 'riwayat surat',
        component: () => import('@/pages/Riwayat.vue')
      },
      {
        path: 'settings',
        alias: '',
        name: 'Setting',
        component: () => import('@/pages/Setting.vue')
      }
    ]
  },
  {
    path: '/auth/',
    component: () => import('@/layouts/Login.vue'),
    children: [
      {
        path: 'login',
        alias: '',
        name: 'login',
        component: () => import('@/pages/login.vue')
      },
    ]
  },
]

export default routes