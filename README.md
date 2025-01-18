# Sistema de Login y Registro con Laravel 11, Vue 3 y TailwindCSS

## Descripción
Este proyecto implementa un sistema de login y registro de usuarios con las siguientes características principales:
- Registro de usuarios con campos: nombre, apellido, número de teléfono, email y contraseña.
- Inicio de sesión con email y contraseña.
- Visualización del perfil del usuario registrado.

## Tecnologías Utilizadas
- **Backend**: Laravel 11
- **Frontend**: Vue 3
- **Estilos**: TailwindCSS
- **Base de Datos**: SQLite

## Requisitos Previos
Asegúrate de tener instalados los siguientes componentes en tu sistema:
- PHP >= 8.1
- Composer
- Node.js >= 16.x
- NPM o Yarn

## Instalación y Configuración

### Clonar el Repositorio
```bash
git clone https://github.com/LuisMejiasR/ulern_laravel.git
cd ulern_laravel
```

### Configuración del Backend
1. Navega al directorio del backend:
   ```bash
   cd auth-app
   ```
2. Instala las dependencias de PHP:
   ```bash
   composer install
   ```
3. Crea el archivo `.env`:
   ```bash
   cp .env.example .env
   ```
4. Genera la clave de la aplicación:
   ```bash
   php artisan key:generate
   ```
5. Configura la base de datos en el archivo `.env`:
   ```
   DB_CONNECTION=sqlite
   DB_DATABASE=./database/database.sqlite
   ```
6. Crea el archivo de la base de datos:
   ```bash
   touch database/database.sqlite
   ```
7. Ejecuta las migraciones:
   ```bash
   php artisan migrate
   ```
8. Inicia el servidor del backend:
   ```bash
   php artisan serve
   ```

### Configuración del Frontend
1. Navega al directorio del frontend:
   ```bash
   cd vue-project-laravel
   ```
2. Instala las dependencias de Node.js:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso del Proyecto
1. Accede a la aplicación en tu navegador:
   - **Frontend**: `http://localhost:5173` (dependiendo de tu configuración de Vue)
   - **Backend**: `http://127.0.0.1:8000`
2. Regístrate como un nuevo usuario en la página de registro.
3. Inicia sesión con las credenciales creadas.
4. Visualiza los detalles del usuario en la página de perfil.

## Buenas Prácticas Implementadas
- Uso de migraciones para la gestión de la base de datos.
- Manejo de errores en el backend y el frontend.
- Estructura modular y clara del código.
- Documentación detallada para instalación y configuración.


