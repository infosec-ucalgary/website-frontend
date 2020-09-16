<template>
  <div class="h-48 bg-white">{{ this.dayOfMonth }}</div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'NewCalendarBox',
  props: ['dayOfMonth']
}
</script>
