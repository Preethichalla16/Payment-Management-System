<template>
  <div>
    <div class="view-header">
      <h2>Payments</h2>
      <router-link class="btn primary" to="/payments/new">+ Add Payment</router-link>
    </div>
    <div class="filters">
      <input v-model="searchId" type="text" placeholder="Search by Payment ID" />
      <select v-model="filterStatus">
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Failed">Failed</option>
      </select>
      <select v-model="filterCategory">
        <option value="">All Categories</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
        <option value="Bank Transfer">Bank Transfer</option>
      </select>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>User</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Category</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in filteredPayments" :key="payment.id">
          <td>{{ payment.id }}</td>
          <td>{{ userName(payment.userId) }}</td>
          <td>₹{{ payment.amount.toLocaleString() }}</td>
          <td><StatusBadge :status="payment.status" /></td>
          <td>{{ payment.category }}</td>
          <td>{{ payment.date }}</td>
          <td>
            <router-link :to="`/payments/${payment.id}`" class="btn small">View</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import StatusBadge from '../components/StatusBadge.vue';

const searchId = ref('');
const filterStatus = ref('');
const filterCategory = ref('');

const store = useStore();
const filteredPayments = computed(() => {
  return store.state.payments.filter((p: any) => {
    const matchesId = searchId.value === '' || p.id.toString().includes(searchId.value);
    const matchesStatus = !filterStatus.value || p.status === filterStatus.value;
    const matchesCategory = !filterCategory.value || p.category === filterCategory.value;
    return matchesId && matchesStatus && matchesCategory;
  });
});

function userName(userId: number) {
  const user = store.state.users.find((u: any) => u.id === userId);
  return user ? user.name : 'Unknown';
}
</script>

<style scoped>
.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.filters {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}
.filters input, .filters select {
  padding: 0.5em 1em;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1em;
  background: #f9fafb;
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
