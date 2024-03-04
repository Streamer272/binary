import { computed, ref } from "vue";

export const openSettings = ref(false);
export const spacing = ref("4");
export const fill = ref(true);
export const options = computed(() => ({
  spacing: +spacing.value,
  fill: fill.value,
  prefix: undefined,
}));
