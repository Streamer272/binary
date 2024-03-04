<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-900">
    <div class="flex items-center justify-center flex-col gap-y-2">
      <input
        v-if="forward"
        v-model="number"
        type="number"
        placeholder="Number..."
        class="rounded-full py-2 px-4 bg-transparent border border-emerald-100 text-emerald-100 focus:outline-none"
      />

      <Number v-if="forward" :number="number" :options="options" class="mt-2" />

      <div v-if="!forward" class="flex flex-row-reverse gap-x-2 h-[2.375rem]">
        <div
          v-for="i in 24 / +spacing"
          class="flex flex-row-reverse items-end gap-x-1 border-b-[0.375rem] border-b-emerald-100 border-solid w-fit rounded-md"
        >
          <button
            v-for="j in +spacing"
            @click="setBit(i, j)"
            :data-bit="(number & (2 ** (i * 4 + j))).toString()"
            :class="`w-2 ${getBit(i, j) ? 'h-8' : 'h-3'} bg-emerald-100 rounded-t-full`"
          />
        </div>
      </div>

      <p v-if="!forward" class="text-emerald-100 text-lg font-semibold">
        {{ number }}
      </p>

      <Settings>
        <button
          @click="swap"
          class="text-emerald-100 border border-emerald-100 rounded-full px-4 py-2"
        >
          Swap
        </button>
      </Settings>
    </div>
  </div>
</template>

<script setup lang="ts">
import Number from "../components/Number.vue";
import { options, spacing } from "../composables/options.ts";
import { ref } from "vue";
import Settings from "../components/Settings.vue";

const number = ref(0);
const forward = ref(true);

function getBit(i: number, j: number) {
  return number.value & (2 ** ((i - 1) * 4 + j - 1));
}

function setBit(i: number, j: number) {
  number.value ^= 2 ** ((i - 1) * 4 + j - 1);
}

function swap() {
  forward.value = !forward.value;
}
</script>
