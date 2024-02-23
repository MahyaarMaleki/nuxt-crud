<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
});
const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
  <v-container>
    <v-row
        align="center"
        no-gutters
    >
      <v-col
          cols="12"
      >
        <v-card elevation="10" >
          <div class="text-center">
            <v-card-title>{{ error.statusCode }}</v-card-title>
            <v-card-text>{{ error.message }}</v-card-text>
          </div>
          <v-card-actions>
            <v-btn
                @click="handleClearError"
                to="/"
                color="primary"
                variant="flat"
                block
            >Go back home</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>