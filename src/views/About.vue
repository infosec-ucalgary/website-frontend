<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us</div>
    <div class="mx-auto">
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
        <BioCard name="Zachary Gilchrist" title="Director" path="https://infosecucalgary.ca/uploads/zachary-headshot.jpg" />
        <BioCard name="Pratham Pandey" title="Director" path="https://infosecucalgary.ca/uploads/pratham-headshot.jpg" />
        <BioCard name="Ethan Sengsavang" title="Director" path="https://infosecucalgary.ca/uploads/ethan-headshot.jpg" />
        <BioCard name="Delara Shamanian" title="Director" path="https://infosecucalgary.ca/uploads/delara-headshot.jpg" />
        <BioCard name="Jeremy Stuart" title="Director" path="https://infosecucalgary.ca/uploads/jeremy-headshot.jpg" secret="Hot Ginger and Dynamite"/>
        <BioCard name="Greg Vance" title="Director" path="https://infosecucalgary.ca/uploads/greg-headshot.jpg" secret="Junior Supreme"/>
        <BioCard name="Raymond Vong" title="Director" path="https://infosecucalgary.ca/uploads/raymond-headshot.jpg" />
      </div>
    </div>
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
