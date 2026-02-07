<template>
  <div>
    <div class="view-header">
      <h2>Users</h2>
      <router-link class="btn primary" to="/users/new">+ Add User</router-link>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td><StatusBadge :status="user.status" /></td>
          <td>
            <button class="btn small" @click="goToUser(user.id)">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import StatusBadge from '../components/StatusBadge.vue';

const store = useStore();
const users = computed(() => store.state.users);

import { useRouter } from 'vue-router';
const router = useRouter();
function goToUser(id: number) {
  router.push(`/users/${id}`);
}
</script>

<style scoped>
.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.data-table th, .data-table td {
  padding: 0.9em 1.2em;
  text-align: left;
}
.data-table th {
  background: #f0f1f6;
  font-weight: 600;
}
.data-table tr:nth-child(even) {
  background: #f9fafb;
}
.data-table tr:hover {
  background: #e6f7ff;
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
}
.btn.primary:hover {
  background: #1a2236;
}
  .btn.small {
    background: #f0f1f6;
    color: #232946;
    border: none;
    padding: 0.4em 1em;
    border-radius: 5px;
    font-size: 0.95em;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;
  }
  .btn.small:hover {
    background: #e6f7ff;
  }
</style>
