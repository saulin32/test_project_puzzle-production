<template>
    <div class="bg-[#141414] h-20 text-gray-400 flex gap-3 items-center px-32">
        <RouterLink :to="{ name: 'films' }"
            class="h-full flex items-center hover:text-white transition duration-300 ease-in-out gap-2">
            <Icon name="film"/>
            <p>Список фильмов</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Icon from '../UI/Icon.vue'
</script>