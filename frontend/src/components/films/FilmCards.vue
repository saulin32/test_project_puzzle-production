<template>
  <div class="grid grid-cols-4 gap-12">
    <FilmCard v-for="film in films" :film="film" :key="film.id" />
  </div>
</template>

<script setup lang="ts">
import FilmCard from "./FilmCard.vue";
import { computed } from "vue";
import { useFilmsStore } from "../../stores/films";

const store = useFilmsStore()

const films = computed(()=>store.films)
</script>