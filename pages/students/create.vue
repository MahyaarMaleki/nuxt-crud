<script setup lang="ts">
definePageMeta({
  layout: 'students'
})
useHead({
  title: 'Create Student'
})
const student = reactive<Student>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  course: ''
})
const addStudent = () => {
  console.log(student)
}
</script>

<template>
  <v-card
      class="pa-12 pb-8 h-75"
      elevation="8"
      min-width="448"
      rounded="lg"
  >
    <v-card-title class="text-center mb-6">New Student</v-card-title>
    <v-form
      @submit.prevent="addStudent"
    >
      <v-text-field
          v-model="student.firstName"
          label="First Name"
      ></v-text-field>
      <v-text-field
          v-model="student.lastName"
          label="Last Name"
      ></v-text-field>
      <v-text-field
          v-model="student.email"
          label="Email"
          placeholder="example123@gmail.com"
          type="email"
      ></v-text-field>
      <v-text-field
          v-model="student.phoneNumber"
          label="Phone Number"
      ></v-text-field>
      <v-text-field
          v-model="student.course"
          label="Course"
      ></v-text-field>
      <v-card-actions>
        <v-btn
            class="mt-4"
            type="submit"
            variant="elevated"
            color="success"
            size="large"
            block
        >
          Add Student
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>