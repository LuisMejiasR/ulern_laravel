import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import ProfileView from '../views/Profile/ProfileView.vue'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { auth: true }
    },
  ],
})

router.beforeEach( async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getUser();

  // si usuario intenta ir a login o register y ya esta autenticado
  if (authStore.user && to.meta.guest) {
    return { name: "home" };
  }

  // si usuario intenta ir a una ruta protegida y no esta autenticado
  if (!authStore.user && to.meta.auth) {
    return { name: "login" };
  }
})

export default router
