<template>
  <!-- <div class="_position-relative _width-100" id="outer-container"> -->
  <div class="relative w-full" id="outer-container">
    <div class="bg-bar w-auto h-16">
      <div class="relative w-2/3 m-auto p-4">
        <router-link to="/"><span class="pr-8 text-white font-display text-xl inline-block align-middle">UofC InfoSec Club</span></router-link>
        <router-link class="pr-8 text-gray-300 font-display text-md inline-block align-middle" to="/">Home</router-link>
        <router-link class="pr-8 text-gray-300 font-display text-md inline-block align-middle" to="/calendar">Calendar</router-link>
        <router-link class="pr-8 text-gray-300 font-display text-md inline-block align-middle" to="/resources">Resources</router-link>
      </div>
    </div>

    <!--
    <i-alert dismissible :show="visible" variant="primary" class="_text-center">
      <p><i class="inkline-icon -info"></i> Having trouble with a challenge or want to know more about a topic we discussed at a meeting? Come see us every friday from 12 PM to 2PM for our office hours in MS 119!</p>
    </i-alert>
    -->

    <router-view />

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
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>
