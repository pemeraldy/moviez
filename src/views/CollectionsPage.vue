<template>
  <app-hero />
  <!-- App contents -->
  <div class="container mx-auto mt-6 mb-4">
    <div class=" w-5/6 md:w-3/4 mx-auto">
      <collection-card class="mb-4" v-for="i in 6" :key="i" />
    </div>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import CollectionCard from "@/components/CollectionCard";

export default {
  name: "collection",
  components: {
    AppHero,
    CollectionCard,
  },
  data() {
    return {
      coll: 5,
    };
  },
};
</script>
