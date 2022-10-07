<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <p class="font-bold text-5xl">Speaker Series</p>
    <div class="mt-12">
      <p class="font-display text-2xl">Join our speaker series and learn information security topics from real-world industry professionals.</p>
      <p class="font-display text-2xl mt-2">View the <router-link id="nav-item" class="underline" to="/calendar">calendar</router-link> for workshop and speaker dates</p>
    </div>
    <hr class="mt-12 mb-16 border-2 border-gray-700 border-dashed">
    <div>
      <SpeakerBioCard name="Dr. Joel Reardon" bio="Associate professor in the Computer Science department at the University of Calgary" topic="TBA" date="31/10/2022" path="https://infosecucalgary.ca/uploads/speakers/joel-reardon.jpg"/>
      <SpeakerBioCard name="TBA" bio="" topic="TBA" date="06/02/2023"  />
      <SpeakerBioCard name="TBA" bio="" topic="TBA" date="20/03/2022" />
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
