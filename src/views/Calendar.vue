<template>
  <section class="py-8 w-full xl:w-2/3 mx-auto text-center">
    <NewCalendar :key="this.calKey" @inc="this.incrementSelectedMonthYear" @dec="this.decrementSelectedMonthYear" :month="this.selectedMonthYear.m" :year="this.selectedMonthYear.y" />
  </section>

</template>

<script>
import NewCalendar from '@/components/NewCalendarComponent.vue'

export default {
  name: 'calendar',
  components: {
    NewCalendar
  },
  data () {
    return {
      value: null,
      selectedMonthYear: { m: new Date().getMonth(), y: new Date().getUTCFullYear() },
      calKey: 0,
      updateKey: 0
    }
  },
  methods: {
    keyUp: function () {
      this.calKey++
      this.updateKey++
    },

    incrementSelectedMonthYear: function () {
      if (this.selectedMonthYear.m === 11) this.selectedMonthYear = { m: 0, y: this.selectedMonthYear.y + 1 }
      else this.selectedMonthYear = { m: this.selectedMonthYear.m + 1, y: this.selectedMonthYear.y }
      this.keyUp()
    },

    decrementSelectedMonthYear: function () {
      if (this.selectedMonthYear.m === 0) this.selectedMonthYear = { m: 11, y: this.selectedMonthYear.y - 1 }
      else this.selectedMonthYear = { m: this.selectedMonthYear.m - 1, y: this.selectedMonthYear.y }
      this.keyUp()
    }
  }
}
</script>
