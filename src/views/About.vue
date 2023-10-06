<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Executives</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Dan Sabourov" title="President" path="https://infosecucalgary.ca/uploads/daniel-headshot.png" />
        <BioCard name="Fam Ghaly" title="Vice-President" path="https://infosecucalgary.ca/uploads/fam-headshot.jpg" />
        <BioCard name="Artemy Gavrilov" title="VP Finance" path="https://infosecucalgary.ca/uploads/artemy-headshot.jpg" />
        <BioCard name="Kimih Yan" title="VP Operations" path="https://infosecucalgary.ca/uploads/kimih-headshot.jpg" />
        <BioCard name="Marianna Ferreira" title="VP Communications" path="https://infosecucalgary.ca/uploads/marianna-headshot.jpg"  />
        <BioCard name="Auric Poku" title="VP Secretary" path="https://infosecucalgary.ca/uploads/auric-headshot.jpg" />
        <BioCard name="Christina He" title="VP Tech" path="https://infosecucalgary.ca/uploads/christina-headshot.jpg" />
        <BioCard name="Ned Liu" title="VP Tech" path="https://infosecucalgary.ca/uploads/ned-headshot.jpg"  />
        <BioCard name="Amna Adnan" title="VP Tech" path="https://infosecucalgary.ca/uploads/amna-headshot.jpg" />
      </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Directors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Yasmin Samantar" path="https://infosecucalgary.ca/uploads/yasmin-headshot.jpg" />
      </div>
    <div class="font-display text-3xl my-4" style="text-decoration:underline">Juniors</div>
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Nicholas MacKinnon" path="https://infosecucalgary.ca/uploads/nick-headshot.jpg" />
        <BioCard name="Emmanuel Trinidad" path="https://infosecucalgary.ca/uploads/emmanuel-headshot.jpg" />
        <BioCard name="Ramez Halasah" path="https://infosecucalgary.ca/uploads/ramez-headshot.jpg" />
        <BioCard name="Paige So'Brien" path="https://infosecucalgary.ca/uploads/paige-headshot.jpg"  />
        <BioCard name="Royce K" path="https://infosecucalgary.ca/uploads/royce-headshot.png" />
        <BioCard name="Khadeeja Abbas" path="https://infosecucalgary.ca/uploads/khadeeja-headshot.jpg" />
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
