import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            user: null,
            errors: {},
        }
    },
    actions: {
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
            }
            console.log(data);
        }
    }
})