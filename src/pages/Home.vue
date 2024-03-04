<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-900">
    <div class="flex items-center justify-center flex-col gap-y-2 w-72">
      <div class="flex gap-x-2">
        <button v-if="level > 0" @click="changeLevel(-1)">
          <img src="/chevron.svg" alt="Arrow" class="rotate-90" />
        </button>

        <p class="text-emerald-100 text-xl font-bold">
          {{ levels[level].name }}
        </p>

        <button v-if="level < levels.length - 1" @click="changeLevel(+1)">
          <img src="/chevron.svg" alt="Arrow" class="-rotate-90" />
        </button>
      </div>

      <div v-if="problem" class="flex">
        <div class="flex items-end justify-center flex-col h-full gap-y-2 p-2">
          <Number :number="problem.a" :options="options" class="mx-2" />
          <Number
            :number="problem.b"
            :options="{
              ...options,
              prefix: problem.operator,
            }"
            class="mx-2"
          />

          <div class="w-full h-px bg-emerald-100" />

          <Number
            :data-shown="shown"
            :number="problem.answer"
            :options="options"
            class="mx-2 data-[shown=false]:opacity-0"
          />
        </div>
      </div>

      <Settings>
        <button
          v-if="shown"
          @click="next"
          class="text-emerald-100 border border-emerald-100 rounded-full px-4 py-1"
        >
          Next
        </button>
        <button
          v-else
          @click="show"
          class="text-emerald-100 border border-emerald-100 rounded-full px-4 py-1"
        >
          Show
        </button>
      </Settings>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { levels, Problem } from "../composables/levels.ts";
import Number from "../components/Number.vue";
import { options } from "../composables/options.ts";
import Settings from "../components/Settings.vue";

const level = ref(0);
const problem = ref<Problem | undefined>();
const shown = ref(false);

function next() {
  problem.value = levels[level.value].generate();
  shown.value = false;
}

function show() {
  shown.value = true;
}

function changeLevel(by: number) {
  level.value += by;
  next();
}

onMounted(next);
</script>
