<template>
  <div class="w-full h-screen  flex md:justify-center md:items-center ">
    <div class=" flex md:w-3/4 h-4/5 shadow-sm rounded-sm">
      <div class="  w-full md:w-1/2 h-full bg-gray-700 p-4 md:p-24">
        <h1
          class="text-center text-red-200 text-2xl font-bold uppercase leading-6 tracking-wider"
        >
          Sign In
        </h1>
        <form @submit.prevent class="w-full h-full mt-6">
          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Email"
            v-model="userCredentials.email"
            type="text"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Password"
            v-model="userCredentials.password"
            type="text"
          />

          <button
            :disabled="!validator.isValid"
            @click="login"
            class="disabled:opacity-50 w-full flex justify-center text-center rounded-md text-red-100 font-bold uppercase bg-red-500 p-4 tracking-wide"
            type="submit"
          >
            {{ buttonText }}
            <!-- <spinner :isLoading="spin" /> -->
          </button>

          <div class="mt-3 text-red-300 text-center" v-if="errorMessage">
            {{ errorMessage.valueOf() }}
          </div>
        </form>
      </div>
      <div
        class=" w-1/2 h-full justify-center hidden md:flex text-white items-center bg-red-500"
      >
        <h1 class=" font-bold text-3xl">Image Here</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import makeValidator, { isEmail, minLength } from "@/lib/validator";
import firebaseServices from "../firebase";
const email = {
  minLength: minLength(2),
  isEmail,
};
const password = {
  minLength: minLength(3),
};

export default {
  setup() {
    const spin = ref(false);
    const errorMessage = ref("");
    const buttonText = ref("Sign in");
    const userCredentials = ref({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const validator = makeValidator(userCredentials, {
      validations: { email, password },
    });

    const login = async () => {
      const originalBtnText = buttonText.value;
      buttonText.value = "Processing...";
      const { email, password } = userCredentials.value;
      try {
        await firebaseServices.auth.signInWithEmailAndPassword(email, password);
        console.log("User Signed In");
        buttonText.value = originalBtnText;
      } catch (error) {
        spin.value = false;
        console.log(error);
        errorMessage.value = "Bad network please try again...";
        setTimeout(() => {
          console.log(error.code, "cleaned");
          errorMessage.value = "";
        }, 2000);
      }
    };

    return {
      userCredentials,
      login,
      spin,
      errorMessage,
      validator,
      buttonText,
    };
  },
};
</script>

<style></style>
