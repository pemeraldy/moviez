<template>
  <div class=" bg-gray-700 min-h-screen overflow-x-hidden">
    <!-- navigation -->
    <app-header />
    <app-hero />
    <!-- App contents -->
    <div class="container mx-auto mt-20">
      <collections collectionTitle="Popular Collections" class="ml-8">
        <movie-collection class="w-11/12 md:w-2/6" v-for="n in 12" :key="n" />
      </collections>
      <collections collectionTitle="Popular Movies" class="ml-8 mt-16">
        <movie-collection class="w-11/12 md:w-2/6" v-for="n in 3" :key="n" />
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
