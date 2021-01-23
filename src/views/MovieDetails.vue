<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <app-hero url="https://picsum.photos/1200/720">
    <div class=" z-10">
      <h2 class="text-gray-50 font-semibold hidden mb-5 md:hidden  text-2xl ">
        The Name of Movie
      </h2>
    </div>
    <!-- <div
      class="w-full md:w-2/5 z-20 rounded-3xl md:-bottom-0 md:-top-52 overflow-hidden shadow-lg "
    >
      
      
    </div> -->
  </app-hero>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row  w-full  bg-yelow-500 pb-10 ">
      <div class=" w-full md:w-1/3 flex-none px-3 h-40 md:h-auto   md:pl-10  ">
        <div
          class=" h-72 md:h-99 rounded-md shadow-2xl relative -top-36 md:-top-72 z-50 overflow-hidden "
        >
          <img
            class=" object-cover w-full h-full object-center "
            src="https://i.picsum.photos/id/10/1200/720.jpg?hmac=5O3xfmBWFlHBcYsa5EODSTXaSWnCCauqZQSO4fEWTuQ"
            alt=" movie cover"
          />
        </div>
      </div>
      <div class=" flex-auto px-5 md:px-24 pt-10">
        <h2 class="text-gray-700 font-bold mb-5  text-2xl ">
          The Name of Movie
        </h2>
        <div class=" flex flex-col md:flex-row md:justify-between space-x-3">
          <div class="flex space-x-3 mb-3 md:mb-0">
            <p class=" font-medium">112min</p>
            <p class=" font-medium">Action, drama,</p>
          </div>
          <div class="flex space-x-3">
            <likes-and-share />
            <svg
              class="w-4 h-4 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="w-4 h-4 md:w-6 md:h-6 text-gray-600 cursor-pointer"
                fill="currentColor"
                clip-rule="evenodd"
                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div class="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quibusdam accusantium nemo incidunt quia unde exercitationem
            obcaecati corporis aliquid voluptatem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Neque explicabo iste perferendis nulla
            placeat aperiam aliquid harum cupiditate odit nemo.
          </p>
        </div>
        <div class="w-full flex mt-5  justify-between items-center">
          <div class="flex justify-end space-x-5 items-end ">
            <div
              class=" bg-yellow-400 text-white flex justify-center items-center rounded-full md:w-8 md:h-8"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
            <h1 class=" font-bold ml-4  text-md md:text-3xl text-gray-600">
              7.1
            </h1>
          </div>
          <div class="text-gray-400 hidden md:inline-block text-sm md:text-xl ">
            2,390485,34 reviewed
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import LikesAndShare from "../components/LikesAndShare.vue";

// import SearchForm from "@/components/SearchForm";
export default {
  components: { AppHero, LikesAndShare },
};
</script>

<style></style>
