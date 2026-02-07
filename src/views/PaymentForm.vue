<template>
  <div class="form-card">
    <h2>{{ isEdit ? 'Edit Payment' : 'Add Payment' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="user">User</label>
        <select v-model="form.userId" id="user" required :disabled="isEdit">
          <option v-for="user in store.state.users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input v-model.number="form.amount" id="amount" type="number" min="1" required />
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="form.status" id="status" required>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="form.category" id="category" required>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>
      <div class="form-actions">
        <button class="btn primary" type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        <router-link class="btn" to="/payments">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();
const isEdit = computed(() => !!route.params.id);

const form = ref({
  userId: store.state.users[0]?.id || 1,
  amount: 1,
  status: 'Pending',
  category: 'Card',
});

if (isEdit.value) {
  const payment = store.state.payments.find((p: any) => p.id === Number(route.params.id));
  if (payment) Object.assign(form.value, payment);
}

function handleSubmit() {
  // Manual validation for unit tests (since native validation is not triggered)
  if (!form.value.userId || !form.value.amount || form.value.amount < 1 || !form.value.status || !form.value.category) {
    return;
  }
  if (isEdit.value) {
    // Update payment
    const idx = store.state.payments.findIndex((p: any) => p.id === Number(route.params.id));
    if (idx !== -1) {
      store.commit('updatePayment', {
        ...store.state.payments[idx],
        ...form.value,
        status: form.value.status as 'Pending' | 'Completed' | 'Failed',
        category: form.value.category as 'Card' | 'UPI' | 'Bank Transfer',
      });
    }
    router.push('/payments');
  } else {
    // Create payment
    const maxId = store.state.payments.reduce((max: number, p: any) => Math.max(max, p.id), 0);
    store.commit('addPayment', {
      id: maxId + 1,
      ...form.value,
      status: form.value.status as 'Pending' | 'Completed' | 'Failed',
      category: form.value.category as 'Card' | 'UPI' | 'Bank Transfer',
      date: new Date().toISOString().slice(0, 10),
    });
    // Reset form fields to initial values (as strings for test compatibility)
    form.value.userId = store.state.users[0]?.id || 1;
    form.value.amount = 1;
    form.value.status = 'Pending';
    form.value.category = 'Card';
  }
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
