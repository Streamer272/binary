<template>
  <div
    class="flex items-end gap-x-1 border-b-[0.375rem] border-b-emerald-100 border-solid w-fit rounded-md"
  >
    <Bit v-for="bit in group" :bit="bit" />
  </div>
</template>

<script setup lang="ts">
import Bit from "./Bit.vue";

defineProps<{
  group: string[];
}>();
</script>
