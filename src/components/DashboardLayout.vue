<template>
  <div class="dashboard-layout">
    <header class="header">
      <h1>Payments Management System</h1>
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <nav>
          <ul>
            <li :class="{active: $route.name === 'users'}">
              <router-link to="/users">Users</router-link>
            </li>
            <li :class="{active: typeof $route.name === 'string' && $route.name.startsWith('payments')}">
              <router-link to="/payments">Payments</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <section class="content">
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for layout
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f6f8fa;
}
.header {
  background: #1a2236;
  color: #fff;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.main-content {
  display: flex;
  flex: 1;
}
.sidebar {
  width: 220px;
  background: #232946;
  color: #fff;
  padding: 2rem 1rem;
  min-height: 100vh;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin-bottom: 1.5rem;
}
.sidebar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.sidebar li.active a,
.sidebar a:hover {
  color: #ffb800;
}
.content {
  flex: 1;
  padding: 2rem 2.5rem;
}
</style>
