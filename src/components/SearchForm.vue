<template>
  <form class="w-full md:h-14 flex justify-between" action="">
    <input
      class=" block px-4 py-2.5 focus:outline-none text-sm flex-1 h-full"
      placeholder="Search movie Collection, Movies, Tv...  "
      type="text"
      v-model="searchTerm"
    />

    <button
      class=" md:w-24  p-2 right-0 outline-none focus:outline-none w-16 h-full bg-gray-600 text-white"
    >
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let searchTerm = ref("");

    return {
      searchTerm,
    };
  },
};
</script>

<style></style>
