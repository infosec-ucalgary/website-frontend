<template>
  <section class="mx-auto my-4 flex-shrink-0 border border-gray-300 shadow rounded-lg w-48 h-48 lg:m-4">
    <div class="font-display font-bold">{{ title }}</div>
    <div class="font-display font-medium">{{ date }}</div>
    <p>{{ desc }}</p>
  </section>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'CalendarCard',
  props: ['title', 'date', 'desc']
}
</script>
