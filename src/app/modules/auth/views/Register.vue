<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign up
            </h1>
            <form class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  v-model="credentials.email"
                />
                <div
                  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                  v-if="formError.errors?.email"
                >
                  <span class="block sm:inline">{{
                    formError.errors?.email[0]
                  }}</span>
                  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  </span>
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  v-model="credentials.password"
                />
                <div
                  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                  v-if="formError.errors?.password"
                >
                  <span class="block sm:inline">{{
                    formError.errors.password[0]
                  }}</span>
                  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start"></div>
              </div>
              <button
                @click="register"
                type="button"
                :disabled="loader"
                :class="{'cursor-wait':loader }"
                class="flex items-center place-content-center w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <spinner :height="'h-5'" :width="'w-5'" :fill="'fill-white'"  v-if="loader"></spinner>
                Sign up
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <router-link
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  :to="{ name: 'login' }"
                >
                  Sign in</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Spinner from "../../../../assets/icons/Spinner.vue";

export default {
  name: "register",
  components: { Spinner },
  data() {
    return {
      credentials: {
        email: "a@example.com",
        password: "12345678",
      },
      formError: {
        errors: {},
      },
      loader: false
    };
  },

  methods: {
    register() {
      this.loader = true;

      this.axios
        .post("/register", this.credentials)
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
              this.formError.errors = err.response.data.errors;
            }
          }
        })
        .finally(() => this.loader = false);
    },
  },
};
</script>
