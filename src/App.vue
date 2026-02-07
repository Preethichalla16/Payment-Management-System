<template>
  <DashboardLayout>
    <router-view />
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from './components/DashboardLayout.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232946;
  background: #f6f8fa;
  min-height: 100vh;
}
</style>
