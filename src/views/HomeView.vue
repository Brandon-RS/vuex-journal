<template>
  <div class="home">
    <h1>HomeView</h1>

    <button class="btn btn-primary" @click="goToDaybook">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
