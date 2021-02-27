<template>
  <app-hero url="https://picsum.photos/1200/720">
    <div
      class="w-full md:w-2/5 z-20 rounded-3xl md:-bottom-0 md:-top-52 overflow-hidden shadow-lg "
    >
      <search-form />
    </div>
  </app-hero>
  <!-- App contents -->
  <div class="container mx-auto md:px-32 mt-20 md:min-h-screen">
    <div class="w-full bg-red-300">
      <h1 class=" text-lg font-bold mb-4">Movie Collections</h1>
      <div class="w-full flex space-x-10">
        <div>
          <div class="w-24 h-24">
            <img
              class="w-full"
              src="https://picsum.photos/1200/720"
              alt="img"
            />
          </div>
          <!-- end of image -->
          <!-- contents -->
          <div class="w-100">
            <div>Collection Title</div>
            <div>A description of the collection</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
// import CollectionList from "@/components/CollectionList.vue";
import SearchForm from "@/components/SearchForm.vue";
// import CollectionThumbnail from "@/components/CollectionThumbnail.vue";

export default {
  name: "App",
  components: {
    AppHero,
    SearchForm,
    // CollectionList,
    // CollectionThumbnail,
  },
  async mounted() {
    this.$store.dispatch("getMovieCollections");
  },
  data() {
    return {
      coll: 5,
    };
  },
};
</script>
