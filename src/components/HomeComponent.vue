<template>
  <div id="outer" class="">
    <div style="" class="_text-center _display-block">
      <img src="@/assets/official-logo-transparent.png" style="max-height: 600px;" class="image -responsive _position-relative" /><br>
      <span class="h1 _text-center _vw-100">UofC Information Security Club</span>
    </div>
    <div class="home _display-block" style="margin-top: 50px;">
      <i-container>
        <i-row>
          <i-column :xs="true">
            <h2 class="_text-center">Who We Are</h2>
          </i-column>
        </i-row>

        <i-row center-xs>
          <i-column xs="9" sm="6">
            <p class="lead _text-center">The Information Security Club is devoted to the art and science of information security.  We focus on helping students translate the knowledge they learn in courses into skills they can apply in the field of information security.  We are working to train students to compete in capture the flag (CTF) competitions and are working towards representing the University of Calgary on an international stage. We are also working to develop connections to industry professionals with the goal of connecting students to the world of information security outside the university in order to help them transition from the world of academics to a career information security.</p>
          </i-column>
        </i-row>
        <i-row>
          <i-column xs="12">
            <h2 class="_text-center">Where We Meet</h2>
          </i-column>
        </i-row>

        <i-row>
          <i-column xs="12">
            <h4 class="_text-center inline-block _align-middle">Join us every Monday from 6PM to 8PM in ENG60:</h4><br>
          </i-column>
        </i-row>
        <i-row>
          <i-column xs="12" class="_text-center">
            <img src="@/assets/ENG60.png" class="_width-75 image -responsive" />
          </i-column>
        </i-row>

        <i-row>
          <i-column xs="12" class="_text-center">
            <h2>Find Us On Discord</h2>
            <br>
            <a href="https://discord.gg/wVwv5Pw"><img class="image -reponsive" src="@/assets/Discord-Logo+Wordmark-Color.png" style="width: 40%" /></a>
          </i-column>
        </i-row>

        <i-row>
        </i-row>

      </i-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeComponent',
  discordSrc: '@/assets/Discord-Logo+Wordmark-Color.png'
}
</script>
