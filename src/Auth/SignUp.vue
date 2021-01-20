<template>
  <div class="w-full h-screen  md:flex justify-center items-center">
    <div class=" flex md:w-3/4 h-4/5  ">
      <div class=" w-full md:w-1/2 h-full bg-gray-700 p-4 md:p-24">
        <h1
          class="text-center text-red-200 text-2xl font-bold uppercase leading-6 tracking-wider"
        >
          Sign Up
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
            v-model="userData.email"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Password"
            type="text"
            v-model="userData.password"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Comfirm password"
            type="text"
          />

          <button
            @click="signUp"
            type="submit"
            class="w-full text-center rounded-md text-red-100 font-bold uppercase bg-red-500 p-4 tracking-wide"
          >
            Sign up
          </button>
        </form>
      </div>
      <div
        class=" w-1/2 h-full justify-center hidden md:flex  text-white items-center bg-red-500"
      >
        <h1 class=" font-bold text-3xl">Image Here</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import firebase from "firebase";
import firebaseServices from "../firebase";

export default {
  setup() {
    const userData = ref({
      email: "",
      password: "",
    });
    const signUp = async () => {
      console.log("clicked");
      const { email, password } = userData.value;
      try {
        await firebaseServices.auth.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(": user created successfuly !!!");
      } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage, errorCode);
      }
    };

    return {
      userData,
      signUp,
    };
  },
};
</script>

<style></style>
