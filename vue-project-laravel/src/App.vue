<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

      <nav>
        <RouterLink :to="{ name: 'home' }" class="nav-link">
          Home
        </RouterLink>
      </nav>
      <div>
        <nav>
          <RouterLink :to="{ name: 'register' }" class="nav-link">
            Register
          </RouterLink>
        </nav>
      </div>
  </header>

  <RouterView />
</template>