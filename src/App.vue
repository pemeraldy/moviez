<template>
  <div class=" bg-gray-700 min-h-screen overflow-x-hidden">
    <!-- navigation -->
    <app-header />
    <app-hero />
    <!-- App contents -->
    <div class="container mx-auto mt-20 px-28">
      <collections collectionTitle="Popular Collections">
        <movie-collection v-for="n in 12" :key="n" />
      </collections>
      <collections collectionTitle="Popular Movies">
        <movie-collection v-for="n in 3" :key="n" />
      </collections>
    </div>

    <Footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppHero from "@/components/AppHero";
import Collections from "./components/Collections.vue";
import MovieCollection from "./components/MovieCollection.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppHero,
    Collections,
    MovieCollection,
    Footer,
  },
  data() {
    return {
      coll: 5,
    };
  },
};
</script>

<style>
@import "assets/styles/tailwind.css";
</style>
