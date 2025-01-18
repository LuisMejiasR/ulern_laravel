<script setup>
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive ({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: ''
});

</script>

<template>
    <main>
        <h1 class="title">
            Registrar nueva cuenta
        </h1>
        <form
            @submit.prevent="authenticate('register', formData)"
            class="w-1/2 mx-auto space-y-6"
        >
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    v-model="formData.name"
                />
                <p v-if="errors.name" class="error">
                    El nombre es requerido
                </p>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Apellido"
                    v-model="formData.lastname"
                />
                <p v-if="errors.lastname" class="error">
                    El apellido es requerido
                </p>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Telefono"
                    v-model="formData.phone"
                />
                <p v-if="errors.phone" class="error">
                    El teléfono es requerido
                </p>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    v-model="formData.email"
                />
                <p v-if="errors.email" class="error">
                    El e-mail es requerido
                </p>
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Contraseña"
                    v-model="formData.password"
                />
                <p v-if="errors.password" class="error">
                    La contraseña es requerida
                </p>
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    v-model="formData.password_confirmation"
                />
            </div>
            <button class="primary-btn">Registrate</button>
        </form>
    </main>
</template>
