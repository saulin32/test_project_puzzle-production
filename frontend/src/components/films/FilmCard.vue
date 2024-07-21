<template>
    <div class="w-full flex flex-col">
        <RouterLink :to="{ name: 'filmCard', params: { id: '1' } }"
            class="hover:scale-105 transition duration-300 ease-in-out relative">
            <img :src="film.img" class="w-full h-full " />
            <div class="absolute inset-0 flex justify-end">
                <p
                    class="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd25e]  to-[#b59646] text-5xl font-bold ">
                    {{ film.rating }}</p>
            </div>
        </RouterLink :to="{name:''}">

        <b class="text-center">{{ film.title }} ({{ film.yearIssue }})</b>
    </div>
</template>

<script setup lang="ts">
import type { Film } from '@/types/Film';
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';

let props = defineProps({
    film: {
        type: Object as PropType<Film>,
        required: true

    }
})
</script>