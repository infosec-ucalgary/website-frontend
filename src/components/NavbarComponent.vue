<template>
  <nav class="flex items-center justify-center flex-wrap bg-primary">
    <div class="w-5/6 lg:w-2/3 flex items-center justify-between flex-wrap p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/">
          <img class="fill-current h-12 w-12 mr-2" width="54" height="54" src="@/assets/magpie-vector-v02-white.svg" alt="SVG Logo">
        </router-link>
        <span class="font-display text-xl tracking-tight">UofC InfoSec Club</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-500 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" v-on:click="isOpen = !isOpen">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link id="nav-item" :class="this.$route.name == 'home' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/">Home</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'about' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/about">About Us</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'calendar' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/calendar">Calendar</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'speakers' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/speakers">Speakers</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'resources' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/resources">Resources</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'winners' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg mr-4" to="/winners">CTF Winners</router-link>
          <router-link id="nav-item" :class="this.$route.name == 'contact' ? 'underline' : ''" class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white font-display text-lg " to="/contact">Contact Us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
