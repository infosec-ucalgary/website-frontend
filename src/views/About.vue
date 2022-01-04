<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Executives</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Alexandra Tenney" title="President" path="https://infosecucalgary.ca/uploads/alex-headshot.jpg" />
        <BioCard name="Joshua Cordeiro-Zebkowitz" title="Vice President" path="https://infosecucalgary.ca/uploads/josh-cz-headshot.jpg" secret ="DreadPirate Supreme" />
        <BioCard name="Justin Yu" title="VP of Communication" path="https://infosecucalgary.ca/uploads/justin-headshot.jpg" />
        <BioCard name="Sunny Mangat" title="VP of Finance" path="https://infosecucalgary.ca/uploads/sunny-headshot.jpg" />
        <BioCard name="Ejaaz Lakhani" title="VP of Operations" path="https://infosecucalgary.ca/uploads/ejaaz-headshot.jpg" />
        <BioCard name="Braydon Willms" title="VP Tech" path="https://infosecucalgary.ca/uploads/braydon-headshot.jpg" />
        <BioCard name="Brandon Arenas" title="VP Tech" path="https://infosecucalgary.ca/uploads/not-brandon-but-brandon.png" />
        <BioCard name="Joshua Novak" title="VP Tech" path="https://infosecucalgary.ca/uploads/josh-headshot.jpg" secret="Webmaster Supreme" />
        <BioCard name="Amna Adnan" title="Secretary" path="https://infosecucalgary.ca/uploads/amna-headshot.jpg" />
    </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Directors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Zachary Gilchrist" path="https://infosecucalgary.ca/uploads/zachary-headshot.jpg" />
        <BioCard name="Ethan Sengsavang" path="https://infosecucalgary.ca/uploads/ethan-headshot.jpg" />
        <BioCard name="Delara Shamanian" path="https://infosecucalgary.ca/uploads/delara-headshot.jpg" />
        <BioCard name="Jeremy Stuart" path="https://infosecucalgary.ca/uploads/jeremy-headshot.jpg" secret="Hot Ginger and Dynamite"/>
        <BioCard name="Greg Vance" path="https://infosecucalgary.ca/uploads/greg-headshot.jpg" secret="Junior Supreme"/>
      </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Junior Executives</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Marianna Ferreira" path="https://infosecucalgary.ca/uploads/marianna-headshot.jpg"  />
        <BioCard name="Yasmin Samantar" path="https://infosecucalgary.ca/uploads/yasmin-headshot.jpg"  />
        <BioCard name="Maryam Bouh" path="https://infosecucalgary.ca/uploads/maryam-headshot.jpg"  />
        <BioCard name="Dan Sabourov" path="https://infosecucalgary.ca/uploads/daniel-headshot.png" />
        <BioCard name="Nicholas Cervania" path="https://infosecucalgary.ca/uploads/nich-headshot.png"  />
        <BioCard name="Ned Liu" path="https://infosecucalgary.ca/uploads/ned-headshot.jpg"  />
        <BioCard name="Christopher Schultze" path="https://infosecucalgary.ca/uploads/chris-headshot.jpg"  />
      </div>
    <div class="font-display text-4xl my-4"></div>
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
