<template>
  <section class="w-11/12 lg:w-1/2 my-auto mx-auto box-shadow">
    <div class="bg-accent-2 px-2 md:px-16 py-32 border rounded-3xl text-black text-center">
      <div class="flex flex-wrap justify-center w-full">
        <svg class="my-auto mx-2" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <p class="inline-block font-display text-4xl">Contact Us</p>
      </div>
      <p class="text-xl mb-8">Have some questions? Please email us at:</p>
      <p class="font-display break-words font-bold text-2xl md:text-4xl mb-16">infosec.ucalgary@gmail.com</p>
      <p class="inline-block font-display text-2xl mb-8">Find us on Facebook, Instagram, Twitter, and Youtube at @infosecucalgary</p>
      <div class="flex justify-center space-x-8 w-full">
        <a target="_blank" href="https://facebook.com/infosecucalgary"><img src="@/assets/fb-icon.png" width="50" class="mx-auto my-auto"></a>
        <a target="_blank" href="https://instagram.com/infosecucalgary"><img src="@/assets/instagram-circle-logo.png" width="50" class="mx-auto my-auto"></a>
        <a target="_blank" href="https://twitter.com/infosecucalgary"><img src="@/assets/twitter-icon.png" width="50" class="mx-auto my-auto"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCiDL68PDJUyX-CvoP6FHVcw/" class="my-auto"><img src="@/assets/yt-circle-logo.png" width="50" class="mx-auto my-auto"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>
