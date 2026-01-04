<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="py-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue';
</script>

