<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-blue-600 rounded shadow-lg shadow-blue-800/50 lg:max-w-md"
    >
      <!-- <h1
        class="text-3xl font-semibold text-center text-white rounded-md bg-blue-600"
      >
        SOLUTECH
      </h1> -->
      <!-- LOGO -->
      <img
        src="data:image/png;base64,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"
      />

      <form class="mt-6">
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input
            type="email"
            class="block w-full px-4 py-2 mt-2 bg-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <input
              type="password"
              class="block w-full px-4 py-2 mt-2 bg-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline"
            >Forget Password?</a
          >
          <div class="mt-6">
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <a href="#" class="font-medium text-blue-600 hover:underline"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
