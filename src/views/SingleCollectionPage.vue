<template>
  <div class="h-screen w-screen">
    <div class="md:container h-full mx-auto">
      <div class=" flex w-full h-2/3 bg-gray-900 ">
        <div class="bg-red-30 w-4/6 flex-none"></div>
        <div class="bg-red-500 flex-auto space-y-4 p-4 overflow-auto ">
          <collection-card v-for="l in 14" :key="l">
            <router-link class="block" tag="a" to="#">
              <template v-slot:image>
                <div class=" flex-none w-2/5 md:w-2/5">
                  <img
                    class="w-full h-full object-cover object-center"
                    src="https://picsum.photos/900/720"
                    alt="collection image"
                  />
                </div>
              </template>
              <template v-slot:content>
                <div class="flex flex-col justify-between">
                  <h1 class="font-bold">Movie Name</h1>
                  <p class="mb-4 font-sans text-gray-500">2019</p>
                  <p>3k like . <span>24 days ago</span></p>
                </div>
              </template>
            </router-link>
          </collection-card>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CollectionCard from "../components/CollectionCard.vue";
export default {
  components: {
    CollectionCard,
  },
};
</script>

<style></style>
