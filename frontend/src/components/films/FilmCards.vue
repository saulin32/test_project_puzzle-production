<template>
    <div class="grid grid-cols-4 gap-12">
        <FilmCard v-for="film in films" :film />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FilmCard from './FilmCard.vue'
import type { Film } from '@/types/Film';

let films = reactive<Film[]>([
    {
        title: "1+1",
        yearIssue: 2011,
        rating: 8.8,
        img: new URL("../../assets/icons/films/Intouchables.webp", import.meta.url).href,
    },
    {
        title: "Интерстеллар",
        yearIssue: 2014,
        rating: 8.6,
        img: new URL("../../assets/icons/films/Interstellar.webp", import.meta.url).href,
    },
    {
        title: "Побег из Шоушенка",
        yearIssue: 1994,
        rating: 9.1,
        img: new URL("../../assets/icons/films/ShawshankRedemption.webp", import.meta.url).href,
    },
    {
        title: "Зеленая миля",
        yearIssue: 1999,
        rating: 9.1,
        img: new URL("../../assets/icons/films/GreenMile.webp", import.meta.url).href,
    },
    {
        title: "Бойцовский клуб",
        yearIssue: 1999,
        rating: 8.7,
        img: new URL("../../assets/icons/films/FightClub.webp", import.meta.url).href,
    },
    {
        title: "Остров проклятых",
        yearIssue: 2009,
        rating: 8.5,
        img: new URL("../../assets/icons/films/ShutterIsland.webp", import.meta.url).href,
    },
    {
        title: "Форрест Гамп",
        yearIssue: 1994,
        rating: 8.9,
        img: new URL("../../assets/icons/films/ForrestGump.webp", import.meta.url).href,
    },
    {
        title: "Властелин колец: Возвращение короля",
        yearIssue: 2003,
        rating: 8.7,
        img: new URL("../../assets/icons/films/TheLordRings.webp", import.meta.url).href,
    },
    {
        title: "Леон",
        yearIssue: 1994,
        rating: 8.7,
        img: new URL("../../assets/icons/films/Leon.webp", import.meta.url).href,
    },
    {
        title: "Унесённые призраками",
        yearIssue: 2001,
        rating: 8.5,
        img: new URL("../../assets/icons/films/SenChihiro.webp", import.meta.url).href,
    },
])
</script>