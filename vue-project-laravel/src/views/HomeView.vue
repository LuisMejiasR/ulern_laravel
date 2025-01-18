<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
});
</script>

<template>
  <main>
    <h1 class="title">
      Bienvenidos a mi prueba de Vue 3 y Laravel 11
    </h1>
    <p v-if="authStore.user">
      {{ authStore.user.name }}
    </p>
  </main>
</template>
