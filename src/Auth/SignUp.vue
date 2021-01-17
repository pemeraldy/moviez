<template>
  <div class="w-full h-screen  flex justify-center items-center">
    <div class=" flex w-3/4 h-4/5  ">
      <div class=" w-1/2 h-full bg-gray-700 p-48">
        <h1
          class="text-center text-red-200 text-2xl font-bold uppercase leading-6 tracking-wider"
        >
          Sign In
        </h1>
        <form @submit.prevent class="w-full  h-full mt-6">
          <input
            class=" w-full mb-4 rounded-md p-4"
            placeholder="Username"
            type="text"
          />
          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Email"
            type="text"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Password"
            type="text"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Comfirm password"
            type="text"
          />

          <router-link
            tag="button"
            to="/login"
            class="w-full text-center rounded-md text-red-100 font-bold uppercase bg-red-500 p-4 tracking-wide"
            type="submit"
          >
            Sign up
          </router-link>
        </form>
      </div>
      <div
        class=" w-1/2 h-full flex justify-center  text-white items-center bg-red-500"
      >
        <h1 class=" font-bold text-3xl">Image Here</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
