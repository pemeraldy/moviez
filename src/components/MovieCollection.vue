<template>
  <div class=" w-1/3 md:w-48 h-52 md:h-96 flex-shrink-0 flex-grow-0 ">
    <div
      class="w-full h-4/6 md:h-80 mb-3 bg-blue-300 rounded-md overflow-hidden"
    >
      <img
        class="w-full object-cover h-full object-center"
        src="https://picsum.photos/seed/picsum/600/500"
        alt="poster"
      />
    </div>
    <div>
      <p class="font-bold text-gray-300">Family collection</p>
      <p class=" truncat text-xs text-gray-200">
        Cool movies for the whole house without leaving any one out
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["collections"],
};
</script>

<style></style>
