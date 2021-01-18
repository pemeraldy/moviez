<template>
  <div class="flex flex-col">
    <div class="bg-red-200 flex rounded-md overflow-hidden">
      <div class=" flex-none w-2/5 md:w-1/4">
        <img
          class="w-full h-full object-cover object-center"
          src="https://picsum.photos/1200/720"
          alt="collection image"
        />
      </div>
      <div class=" flex-auto flex flex-col justify-between  p-2">
        <h3>Name Of COllection</h3>
        <p>Descripttion of collection ans so on...</p>
        <div class="flex space-x-2">
          <img
            v-for="i in 3"
            :key="i"
            class="w-8 h-8"
            src="https://picsum.photos/1200/720"
            alt="collection image"
          />
        </div>
        <div class="flex mt-2 space-x-4">
          <a class=" text-gray-600" href="#">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
              ></path>
            </svg>
          </a>

          <a class=" text-gray-600" href="#">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
              ></path>
              <path
                d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
