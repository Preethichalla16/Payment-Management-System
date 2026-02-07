<template>
  <span :class="['status-badge', status.toLowerCase()]">
    <slot>{{ status }}</slot>
  </span>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
defineProps<{
  status: string
}>()
</script>


<style scoped>
.status-badge {
  display: inline-block;
  padding: 0.25em 0.8em;
  border-radius: 12px;
  font-size: 0.95em;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
}
.status-badge.active {
  background: #2ecc40;
}
.status-badge.inactive {
  background: #b0b0b0;
}
.status-badge.pending {
  background: #ffb800;
  color: #232946;
}
.status-badge.completed {
  background: #2ecc40;
}
.status-badge.failed {
  background: #ff4d4f;
}
</style>
