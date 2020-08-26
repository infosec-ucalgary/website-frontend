<template>
  <section class="mx-auto my-4 py-4 flex-shrink-0 border border-gray-300 shadow rounded-lg w-48 h-48 lg:m-4">
    <div class="font-display font-medium mb-2">{{ date }}</div>
    <div class="font-display font-bold">{{ title }}</div>
    <p>{{ desc }}</p>
    <div class="font-display">{{ author }}</div>
  </section>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'CalendarCard',
  props: ['date', 'title', 'desc', 'author']
}
</script>
