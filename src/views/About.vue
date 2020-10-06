<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us</div>
    <div class="mx-auto">
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Jeremy Stuart" title="President" path="https://infosecucalgary.ca/uploads/jeremy-headshot.jpg" />
        <BioCard name="Alexandra Tenney" title="Vice President" path="https://infosecucalgary.ca/uploads/alex-headshot.jpg" />
        <BioCard name="Britta Den Hoed" title="VP of Communication" path="https://infosecucalgary.ca/uploads/britta-headshot.jpg" />
        <BioCard name="Sunny Mangat" title="VP of Finance" path="https://infosecucalgary.ca/uploads/sunny-headshot.jpg" />
        <BioCard name="Emily Baird" title="VP of Operations" path="https://infosecucalgary.ca/uploads/emily-headshot.jpg" />
        <BioCard name="Braydon Willms" title="VP of Tech" path="https://infosecucalgary.ca/uploads/braydon-headshot.jpg" />
        <BioCard name="Brandon Arenas" title="VP of Tech" path="https://infosecucalgary.ca/uploads/not-brandon-but-brandon.png" />
        <BioCard name="Joshua Novak" title="VP of Tech" path="https://infosecucalgary.ca/uploads/josh-headshot.jpg" secret="Webmaster Supreme" />
        <BioCard name="Ejaaz Lakhani" title="Secretary" path="https://infosecucalgary.ca/uploads/ejaaz-headshot.jpg" />
        <BioCard name="James Lowther" title="Technical Director" path="https://infosecucalgary.ca/uploads/james-headshot.jpg" secret="Crunchwrap Supreme" />
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
