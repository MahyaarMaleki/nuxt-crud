<script setup lang="ts">
const props = defineProps<{
  httpMethod: 'POST' | 'PUT';
  studentId?: number | string;
}>()

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;
const isForCreating = computed(() => props.httpMethod === 'POST');
const isLoading = ref(false)

const student: Student = reactive({
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  course: ''
})
const rules = {
  required: (value: string) => !!value || 'Required.',
  counter: (value: string) => value.length <= 100 || 'Max 100 characters',
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || (!isForCreating.value && value.length === 0) || 'Invalid e-mail.'
  },
}

onBeforeMount(async () => {
  if(!isForCreating.value) {
    const { data: fetchedStudent } = await useFetch<Student>(`${apiBaseUrl}/students/${props.studentId}`, {
      onResponse(response) {

      }
    });
    if(fetchedStudent.value) {
      student.firstName = fetchedStudent.value.firstName;
      student.lastName = fetchedStudent.value.lastName;
      student.email = fetchedStudent.value.email;
      student.phoneNumber = fetchedStudent.value.phoneNumber;
      student.course = fetchedStudent.value.course;
    }
  }
})

const submitForm = async () => {
  isLoading.value = true;
  const requestUrl = isForCreating.value ? `${apiBaseUrl}/students` : `${apiBaseUrl}/students/${props.studentId}`;
  await $fetch(requestUrl, {
    method: props.httpMethod,
    body: {
      first_name: student.firstName,
      last_name: student.lastName,
      email: student.email,
      phone_number: student.phoneNumber,
      course: student.course,
    },
    onResponse({ request, response, options }) {
      isLoading.value = false;
      if(isForCreating.value && response.ok) {
        student.firstName = '';
        student.lastName = '';
        student.email = '';
        student.phoneNumber = '';
        student.course = '';
      }
    },
    onResponseError() {
      isLoading.value = false;
    }
  })
};
</script>

<template>
  <v-card
      class="pa-10 pb-8"
      elevation="8"
      min-width="400"
      rounded="lg"
  >
    <v-card-title class="text-center text-h6 mb-6">{{ isForCreating ? 'Create Student' : 'Update Student' }}</v-card-title>
    <v-form
        @submit.prevent="submitForm"
    >
      <v-text-field
          v-model="student.firstName"
          label="First Name"
          class="mb-2"
          density="compact"
          variant="outlined"
          :rules="isForCreating ? [rules.required, rules.counter] : [rules.counter]"
          counter
          clearable
      ></v-text-field>
      <v-text-field
          v-model="student.lastName"
          label="Last Name"
          class="mb-2"
          density="compact"
          variant="outlined"
          :rules="isForCreating ? [rules.required, rules.counter] : [rules.counter]"
          counter
          clearable
      ></v-text-field>
      <v-text-field
          v-model="student.email"
          label="Email"
          class="mb-2"
          placeholder="example123@gmail.com"
          type="email"
          density="compact"
          variant="outlined"
          :rules="isForCreating ? [rules.required, rules.email] : [rules.email]"
          clearable
      ></v-text-field>
      <v-text-field
          v-model="student.phoneNumber"
          label="Phone Number"
          class="mb-2"
          density="compact"
          variant="outlined"
          :rules="isForCreating ? [rules.required] : [() => true]"
          clearable
      ></v-text-field>
      <v-text-field
          v-model="student.course"
          label="Course"
          class="mb-2"
          density="compact"
          variant="outlined"
          :rules="isForCreating ? [rules.required] : [() => true]"
          clearable
      ></v-text-field>
      <v-card-actions>
        <v-btn
            class="mt-4"
            type="submit"
            variant="elevated"
            color="success"
            size="large"
            :loading="isLoading"
            block
        >
          {{ isForCreating ? 'Add Student' : 'Edit Student' }}
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>