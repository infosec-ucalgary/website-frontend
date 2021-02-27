<template>
  <section class="w-1/2 my-auto mx-auto box-shadow">
    <div id="blue_box" class="bg-accent-2 px-16 py-32 border rounded-3xl text-black text-center">
      <div class="flex justify-center w-full">
        <svg class="my-auto mx-2" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <p class="inline-block font-display text-4xl">Contact Us</p>
      </div>
      <p class="text-xl mb-8">Have some questions? Please email us at:</p>
      <p class="font-display font-bold text-4xl">infosec.ucalgary@gmail.com</p>
    </div>
  </section>
</template>

<style scoped>
 #blue_box {
   /* Wonderful svg background by heropatterns.com */
   background-color: #78afde;
   background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2389c0ef' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 }
</style>

<script>
export default {
  name: 'contact'
}
</script>
