<template>
  <div class="form-card">
    <h2>User Details</h2>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
      <p><strong>Status:</strong> {{ user.status }}</p>
      <router-link class="btn primary" :to="`/users/${user.id}/edit`">Edit User</router-link>
      <router-link class="btn" to="/users">Back to Users</router-link>
    </div>
    <div v-else>
      <p>User not found.</p>
      <router-link class="btn" to="/users">Back to Users</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const userId = Number(route.params.id);
const store = useStore();
const user = computed(() => store.state.users.find((u: any) => u.id === userId));
</script>

<style scoped>
.form-card {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 10px;
  max-width: 420px;
  margin: 2rem auto;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.btn.primary {
  background: #232946;
  color: #fff;
  border: none;
  padding: 0.6em 1.3em;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  margin-right: 1rem;
}
.btn.primary:hover {
  background: #1a2236;
}
.btn {
  background: #f0f1f6;
  color: #232946;
  border: none;
  padding: 0.6em 1.3em;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}
.btn:hover {
  background: #e6f7ff;
}
</style>
