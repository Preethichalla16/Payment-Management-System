<template>
  <div class="payment-detail-card" v-if="payment">
    <h2>Payment Details</h2>
    <div class="detail-row">
      <span class="label">Payment ID:</span>
      <span>{{ payment.id }}</span>
    </div>
    <div class="detail-row">
      <span class="label">User:</span>
      <span>{{ userName(payment.userId) }}</span>
    </div>
    <div class="detail-row">
      <span class="label">Amount:</span>
      <span>₹{{ payment.amount.toLocaleString() }}</span>
    </div>
    <div class="detail-row">
      <span class="label">Status:</span>
      <StatusBadge :status="payment.status" />
    </div>
    <div class="detail-row">
      <span class="label">Category:</span>
      <span>{{ payment.category }}</span>
    </div>
    <div class="detail-row">
      <span class="label">Date:</span>
      <span>{{ payment.date }}</span>
    </div>
    <div class="actions">
      <router-link class="btn" to="/payments">Back to List</router-link>
      <router-link class="btn primary" :to="`/payments/${payment.id}/edit`">Edit</router-link>
    </div>
  </div>
  <div v-else>
    <p>Payment not found.</p>
    <router-link class="btn" to="/payments">Back to List</router-link>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import StatusBadge from '../components/StatusBadge.vue';

const route = useRoute();
const store = useStore();
const paymentId = Number(route.params.id);
const payment = computed(() => store.state.payments.find((p: any) => p.id === paymentId));

function userName(userId: number) {
  const user = store.state.users.find((u: any) => u.id === userId);
  return user ? user.name : 'Unknown';
}
</script>

<style scoped>
.payment-detail-card {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 10px;
  max-width: 420px;
  margin: 2rem auto;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.1rem;
  font-size: 1.08em;
}
.label {
  font-weight: 500;
  color: #232946;
}
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
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
