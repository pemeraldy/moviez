<template>
  <div class=" bg-blue-50 min-h-screen overflow-x-hidden text-gray-900">
    <!-- navigation -->
    <app-header />
    <router-view class="flex-1" />

    <Footer class="self-end" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
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
