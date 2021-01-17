<template>
  <div class="px-4 mt-16 mb-10 md:mt-0">
    <h2 class="text-gray-200 font-normal md:mb-8 md:text-3xl">
      {{ collectionTitle }}
    </h2>
    <div
      class="mt-2 p-4 flex space-x-3 md:space-x-6 overflow-x-scroll remove-scrollbar "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["collectionTitle"],
  setup(props) {
    console.log(props);
  },
};
</script>

<style>
.remove-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
