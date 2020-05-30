<template>
  <!-- <div class="_position-relative _width-100" id="outer-container"> -->
  <div class="relative w-full" id="outer-container">

    <!-- NAVBAR -->
    <NavbarComponent />

    <!-- ALERT -->
    <div class="text-center py-4 lg:px-4" id="upcoming-alert">
      <div class="p-2 bg-accent-2 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-bar text-white uppercase px-2 py-1 text-xs font-display mr-3">New</span>
        <span class="font-display mr-2 text-left flex-auto" style="font-color: #12418f;">The exec team is working hard to bring you an exciting fall and winter semester! Stay tuned!</span>
        <svg class="fill-current opacity-75 h-4 w-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" v-on:click="hideAlert()">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </div>
    </div>

    <!-- PAGE RENDER -->
    <router-view />

    <!-- FOOTER -->
    <div id="footer" class="_text-center">
      <div class="_height-100 _display-inline-block _align-middle"><p>We are a group of students from University of Calgary who are dedicated to learn cyber security - &copy;2020</p></div>
    </div>
  </div>
</template>

<style>
 body {
   width: 100%;
 }

 #app {
   /* font-family: 'avenir', helvetica, arial, sans-serif; */
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   /* color: #2c3e50; */
 }

 #footer {
   height: 10vh;
 }

</style>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    hideAlert: function () {
      let alert = document.getElementById('upcoming-alert')
      if (alert.style.display !== 'none') alert.style.display = 'none'
    }
  }
}
</script>
