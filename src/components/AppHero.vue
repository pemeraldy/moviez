<template>
  <div
    class="w-full relative px-8 bg-gray-700 flex flex-col justify-center items-center h-72 md:h-96"
  >
    <div
      class="bg-no-repeat bg-cover bg-center bg-blue-100 rounded-md h-4/5 w-full relative"
      style="background-image: url(https://picsum.photos/200/300);"
    ></div>

    <!-- Searh form -->
    <div
      class="w-full relative rounded-3xl -bottom-8 overflow-hidden shadow-lg "
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
