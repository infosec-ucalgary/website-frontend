<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <p class="font-display text-4xl">Speaker Series</p>
    <div class="mt-12">
      <p class="font-display text-2xl">Join our speaker series and learn information security topics from real-world industry professionals</p>
      <p class="font-display text-2xl mt-2">View the <router-link id="nav-item" class="" to="/calendar">calendar</router-link> for workshop and speaker dates</p>
    </div>
    <div class="mt-10">
      <p class="font-display font-bold text-3xl">Access to the speaker series is restricted to paying club members</p>
    </div>
    <div>
      <SpeakerBioCard name="Saminah Amin" bio="" topic="Penetration Testing" date="26/10/2020" />
      <SpeakerBioCard name="Kathy Macdonald" bio="" topic="Practical Cybersecurity & Cybercrime Prevention" date="23/11/2020" />
      <SpeakerBioCard name="Adam McMath" bio="" topic="Threat Intelligence" date="08/02/2021" />
      <SpeakerBioCard name="Dr. Joel Reardon" bio="" topic="Contact Tracing Apps & Security" date="01/03/2021" />
      <SpeakerBioCard name="Emilie Vincent" bio="" topic="The Hiring Process" date="22/03/2021" />
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
