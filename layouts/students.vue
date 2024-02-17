<script setup lang="ts">
const drawer = ref(false);

</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title><CustomLink class="text-default" to="/">Nuxt 3 CRUD App</CustomLink></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        location="start"
        temporary
    >
      <v-list>
        <v-list-item title="About" to="/about"></v-list-item>
        <v-list-item title="Contact" to="/contact"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>