<template>
  <div class="flex w-full items-center justify-between mt-4">
    <button @click="() => (openSettings = !openSettings)" class="ml-4">
      <img
        :data-open="openSettings"
        src="/chevron.svg"
        alt="Chevron"
        class="data-[open=true]:rotate-180"
      />
    </button>

    <slot />
  </div>

  <div v-if="openSettings" class="flex gap-x-2 mt-4">
    <label for="spacing" class="text-emerald-100">Spacing:</label>

    <select
      v-model="stringSpacing"
      name="spacing"
      id="spacing"
      class="text-emerald-100 bg-transparent"
    >
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4" selected>4</option>
    </select>
  </div>

  <div v-if="openSettings" class="flex gap-x-2">
    <input v-model="fill" type="checkbox" id="fill" name="fill" checked />
    <label for="fill" class="text-emerald-100">Fill</label>
  </div>

  <router-link
    v-if="openSettings && route.fullPath === '/'"
    to="/playground"
    class="text-emerald-100 underline"
  >
    Open playground
  </router-link>
  <router-link
    v-else-if="openSettings"
    to="/"
    class="text-emerald-100 underline"
  >
    Open home
  </router-link>
</template>

<script setup lang="ts">
import { fill, openSettings, stringSpacing } from "../composables/options.ts";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
