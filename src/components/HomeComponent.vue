<template>
  <div id="outer">
    <div style="height: 65vh;" class="_text-center">
      <img src="@/assets/logo.jpg" class="image -responsive _position-relative _height-100" /><br>
      <span class="h1 _text-center">UofC Information Security Club</span>
    </div>
    <br>
    <div class="home" style="margin-top: 50px;">
      <i-container>

        <i-row>
          <i-column :xs="true">
            <h2 class="_text-center">Who We Are</h2>
          </i-column>
        </i-row>

        <i-row center-xs>
          <i-column xs="9">
            <p class="lead _text-justify">The Information Security Club (InfoSec Club) is devoted to the art and science of information security.  We focus on helping students translate the knowledge they learn in courses into skills they can apply in the field of information security.  We also work to train students to compete in capture the flag competitions and represent the University of Calgary in international competition.  Working to develop connections to industry professionals, we also strive to connect students to the world of information security outside the university and help the transition into the real world of infosec.</p>
          </i-column>
        </i-row>

        <i-row>
          <i-column xs="12">
            <h2 class="_text-center">Where We Meet</h2>
          </i-column>
        </i-row>

        <i-row>
          <i-column xs="12">
            <h4 class="_text-center inline-block _align-middle">Join us for our first meeting:</h4><br>
            <p class="lead _text-center inline-block _align-middle">Our first meeting is happening on <b><u>January 27, 2020 at 6:00 PM to 8:00 PM</u></b>. Come find us in <b><u>ICT 102</u></b>.</p>
          </i-column>
        </i-row>
        <i-row>
          <i-column xs="12" class="_text-center">
            <img src="@/assets/ICT102.png" class="_width-50 image -responsive" />
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
