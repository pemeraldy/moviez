<template>
  <div>
    <h2 class=" font-bold md:mb-8 md:text-3xl">
      {{ collectionTitle }}
    </h2>
    <div
      class="flex mt-6 space-x-3 md:space-x-16 overflow-x-scroll remove-scrollbar"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";

export default {
  props: ["collectionTitle"],
  components: {},
};
</script>

<style>
.remove-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
