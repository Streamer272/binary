<template>
  <div class="flex gap-x-2 items-end justify-end w-fit h-[2.375rem]">
    <p v-if="coefficient === -1" class="text-emerald-100 text-3xl">-</p>
    <p v-if="options.prefix" class="text-emerald-100 text-3xl">
      {{ options.prefix }}
    </p>

    <Group v-for="group in binary" :group="group" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Group from "./Group.vue";

interface Options {
  spacing: number | undefined;
  fill: boolean | undefined;
  prefix: string | undefined;
}

const props = defineProps<{
  number: number;
  options: Options;
}>();

const coefficient = computed(() => {
  return Math.abs(props.number) / props.number; // 1 or -1 based on the number
});
const binary = computed(() => {
  const string = Number(Math.abs(props.number)).toString(2);
  const spacing = props.options.spacing || 4;
  const fill = props.options.fill ?? true;

  const result: string[][] = [];
  let chunk: string[] = [];

  for (let i = 0; i < string.length; i++) {
    if (i % spacing === 0 && i !== 0) {
      result.push(chunk.reverse());
      chunk = [];
    }

    chunk.push(string[string.length - i - 1]);
  }

  if (chunk.length !== 0) {
    if (fill) {
      while (chunk.length !== spacing) {
        chunk.push("0");
      }
    }

    result.push(chunk.reverse());
  }

  return result.reverse();
});
</script>
