<template>
  <div class=" bg-gray-700 min-h-screen">
    <app-header />
    <!-- App contents -->
    <div class=" w-full md:px-64">
      <app-hero />
      <movie-collections />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppHero from "@/components/AppHero";
import MovieCollections from "./components/MovieCollections.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppHero,
    MovieCollections,
  },
};
</script>

<style>
@import "assets/styles/tailwind.css";
</style>
