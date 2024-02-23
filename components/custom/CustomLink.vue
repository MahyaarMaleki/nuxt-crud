<script setup lang="ts">
defineProps<{
  to: string
}>();
</script>

<template>
  <NuxtLink
      id="custom-link"
      class="text-decoration-none"
      :to="to"
      exact-active-class="text-secondary"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
#custom-link {
  color: rgb(var(--v-theme-default))
}
</style>