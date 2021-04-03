<template>
  <section id="home-outer">
    <header class="text-center pb-12">
      <img src="@/assets/magpie-vector-v02.svg" style="max-height: 600px;" class="mx-auto"/>
      <p class="text-center font-display text-4xl">UofC Information Security Club</p>
      <svg class="animate-bounce w-16 h-16 text-gray-900 mx-auto mt-12" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </header>
    <div class="home">
      <div class="flex flex-col">
        <section class="w-full bg-accent-2 py-12">
          <p class="text-center font-display text-4xl">Who We Are</p>
          <div class="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12">
            <p class="text-center font-body text-lg">The mission of the Information Security Club is to expose and educate university students to the technical and theoretical skills in the field of cybersecurity, and to connect these students with industry professionals.</p>
          </div>
          <div class="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12 overflow-hidden">
            <div class="border-2 bg-gray-800 rounded-full py-2 px-4 text-xl">
              <span style="color: #9289b8;">root@magpie ~$ </span>
              <span class="text-white">echo </span>
              <vue-typer
                :text='["SQL injection","privilege escalation","University of Calgary","XXS injection","web exploitation","capture the flag", "ROP chain", "cryptography"]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='70'
                :pre-erase-delay='2200'
                :erase-delay='65'
                erase-style='backspace'
                :erase-on-complete='false'
                caret-animation='solid'
              ></vue-typer>
            </div>
          </div>
        </section>
        <div class="mx-auto mt-8">
          <PaymentModal />
        </div>
        <section class="w-full py-10">
          <div class="w-2/3 mx-auto my-4">
            <p class="font-display text-center text-4xl">Where We Meet</p>
            <p class="font-body text-center text-2xl">Join us every Monday from 6PM to 8PM on our weekly livestream</p><br>
          </div>
        </section>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl">Email us at:</p>
          <p class="text-center font-display text-5xl font-bold">infosec.ucalgary@gmail.com</p>
        </div>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl">Find Us On Discord</p>
          <a href="https://discord.gg/wVwv5Pw" target="_blank"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 40%" /></a>
        </div>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl">Subscribe on YouTube</p>
          <a href="https://www.youtube.com/channel/UCiDL68PDJUyX-CvoP6FHVcw" target="_blank"><img class="mx-auto" src="@/assets/youtube-logo.png" style="width: 40%" /></a>
        </div>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl">Follow us on Twitch</p>
          <a href="https://www.twitch.tv/infosecucalgary" target="_blank"><img class="mx-auto" src="@/assets/twitch-logo.png" style="width: 35%" /></a>
        </div>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl my-6">Check Out Our CTF</p>
          <a href="http://magpiectf.ca" target="_blank"><img class="mx-auto rounded-full" src="@/assets/ctf-logo-v3.png" style="width: 45%" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { VueTyper } from 'vue-typer'
import PaymentModal from '@/components/PaymentModal.vue'

export default {
  name: 'HomeComponent',
  components: {
    VueTyper,
    PaymentModal
  },
  discordSrc: '@/assets/Discord-Logo+Wordmark-Color.png'
}
</script>
