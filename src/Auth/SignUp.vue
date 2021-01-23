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
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Email"
            type="email"
            v-model="userCredentials.email"
          />
          <input
            class=" w-full mb-4 rounded-md p-4"
            placeholder="Username"
            type="text"
            v-model="userCredentials.username"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Password"
            type="password"
            v-model="userCredentials.password"
          />

          <input
            class=" w-full rounded-md p-4 mb-4"
            placeholder="Confirm Password"
            type="password"
            v-model="userCredentials.confirmed"
          />
          <button
            :disabled="!validator.isValid"
            @click="signUp"
            type="submit"
            class="disabled:opacity-50 w-full text-center rounded-md text-red-100 font-bold uppercase bg-red-500 p-4 tracking-wide"
          >
            {{ buttonText }}
          </button>
          <div class="flex">
            <button
              type="submit"
              class="w-full mt-3 text-center rounded-md text-red-100 font-bold uppercase bg-red-500 p-4 tracking-wide"
            >
              Google
            </button>
          </div>
          <debugger>
            {{ validator.errors }}
          </debugger>
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
import Debugger from "@/lib/Debugger";
import makeValidator, { isEmail, minLength } from "@/lib/validator";
const email = {
  minLength: minLength(6),
  isEmail,
};
const username = {
  minLength: minLength(6),
};
const password = {
  minLength: minLength(5),
};
export default {
  components: {
    Debugger,
  },
  setup() {
    const buttonText = ref("Sign up");
    const userCredentials = ref({
      email: "",
      username: "",
      password: "",
      confirmed: "",
    });

    const validator = makeValidator(userCredentials, {
      validations: {
        email,
        password,
        username,
        confirmed: {
          passwordConfirmed: {
            validate: (v) =>
              new RegExp(`^${userCredentials.value.password}$`).test(v),
            message: "passwords do not match",
          },
        },
      },
    });

    const signUp = async () => {
      const originalBtnText = buttonText.value;
      buttonText.value = "Processing...";
      console.log("creating account");
      const { email, password } = userCredentials.value;
      try {
        const {
          user,
        } = await firebaseServices.auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await firebaseServices.userCollections
          .doc(user.uid)
          .set(userCredentials.value);
        console.log(": user created successfuly !!!");
        buttonText.value = originalBtnText;
      } catch (error) {
        buttonText.value = originalBtnText;
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage, errorCode);
      }
    };

    return {
      buttonText,
      userCredentials,
      signUp,
      validator,
    };
  },
};
</script>

<style></style>
