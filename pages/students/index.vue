<script setup lang="ts">
definePageMeta({
  layout: 'students'
})
useHead({
  title: 'Students'
})
</script>

<template>
  <div>
    <h2 class="mb-6">Students page</h2>
    <v-btn
        to="/students/create"
        block
    >Add Student</v-btn>
  </div>
</template>

<style scoped>

</style>