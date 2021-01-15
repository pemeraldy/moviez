<template>
  <div
    class="w-full  relative px-4 flex flex-col justify-start items-center h-72 md:h-96 mb-0 md:mb-0 "
  >
    <div
      class="w-full relative bg-no-repeat bg-cover bg-center bg-blue-100 rounded-md h-4/5  "
      style="background-image: url(https://picsum.photos/200/300);"
    ></div>

    <!-- Searh form -->
    <div
      class="w-full md:w-4/5 relative rounded-3xl md:-bottom-0 md:-top-52 -bottom-6 overflow-hidden shadow-lg "
    >
      <search-form />
    </div>
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
export default {
  components: {
    SearchForm,
  },
};
</script>

<style></style>
