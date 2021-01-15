<template>
  <div>
    <app-header />
    <app-hero />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppHero from "@/components/AppHero";
export default {
  name: "App",
  components: {
    AppHeader,
    AppHero,
  },
};
</script>

<style>
@import "assets/styles/tailwind.css";
</style>
