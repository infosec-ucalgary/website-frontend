<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <p class="font-bold text-5xl">Speaker Series</p>
    <div class="mt-12">
      <p class="font-display text-2xl">Join our speaker series and learn information security topics from real-world industry professionals.</p>
      <p class="font-display text-2xl mt-2">View the <router-link id="nav-item" class="underline" to="/calendar">calendar</router-link> for workshop and speaker dates</p>
    </div>
    <div class="mt-10">
      <p class="font-body font-bold text-3xl text-red-800">Access to the speaker series is restricted to paying club members</p>
    </div>
    <div class="mt-8">
      <p class="font-display font-normal text-2xl">To pay club fees, transfer $10 (or $5 if joining from the winter semester) to infosec.ucalgary@gmail.com. Please include your name, email and Discord username (if you have one) in the message.  Make sure to include your four-digit Discord identifier.</p>
    </div>
    <hr class="mt-12 mb-16 border-2 border-gray-700 border-dashed">
    <div>
      <SpeakerBioCard name="Chris Shepherd, OSCP" bio="Pentester" topic="Open Source Intelligence" date="18/10/2021" path="" />
      <SpeakerBioCard name="Ruth Promislow" bio="Partner at Bennett Jones" topic="Cyberlaw" date="15/11/2021" path="" />
      <SpeakerBioCard name="Dr. Jason Jaskolka" bio="Assistant Professor at Carlton University" topic="Security of Multi-Agent Systems" date="24/01/2022" path="" />
      <SpeakerBioCard name="TBA" bio="" topic="TBA" date="14/02/2022" path=""/>
      <SpeakerBioCard name="TBA" bio="" topic="TBA" date="21/03/2022" path="" />
    </div>
  </section>
</template>

<script>
import SpeakerBioCard from '@/components/SpeakerBioCard.vue'

export default {
  name: 'Speakers',
  components: {
    SpeakerBioCard
  }
}
</script>
