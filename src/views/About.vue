<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Executives</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Yasmin Samantar" title="President" path="https://infosecucalgary.ca/uploads/yasmin-headshot.jpg"  />
        <BioCard name="Dan Sabourov" title="Vice-President" path="https://infosecucalgary.ca/uploads/daniel-headshot.png" />
        <BioCard name="Greg Vance" title="VP Finance" path="https://infosecucalgary.ca/uploads/greg-headshot.jpg" secret="Something Something Supreme"/>
        <BioCard name="Maryam Bouh" title="VP Operations" path="https://infosecucalgary.ca/uploads/maryam-headshot.jpg"  />
        <BioCard name="Marianna Ferreira" title="VP Communications" path="https://infosecucalgary.ca/uploads/marianna-headshot.jpg"  />
        <BioCard name="Delara Shamanian" title="VP Tech" path="https://infosecucalgary.ca/uploads/delara-headshot.jpg" secret="DevOps Supreme" />
        <BioCard name="Ethan Sengsavang" title="VP Tech" path="https://infosecucalgary.ca/uploads/ethan-headshot.jpg" secret="just supremely tired" />
        <BioCard name="Ned Liu" title="VP Tech" path="https://infosecucalgary.ca/uploads/ned-headshot.jpg"  />
      </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Directors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Amna Adnan" path="https://infosecucalgary.ca/uploads/amna-headshot.jpg" />
        <BioCard name="Brandon Arenas" path="https://infosecucalgary.ca/uploads/not-brandon-but-brandon.png" />
        <BioCard name="Christopher Schultze" path="https://infosecucalgary.ca/uploads/chris-headshot.jpg"  />
        <BioCard name="Ejaaz Lakhani" path="https://infosecucalgary.ca/uploads/ejaaz-headshot.jpg" secret="Supreme Beard" />
        <BioCard name="Pratham Pandey" path="https://infosecucalgary.ca/uploads/pratham-headshot.jpg" />
        <BioCard name="Zachary Gilchrist" path="https://infosecucalgary.ca/uploads/zachary-headshot.jpg" />
      </div>
    <!-- div class="font-display text-3xl my-4" style="text-decoration:underline">Junior Executives</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
      </div>
    <div class="font-display text-4xl my-4"></div -->
  </section>
</template>

<style>
</style>

<script>
import BioCard from '@/components/BioCard.vue'
export default {
  name: 'about',
  components: {
    BioCard
  }
}
</script>
