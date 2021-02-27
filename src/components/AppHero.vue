<template>
  <div
    class="w-screen relative px-2 md:px-0 flex flex-col justify-center items-center h-96  md:h-99 mb-0 md:mb-0 "
  >
    <div
      class="w-full h-full z-10 absolute inset-0 bg-no-repeat bg-cover"
      :style="
        `background-image: url(${banner});`
      "
    ></div>
  <div class="overlay absolute inset-0 z-20"/>
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
  computed:{
    banner(){
      return this.$store.getters.heroImage
    }
  }
};
</script>

<style>
.overlay{
 background: linear-gradient(0deg, rgb(239 246 255) 0%,rgb(239 246 255) 10%, transparent 100%);
}
</style>
