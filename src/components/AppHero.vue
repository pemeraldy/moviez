<template>
  <div
    class="w-screen relative px-2 md:px-0 flex flex-col justify-center items-center h-96  md:h-100 mb-0 md:mb-0 "
  >
    <div
      class="w-full h-full z-10 absolute inset-0 bg-no-repeat bg-cover"
      :style="
        `background-image: url(${url}); background-color:#1f1f1f9e; background-blend-mode:multiply`
      "
    ></div>
    <!-- Searh form -->

    <slot></slot>
  </div>
</template>

<script>
// import SearchForm from "./SearchForm";
export default {
  props: ["url"],
  components: {
    // SearchForm,
  },
};
</script>

<style></style>
