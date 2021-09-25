<template>
  <section class="flex flex-col sm:flex-row my-10">
    <div class="w-48 mx-auto md:m-4 flex-shrink-0">
      <div v-if="path==null" class="bg-gray-300 border rounded-full h-48">
      </div>
      <img v-if="path != null" :src="path" class="h-48 w-48 rounded-full object-cover" />
    </div>
    <div class="text-center sm:text-left ml-4 mt-4 sm:my-auto">
      <div class="font-display font-bold text-3xl">{{ name }}</div>
      <p class="font-body text-lg">{{ bio }}</p>
      <p class="font-bold text-xl mt-3">{{ topic }}</p>
      <p class="font-bold text-xl">{{date}}</p>
    </div>
  </section>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'SpeakerBioCard',
  props: ['name', 'bio', 'topic', 'date', 'path']
}
</script>
