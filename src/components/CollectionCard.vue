<template>
  <div class="flex ">
    <div class="bg-gray-50  flex rounded-md shadow-md overflow-hidden">
      <slot name="image"></slot>
      <div class=" flex-auto flex flex-col justify-between  py-2 px-4">
        <div>
          <slot name="content"></slot>
        </div>
        <slot name="share"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
