import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            errors: {},
        }
    },
    actions: {
        // metodo para obtener usuario
        async getUser() {
            if (localStorage.getItem('token')) {
                const res = await fetch('/api/user',
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await res.json();
                if (res.ok) {
                    this.user = data;
                }
                console.log(data);
            }
        },

        // metodo para registrar al usuario
        async authenticate(apiRoute, formData) {
            const res = await fetch(`api/${apiRoute}`, {
                method: 'post',
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            // agarrando los errores y actualizando estado
            if (data.errors) {
                this.errors = data.errors;
            } else {
                localStorage.setItem('token', data.token);
                this.user = data.user;
                // redirecionar al usuario
                this.router.push({ name: 'home' });
            }
            console.log(data);
        }
    }
})