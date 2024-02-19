<script setup lang="ts">
definePageMeta({
  layout: 'students'
})
useHead({
  title: 'Students'
})
const config = useRuntimeConfig();
const { data: students } = await useFetch(`${config.public.apiBaseUrl}/students`);
</script>

<template>
  <div>
    <v-table
        fixed-header
        height="300px"
        density="comfortable"
    >
      <thead>
      <tr>
        <th class="text-left">
          #
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Phone number
        </th>
        <th class="text-left">
          Course
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="student in students"
          :key="students.id"
      >
        <td>{{ student['id'] }}</td>
        <td>{{ student['first_name'] }} {{ student['last_name'] }}</td>
        <td>{{ student['email'] }}</td>
        <td>{{ student['phone_number'] }}</td>
        <td>{{ student['course'] }}</td>
      </tr>
      </tbody>
    </v-table>
    <v-btn
        to="/students/create"
        variant="flat"
        block
    >Add Student</v-btn>
  </div>
</template>

<style scoped>

</style>