<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
    authStore.getUser();
});
</script>

<template>
    <main class="flex flex-col items-center justify-center">
        <h1 class="title">
        Bienvenido a tu perfil
        </h1>
        <div>
            <p>Nombre:</p>
            <p v-if="authStore.user">
            {{ authStore.user.name }}
            </p>
            <p>Apellido:</p>
            <p v-if="authStore.user">
            {{ authStore.user.lastname }}
            </p>
            <p>Número de teléfono:</p>
            <p v-if="authStore.user">
            {{ authStore.user.phone }}
            </p>
            <p>Email:</p>
            <p v-if="authStore.user">
            {{ authStore.user.email }}
            </p>
        </div>
    </main>
</template>
