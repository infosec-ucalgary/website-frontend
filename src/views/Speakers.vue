<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <p class="font-bold text-5xl">Speaker Series</p>
    <div class="mt-12">
      <p class="font-display text-2xl">Join our speaker series and learn information security topics from real-world industry professionals</p>
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
      <SpeakerBioCard name="Saminah Amin" bio="Cybersecurity Consultant at PwC Canada" topic="Penetration Testing" date="26/10/2020" path="https://infosecucalgary.ca/uploads/speakers/saminah-amin.jpg" />
      <SpeakerBioCard name="Kathy Macdonald" bio="Author of Cybercrime: Awareness, Prevention and Response" topic="Practical Cybersecurity & Cybercrime Prevention" date="23/11/2020" path="https://infosecucalgary.ca/uploads/speakers/kathy-macdonald.png" />
      <SpeakerBioCard name="Adam McMath" bio="Cybersecurity General Manager at the Calgary Airport Authority" topic="Threat Intelligence" date="08/02/2021" path="https://infosecucalgary.ca/uploads/speakers/adam-mcmath.jpg" />
      <SpeakerBioCard name="Dr. Joel Reardon" bio="Professor of Computer Science at the University of Calgary" topic="Contact Tracing Apps & Security" date="01/03/2021" path="https://infosecucalgary.ca/uploads/speakers/joel-reardon.jpg"/>
      <SpeakerBioCard name="Emilie Vincent" bio="Corporate Recruiter at Trimac Transportation" topic="The Hiring Process" date="22/03/2021" path="https://infosecucalgary.ca/uploads/speakers/emilie-vincent.jpg" />
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
