import { computed, ref } from "vue";

export const openSettings = ref(false);
export const stringSpacing = ref("4");
export const fill = ref(true);
export const spacing = computed(() => {
  return parseInt(stringSpacing.value);
});
export const options = computed(() => ({
  spacing: spacing.value,
  fill: fill.value,
  prefix: undefined,
}));
