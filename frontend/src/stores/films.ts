import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Film } from '@/types/film'

export const useFilmsStore = defineStore('films', () => {
  // const films = ref<Film[]>(
  let films = reactive<Film[]>([
    {
      id: 1,
      title: "1+1",
      yearIssue: 2011,
      rating: 8.8,
      img: new URL("../assets/icons/films/Intouchables.webp", import.meta.url).href,
    },
    {
      id: 2,
      title: "Интерстеллар",
      yearIssue: 2014,
      rating: 8.6,
      img: new URL("../assets/icons/films/Interstellar.webp", import.meta.url).href,
    },
    {
      id: 3,
      title: "Побег из Шоушенка",
      yearIssue: 1994,
      rating: 9.1,
      img: new URL("../assets/icons/films/ShawshankRedemption.webp", import.meta.url).href,
    },
    {
      id: 4,
      title: "Зеленая миля",
      yearIssue: 1999,
      rating: 9.1,
      img: new URL("../assets/icons/films/GreenMile.webp", import.meta.url).href,
    },
    {
      id: 5,
      title: "Бойцовский клуб",
      yearIssue: 1999,
      rating: 8.7,
      img: new URL("../assets/icons/films/FightClub.webp", import.meta.url).href,
    },
    {
      id: 6,
      title: "Остров проклятых",
      yearIssue: 2009,
      rating: 8.5,
      img: new URL("../assets/icons/films/ShutterIsland.webp", import.meta.url).href,
    },
    {
      id: 7,
      title: "Форрест Гамп",
      yearIssue: 1994,
      rating: 8.9,
      img: new URL("../assets/icons/films/ForrestGump.webp", import.meta.url).href,
    },
    {
      id: 8,
      title: "Властелин колец: Возвращение короля",
      yearIssue: 2003,
      rating: 8.7,
      img: new URL("../assets/icons/films/TheLordRings.webp", import.meta.url).href,
    },
    {
      id: 9,
      title: "Леон",
      yearIssue: 1994,
      rating: 8.7,
      img: new URL("../assets/icons/films/Leon.webp", import.meta.url).href,
    },
    {
      id: 10,
      title: "Унесённые призраками",
      yearIssue: 2001,
      rating: 8.5,
      img: new URL("../assets/icons/films/SenChihiro.webp", import.meta.url).href,
    },
  ])




  // function increment() {
  //   count.value++
  // }

  return { films }
})
