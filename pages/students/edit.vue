<script setup lang="ts">
definePageMeta({
  layout: 'students'
})
useHead({
  title: 'Edit Student'
})
const route = useRoute();
const studentId = route.params.id;
console.log(studentId)
</script>

<template>
  <StudentForm http-method="PUT" :student-id="studentId" />
</template>

<style scoped>

</style>