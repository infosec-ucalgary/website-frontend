<template>
  <section id="home-outer">
    <header class="text-center">
      <img src="@/assets/official-logo-transparent.png" style="max-height: 600px;" class="mx-auto"/>
      <h1 class="text-center font-display">UofC Information Security Club</h1>
    </header>
    <div class="home">
      <div class="flex flex-col">
        <div class="w-2/3 mx-auto my-4">
          <h2 class="text-center font-display">Who We Are</h2>
          <p class="text-display text-center">The Information Security Club is devoted to the art and science of information security.  We focus on helping students translate the knowledge they learn in courses into skills they can apply in the field of information security.  We are working to train students to compete in capture the flag (CTF) competitions and are working towards representing the University of Calgary on an international stage. We are also working to develop connections to industry professionals with the goal of connecting students to the world of information security outside the university in order to help them transition from the world of academics to a career information security.</p>
        </div>
        <div class="w-2/3 mx-auto my-4">
          <h2 class="font-display text-center">Where We Meet</h2>
          <h4 class="font-display text-center">Join us every Monday from 6PM to 8PM in ENG60:</h4><br>
          <img src="@/assets/ENG60.png" class="w-75 mx-auto" />
        </div>

        <div class="w-2/3 mx-auto my-4">
          <h2 class="text-center font-display">Find Us On Discord</h2>
          <nav href="https://discord.gg/wVwv5Pw"><img class="mx-auto" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 40%" /></nav>
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
