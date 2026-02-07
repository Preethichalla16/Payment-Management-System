<template>
  <div class="form-card">
    <h2>{{ isEdit ? 'Edit User' : 'Add User' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="form.name" id="name" type="text" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required />
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <select v-model="form.role" id="role" required>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="form.status" id="status" required>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div class="form-actions">
        <button class="btn primary" type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        <router-link class="btn" to="/users">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const isEdit = computed(() => !!route.params.id);

const form = ref({
  name: '',
  email: '',
  role: 'User',
  status: 'Active',
});

const store = useStore();
if (isEdit.value) {
  const user = store.state.users.find((u: any) => u.id === Number(route.params.id));
  if (user) Object.assign(form.value, user);
}

function handleSubmit() {
  if (isEdit.value) {
    // Update user
    const idx = store.state.users.findIndex((u: any) => u.id === Number(route.params.id));
    if (idx !== -1) {
      store.commit('updateUser', {
        ...store.state.users[idx],
        ...form.value,
        role: form.value.role as 'Admin' | 'User',
        status: form.value.status as 'Active' | 'Inactive',
      });
    }
  } else {
    // Create user
    const maxId = store.state.users.reduce((max: number, u: any) => Math.max(max, u.id), 0);
    store.commit('addUser', {
      id: maxId + 1,
      ...form.value,
      role: form.value.role as 'Admin' | 'User',
      status: form.value.status as 'Active' | 'Inactive',
    });
  }
  router.push('/users');
}
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
.form-group {
  margin-bottom: 1.3rem;
}
label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 500;
}
input, select {
  width: 100%;
  padding: 0.7em 1em;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1em;
  background: #f9fafb;
  margin-bottom: 0.2em;
}
input:focus, select:focus {
  outline: none;
  border-color: #232946;
}
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
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
