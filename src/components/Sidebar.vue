<template>
  <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div
    class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
    :class="sideBarOpen ? '' : 'hidden'"
    id="main-nav"
  >
    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <!-- <p class="font-semibold text-3xl text-blue-400 pl-4">SoluTech</p> -->
      <img
        src="data:image/png;base64,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"
      />
    </div>

    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>
      <router-link :to="{ name: 'DashboardHome' }">
        <div
          class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        >
          <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path
              d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
            ></path>
          </svg>
          <p>Dashboard</p>
        </div>
      </router-link>
      <router-link active-class="bg-gray-400" :to="{ name: 'Graph' }">
        <div
          class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        >
          <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path
              d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"
            ></path>
          </svg>

          <p>Analytics</p>
        </div>
      </router-link>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"
          ></path>
        </svg>
        <span class="text-gray-700">Reports</span>
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"
          ></path>
        </svg>
        <span class="text-gray-700">Task Enquiries</span>
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"
          ></path>
        </svg>
        <span class="text-gray-700">Calender</span>
      </div>
    </div>

    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">Tasks</p>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
          ></path>
        </svg>
        <!-- <span class="text-gray-700">Add Task</span> -->
        <router-link active-class="bg-gray-400" :to="{ name: 'Create' }"
          >Add Task</router-link
        >
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"
          ></path>
        </svg>
        <span class="text-gray-700">View Tasks</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SidebarComponent",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
};
</script>
<style>
.router-link-exact-active {
  background-color: #edf2f7;
}
</style>
