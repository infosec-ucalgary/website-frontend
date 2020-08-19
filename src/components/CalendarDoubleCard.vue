<template>
  <section class="mx-auto my-4 py-4 flex-shrink-0 border border-gray-300 shadow rounded-lg w-48 h-64 lg:m-4">
    <div class="font-display font-bold">{{ top_title }}</div>
    <div class="font-display font-medium">{{ top_date }}</div>
    <p>{{ top_desc }}</p>
    <hr>
    <div class="font-display font-bold">{{ bot_title }}</div>
    <div class="font-display font-medium">{{ bot_date }}</div>
    <p>{{ bot_desc }}</p>
  </section>
</template>

<style scoped>
section {
}
</style>

<script>
export default {
  name: 'CalendarDoubleCard',
  props: ['top_title', 'top_date', 'top_desc', 'bot_title', 'bot_date', 'bot_desc']
}
</script>
