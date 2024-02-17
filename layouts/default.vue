<script setup lang="ts">

</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title><CustomLink class="text-default" to="/">Nuxt 3 CRUD App</CustomLink></v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>