<template>
  <div class="xl:flex xl:items-center xl:justify-center">
  <section class="mx-auto w-64 m-4 flex-shrink-0 md:m-4">
    <div @click="showHideSecret" v-if="path==null" class="bg-gray-300 border rounded-full h-64">
    </div>
    <img @click="showHideSecret" v-if="path != null" :src="path" class="h-64 w-64 rounded-full" />
    <div class="h-16 pt-4">
      <div class="font-display font-bold">{{ name }}</div>
      <p class="font-body font-light">{{ title }}</p>
      <p v-if="show_secret == true" class="font-body font-light">{{ secret }}</p>
    </div>
  </section>
</div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'BioCard',
  props: [
    'name',
    'title',
    'path',
    'secret'
  ],
  data () {
    return {
      show_secret: false
    }
  },
  methods: {
    showHideSecret: function () {
      this.show_secret = !this.show_secret
    }
  }
}
</script>
