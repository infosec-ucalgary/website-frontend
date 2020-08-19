<template>
  <section class="text-center md:w-2/3 mx-auto">
    <div class="font-display text-4xl my-4">About Us</div>
    <div class="mx-auto">
      <div class="inline-block lg:mx-0 lg:flex lg:flex-wrap mx-auto w-auto justify-center">
        <BioCard name="Jeremy Stuart" title="President" />
        <BioCard name="Alexandra Tenney" title="Vice President" />
        <BioCard name="Britta Den Hoed" title="VP of Communication" />
        <BioCard name="Emily Baird" title="VP of Operations" />
        <BioCard name="Braydon Willms" title="VP of Tech" />
        <BioCard name="Brandon Arenas" title="VP of Tech" />
        <BioCard name="Joshua Novak" title="VP of Tech" />
        <BioCard name="James Lowther" title="Junior Executive" />
        <BioCard name="Aarti Barakale" title="Junior Executive" />
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
