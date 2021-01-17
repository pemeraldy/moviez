<template>
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
</template>

<script>
import AppHero from "@/components/AppHero";
import Collections from "@/components/Collections.vue";
import MovieCollection from "@/components/MovieCollection.vue";

export default {
  name: "App",
  components: {
    AppHero,
    Collections,
    MovieCollection,
  },
  data() {
    return {
      coll: 5,
    };
  },
};
</script>
