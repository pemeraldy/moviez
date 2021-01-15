<template>
  <header
    class="p-4 flex flex-wrap md:flex-nowrap shadow-xl text-gray-300 sticky bg-gray-800 top-0"
  >
    <a href="#" class="p-2 w-24 font-bold">logo</a>

    <nav
      :class="{ hidden: !isOpen }"
      class="w-full md:flex md:w-auto flex space-y-6 md:space-y-0 md:space-x-6 flex-col md:flex-row mt-4 md:mt-0 order-1 md:order-none md:justify-end md:items-center md:ml-auto"
    >
      <a href="#" class="w-full md:w-auto rounded-md text-center"
        >Collections</a
      >
      <a href="#" class="w-full md:w-auto rounded-md text-center">Movies</a>

      <a href="#" class="w-full md:w-auto rounded-md text-center">Login</a>
      <a href="#" v-if="true" class=" w-full md:w-auto rounded-md text-center"
        >Logout</a
      >
    </nav>
    <div class="ml-auto flex items-center md:ml-16">
      <div
        class="w-8 h-8 rounded-full border border-gray-400 overflow-hidden mt-1 text-center "
      >
        <img
          src="https://avatars1.githubusercontent.com/u/32315813?s=460&u=3c82c1920bdb4c4ea6fd108004710fc8973345ec&v=4"
          class="max-w-full"
        />
      </div>
      <button
        @click="toggle"
        class="dropdown-caret ml-2 inline-block md:hidden"
      ></button>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      toggle,
    };
  },
};
</script>

<style scoped>
.dropdown-caret {
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
}
</style>
