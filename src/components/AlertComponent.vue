<template>
  <div v-if="this.visible" class="text-center py-4 lg:px-4">
    <div class="p-2 bg-accent-2 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
      <span class="flex rounded-full bg-primary text-white uppercase px-2 py-1 text-xs font-bold font-display mr-3">{{ type }}</span>
      <span class="font-body mr-2 text-left flex-auto" style="font-color: #12418f;" v-html="message"></span>
      <svg class="fill-current opacity-75 h-4 w-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" v-on:click="hideAlert()">
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
      </svg>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Alert',
  props: [
    'type',
    'message'
  ],
  data () {
    return {
      visible: true
    }
  },
  methods: {
    hideAlert: function () {
      this.visible = !this.visible
    }
  }
}
</script>
