<template>
  <div v-if="bit === '1'" class="w-2 h-8 bg-emerald-100 rounded-t-full" />
  <div v-else-if="bit === '0'" class="w-2 h-3 bg-emerald-100 rounded-t-full" />
</template>

<script setup lang="ts">
defineProps<{
  bit: string;
}>();
</script>
