<template>
  <app-hero />
  <!-- App contents -->
  <div class="container mx-auto mt-6 mb-4">
    <div class="  p-3.5 md:w-3/4 mx-auto">
      <collection-card class="mb-4" v-for="i in 6" :key="i">
        <template v-slot:image>
          <div class=" flex-none w-2/5 md:w-1/4">
            <img
              class="w-full h-full object-cover object-center"
              src="https://picsum.photos/1200/720"
              alt="collection image"
            />
          </div>
        </template>
        <template v-slot:content>
          <h3 class=" font-bold">Name Of COllection</h3>
          <p class="truncate md:whitespace-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            dolorum mollitia, provident, ut assumenda minima ullam blanditiis
            nemo
          </p>
          <div>
            <h4 class="mt-2 text-xs text-gray-500 font-bold">
              Movies in collection...
              <a href="#" class=" text-blue-500">more</a>
            </h4>
            <div class="flex cursor-pointer mt-3 space-x-2">
              <img
                v-for="i in 3"
                :key="i"
                class="w-8 h-8 object-cover object-center rounded shadow-sm"
                src="https://picsum.photos/800/720"
                alt="collection image"
              />
            </div>
          </div>
        </template>
        <template v-slot:share>
          <div class=" mt-4 ">
            <likes-and-share />
          </div>
        </template>
      </collection-card>
    </div>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import CollectionCard from "@/components/CollectionCard";
import LikesAndShare from "@/components/LikesAndShare.vue";

export default {
  name: "collection",
  components: {
    AppHero,
    CollectionCard,
    LikesAndShare,
  },
  data() {
    return {
      coll: 5,
    };
  },
};
</script>
