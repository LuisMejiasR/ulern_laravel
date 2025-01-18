<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
    authStore.getUser();
});
</script>

<template>
    <main class="flex flex-col p-5 max-w-screen-lg mx-auto">
        <h1 class="title">
        Bienvenido a tu perfil
        </h1>
        <div>
            <p class="font-bold">
                Nombre
            </p>
            <p v-if="authStore.user">
                {{ authStore.user.name }}
            </p>
            <p class="font-bold">
                Apellido
            </p>
            <p v-if="authStore.user">
                {{ authStore.user.lastname }}
            </p>
            <p class="font-bold">
                Número de teléfono
            </p>
            <p v-if="authStore.user">
                {{ authStore.user.phone }}
            </p>
            <p class="font-bold">
                Email
            </p>
            <p v-if="authStore.user">
                {{ authStore.user.email }}
            </p>
        </div>
    </main>
</template>
