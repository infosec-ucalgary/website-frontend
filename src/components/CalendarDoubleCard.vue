<template>
  <section class="mx-auto my-4 py-4 flex-shrink-0 border border-gray-300 shadow rounded-lg w-48 h-64 lg:m-4">
    <div class="font-display font-medium mb-2">{{ date }}</div>
    <div class="font-display font-bold">{{ top_title }}</div>
    <p>{{ top_desc }}</p>
    <div class="font-display">{{ top_author }}</div>
    <hr>
    <div class="font-display font-bold">{{ bot_title }}</div>
    <p>{{ bot_desc }}</p>
    <div class="font-display">{{ bot_author }}</div>
  </section>
</template>

<style scoped>
section {
}
</style>

<script>
export default {
  name: 'CalendarDoubleCard',
  props: ['date', 'top_title', 'top_desc', 'top_author', 'bot_title', 'bot_desc', 'bot_author']
}
</script>
