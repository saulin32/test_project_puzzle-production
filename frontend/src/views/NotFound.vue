<template>
  <div
    class="!h-screen !w-screen flex flex-col justify-center items-center bg-[#1A2238] absolute top-0 left-0 right-0 bottom-0"
  >
    <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
    <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span
          class="relative block px-8 py-3 bg-[#1A2238] border border-current"
        >
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
  </div>
</template>

<script setup>
</script>
