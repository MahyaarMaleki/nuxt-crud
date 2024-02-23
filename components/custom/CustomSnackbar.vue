<script setup lang="ts">
const text = ref('Successful!');
const snackbar = ref(false);
</script>

<template>
  <div class="text-center">
    <v-btn
        color="orange-darken-2"
        @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
        v-model="snackbar"
        color="success"
    >
      <v-icon icon="mdi-check-circle" class="me-2"/>
      {{ text }}
      <template v-slot:actions>
        <v-btn
            variant="text"
            @click="snackbar = false"
        >
          <v-icon icon="mdi-close" />
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped>

</style>