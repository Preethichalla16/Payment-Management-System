<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <DashboardChart />
    <div class="dashboard-summary">
      <div class="summary-item">
        <h3>Total Users</h3>
        <p>{{ usersCount }}</p>
      </div>
      <div class="summary-item">
        <h3>Total Payments</h3>
        <p>{{ paymentsCount }}</p>
      </div>
    </div>
    <div class="dashboard-links">
      <router-link class="dashboard-card" to="/users">
        <h2>Users</h2>
        <p>View and manage users</p>
      </router-link>
      <router-link class="dashboard-card" to="/payments">
        <h2>Payments</h2>
        <p>View and manage payments</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardChart from '../components/DashboardChart.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const usersCount = computed(() => store.state.users.length);
const paymentsCount = computed(() => store.state.payments.length);
</script>

<style scoped>
/* Advanced dashboard styles */
.dashboard {
  max-width: 900px;
  margin: 2.5rem auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #f6f8fa 60%, #e6f7ff 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(35,41,70,0.12);
  position: relative;
}
.dashboard-summary {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  justify-content: center;
}
.summary-item {
  flex: 1;
  background: linear-gradient(120deg, #fff 70%, #ffecd2 100%);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(255,184,0,0.08);
  border: 1px solid #ffe0a3;
  transition: transform 0.2s, box-shadow 0.2s;
}
.summary-item:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 32px rgba(255,184,0,0.16);
}
.summary-item h3 {
  margin-bottom: 0.7rem;
  color: #232946;
  font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .summary-item p {
    font-size: 2.2rem;
    font-weight: 800;
    color: #ffb800;
    margin: 0;
    text-shadow: 0 2px 8px rgba(255,184,0,0.12);
  }
  .dashboard-links {
    display: flex;
    gap: 2.5rem;
    margin-top: 2.5rem;
    justify-content: center;
  }
  .dashboard-card {
    flex: 1;
    background: linear-gradient(120deg, #f0f1f6 70%, #d1eaff 100%);
    border-radius: 12px;
    padding: 2.2rem;
    text-align: center;
    text-decoration: none;
    color: #232946;
    box-shadow: 0 2px 12px rgba(35,41,70,0.07);
    transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
    font-size: 1.1rem;
    border: 1px solid #b6d7ff;
  }
  .dashboard-card:hover {
    background: linear-gradient(120deg, #e6f7ff 80%, #fff 100%);
    box-shadow: 0 8px 32px rgba(35,41,70,0.13);
    transform: translateY(-4px) scale(1.03);
  }
  canvas {
    max-width: 420px;
    margin: 2rem auto 1rem auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(35,41,70,0.07);
    background: #fff;
  }
  </style>
