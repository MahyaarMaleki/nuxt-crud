<script setup lang="ts">
const route = useRoute();
const currentTab = ref(null);
const hideSlider = computed(()=> {
  return route.path === '/';
})
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title><CustomLink class="text-default" to="/">Nuxt 3 CRUD App</CustomLink></v-app-bar-title>
      <v-tabs
        v-model="currentTab"
        :hide-slider="hideSlider"
      >
        <v-tab :value="1" to="/about">
          About
        </v-tab>
        <v-tab :value="2" to="/contact">
          Contact
        </v-tab>
        <v-tab :value="3" to="/students">
          Students
        </v-tab>
      </v-tabs>

    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>