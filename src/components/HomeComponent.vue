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
          <div class="w-5/6 md:w-2/3 xl:w-1/3 mx-auto py-12">
            <p class="text-center font-body text-lg">The Information Security Club is devoted to the art and science of information security.  We focus on helping students translate the knowledge they learn in courses into skills they can apply in the field of information security.  We are working to train students to compete in capture the flag (CTF) competitions and are working towards representing the University of Calgary on an international stage. We are also working to develop connections to industry professionals with the goal of connecting students to the world of information security outside the university in order to help them transition from the world of academics to a career information security.</p>
          </div>
        </section>
        <section class="w-full py-12">
          <div class="w-2/3 mx-auto my-4">
            <p class="font-display text-center text-4xl">Where We Meet</p>
            <p class="font-body text-center text-2xl">Join us every Monday from 6PM to 8PM in ENG60:</p><br>
            <img src="@/assets/ENG60.png" class="sm:w-full md:w-11/12 lg:w-8/12 xl:w-7/12 mx-auto" style="border-radius: 45px;" />
          </div>
        </section>
        <div class="w-2/3 mx-auto my-4">
          <p class="text-center font-display text-4xl">Find Us On Discord</p>
          <a href="https://discord.gg/wVwv5Pw"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 40%" /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeComponent',
  discordSrc: '@/assets/Discord-Logo+Wordmark-Color.png'
}
</script>
