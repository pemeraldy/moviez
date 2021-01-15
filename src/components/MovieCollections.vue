<template>
  <div class="px-4 mt-16 md:mt-0 ">
    <h2 class="text-white font-bold leading-5 md:mb-4 md:text-3xl">
      Popular Collections
    </h2>

    <div class="mt-2 flex space-x-3 overflow-x-scroll ">
      <div
        v-for="n in 7"
        :key="n"
        class=" w-1/3 h-52 md:h-96 flex-shrink-0 flex-grow-0 "
      >
        <div
          class="w-full h-4/6 md:h-80 bg-blue-300 rounded-md overflow-hidden"
        >
          <img
            class="w-full"
            src="https://picsum.photos/500/600"
            alt="poster"
          />
        </div>
        <div>
          <p class="font-bold text-gray-300">Family collection</p>
          <p class=" truncate text-gray-200">
            Cool movies for the whole house without leaving any one out
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
