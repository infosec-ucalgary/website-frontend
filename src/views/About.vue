<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Executives</div>
    <div class="inline-block xl:grid xl:grid-cols-3 lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
      <BioCard name="Fam Ghaly" title="President" path="https://infosecucalgary.ca/uploads/fam-headshot.jpg" />
      <BioCard name="Sean Robertson" title="Secretary" path="https://infosecucalgary.ca/uploads/sean-headshot.jpg" />
      <BioCard name="Jason Ngu" title="VP Communications" path="https://infosecucalgary.ca/uploads/jason-headshot.jpg" />
      <BioCard name="Nicholas MacKinnon" title="VP Tech" path="https://infosecucalgary.ca/uploads/nick-headshot.jpg" />
      <BioCard name="Royce K" title="VP Tech" path="https://infosecucalgary.ca/uploads/royce-headshot.png"  />
      <BioCard name="Dante Kirsman" title="VP Tech" path="https://infosecucalgary.ca/uploads/dante-headshot.jpg" />
    </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Directors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Christina He" path="https://infosecucalgary.ca/uploads/christina-headshot.jpg" />
      </div>
    <!-- <div class="font-display text-3xl my-4" style="text-decoration:underline">Juniors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Future Junior" path="" />
      </div> -->
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
