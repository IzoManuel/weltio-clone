<template>
  <AuthLayout>
    <template #authForm>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Sign up
          </h1>

          <div
            class="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-1 text-xs rounded relative"
            role="alert"
            v-if="validationError?.combError"
          >
            <span class="block sm:inline">{{ validationError.combError[0] }}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3"> </span>
          </div>
          <form class="space-y-4 md:space-y-6">
            <form-input
              :id="'email'"
              :label="'Email'"
              :placeholder="'doe@gmail.com'"
              :type="'email'"
              v-model="credentials.email"
              :error-message="validationError?.email ? validationError.email[0] : ''"
            >
            </form-input>
            <form-input
              :id="'password'"
              :label="'Password'"
              :placeholder="'*******'"
              :type="'password'"
              v-model="credentials.password"
              :error-message="validationError?.password ? validationError.password[0] : ''"
            >
            </form-input>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="remember"
                  class="font-medium text-gray-900 dark:text-white"
                  >Remember me</label
                >
              </div>
              <a
                class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
                >Lost Password?</a
              >
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start"></div>
            </div>
            <button
              @click="register"
              type="button"
              :disabled="loader"
              :class="{ 'cursor-wait': loader }"
              class="flex items-center place-content-center w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <spinner
                :height="'h-5'"
                :width="'w-5'"
                :fill="'fill-white'"
                v-if="loader"
              ></spinner>
              Sign up
            </button>
            <p class="text-sm font-light text-gray-500">
              Already have an account?
              <router-link
                class="font-medium text-primary-600 hover:underline"
                :to="{ name: 'login' }"
              >
                Sign in</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>
  
  <script setup>
import { ref } from 'vue'
import axios from '../../../common/helpers/axios/axios.js'
import Spinner from "../../../../assets/icons/Spinner.vue";
import AuthLayout from "../components/AuthLayout.vue";
import FormInput from "../../../components/form-input.vue";

// reactive state
const credentials = ref({
  email: 'a@gmail.com',
  password: '123'
});
const validationError = ref({});
const loader = ref(false)

// functions that mutate state and trigger updates
function register() {
      loader.value = true;
      axios
        .post("/register", credentials.value)
        .then((response) => {
          let token = response.data.data.token;
          let email = response.data.email;
          if (token) {
            this.$store.dispatch("set_token", token);
            this.$store.dispatch("set_user", email);
            this.$router.push("/");
          }
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data.errors !== undefined) {
              validationError.value = err.response.data.errors;
            }
          }
        })
        .finally(() => (loader.value = false));
    }

</script>
  