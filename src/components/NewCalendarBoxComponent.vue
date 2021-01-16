<template>
  <div :class="checkIfCurrentDate() ? 'underline font-bold' : ''" class="h-16 md:h-48 bg-white">{{ this.dayOfMonth }}</div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'NewCalendarBox',
  props: ['dayOfMonth'],
  methods: {
    checkIfCurrentDate: function () {
      let currentDate = new Date()
      return this.dayOfMonth.toString().localeCompare(currentDate.getDate().toString().trim()) === 0
    }
  }
}
</script>
