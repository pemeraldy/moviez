<template>
  <div class=" w-screen md:mt-14 ">
    <div class="md:container h-full mx-auto">
      <div
        class=" flex flex-col md:flex-row w-full md:h-100 bg-gray-900 md:rounded-t-lg "
      >
        <div class=" w-4/6 h-72 flex-none p-2">
          <h1 class="md:hidden text-xl text-gray-400 font-bold">
            Name Of Collection - Selected Movie in here
          </h1>
        </div>
        <div class="bg-red-500 flex-auto space-y-4 p-4 overflow-auto ">
          <h1 class=" hidde md:bg-block text-2xl text-gray-200 font-bold">
            Name Of Collection <span class=" text-xs"> . 24 days ago</span>
          </h1>
          <div class="hidde md:block">
            <collection-card v-for="l in 14" :key="l">
              <!-- <router-link class="block" tag="div" to="#"> -->
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
                  <h1 class="font-bold">Movie Name asknclknalcnkas</h1>
                  <p class="mb-4 font-sans text-gray-400">2019</p>
                  <p>3k like . <span>24 days ago</span></p>
                </div>
              </template>
              <!-- </router-link> -->
            </collection-card>
          </div>
        </div>
      </div>
      <div class="p-4">
        <div>
          <h1 class="font-bold text-3xl text-gray-700">
            The Name of Selected Movie
          </h1>
          <p class="mt-4 font-medium">3k like . Released <span>2019</span></p>
          <p></p>
        </div>

        <div class="mt-24">
          <h1 class="font-bold text-2xl text-gray-700">
            Casts
          </h1>
          <div class="flex cursor-pointer mt-3 space-x-2">
            <img
              v-for="i in 3"
              :key="i"
              class="w-24 h-24 object-cover object-center rounded shadow-sm"
              src="https://picsum.photos/800/720"
              alt="collection image"
            />
          </div>
        </div>
      </div>
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
