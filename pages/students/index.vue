<script setup lang="ts">
definePageMeta({
  layout: 'students'
})
useHead({
  title: 'Students'
})

const router = useRouter();
const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;

const students = ref<Student[]>();

const { data, error, pending, refresh } = await useLazyFetch<Student[]>(`${apiBaseUrl}/students`);
students.value = data.value!;
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-skeleton-loader
              :loading="pending"
              type="table-tbody"
          >
            <v-table
                class="w-100"
                fixed-header
                height="100%"
                density="comfortable"
                hover
            >
              <thead>
              <tr>
                <th class="text-start">
                  #
                </th>
                <th class="text-start">
                  Name
                </th>
                <th class="text-start">
                  Email
                </th>
                <th class="text-start">
                  Phone number
                </th>
                <th class="text-start">
                  Course
                </th>
                <th class="text-start">
                  Actions
                </th>
              </tr>
              </thead>

              <tbody>
              <tr
                  v-for="student in students"
                  :key="student.id"
              >
                <td>{{ student.id }}</td>
                <td>{{ student.firstName }} {{ student.lastName }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phoneNumber }}</td>
                <td>{{ student.course }}</td>
                <td>
                  <v-btn
                      class="me-4"
                      density="comfortable"
                      color="info"
                      min-width="90"
                  >edit</v-btn>
                  <v-btn
                      min-width="90"
                      density="comfortable"
                      color="error"
                  >delete</v-btn>
                </td>
              </tr>
              </tbody>
            </v-table>
          </v-skeleton-loader>
        </v-col>
        <v-col class="text-center">
          <v-btn
              to="/students/create"
              color="success"
              size="large"
              width="50%"
          >Add Student</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>