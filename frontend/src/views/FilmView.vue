<template>
  <div class="flex font-sans ">
    <div class="flex-none w-48 relative">
      <img
        :src="film.img"
        alt="film"
        class="  w-full h-full object-cover"
      />
    </div>
    <div class="flex-auto p-6">
      <div class="flex flex-wrap mb-6">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          {{ film.title }} ({{ film.yearIssue }})
        </h1>
        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          {{ film.rating }}
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button
            class="h-10 px-6 font-semibold rounded-md bg-black text-white"
            type="submit"
          >
            Смотреть онлайн
          </button>
          <button
            class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
          >
            Добавить в избранные
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useFilmsStore } from "../stores/films";
import type { Film } from "../types/film";

const route = useRoute();

const store = useFilmsStore();

const films = computed(() => store.films);

const film = <Film>films.value.find((i) => i.id === +route.params.id);
</script>