// Chart component for dashboard
<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import { useStore } from 'vuex';

const chartCanvas = ref<HTMLCanvasElement | null>(null);
const store = useStore();

onMounted(() => {
  if (chartCanvas.value) {
    const usersCount = store.state.users.length;
    const paymentsCount = store.state.payments.length;
    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: ['Users', 'Payments'],
        datasets: [{
          label: 'Total Count',
          data: [usersCount, paymentsCount],
          backgroundColor: ['#232946', '#ffb800'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }
});
</script>

<style scoped>
canvas {
  max-width: 400px;
  margin: 2rem auto;
  display: block;
}
</style>
