<template>
  <section class="py-8 w-full xl:w-2/3 mx-auto text-center">
    <CalendarComponent :key="this.calKey" @cur="this.setToCurrentDate" @inc="this.incrementSelectedMonthYear" @dec="this.decrementSelectedMonthYear" :month="this.selectedMonthYear.m" :year="this.selectedMonthYear.y" />
  </section>
</template>

<script>
import CalendarComponent from '@/components/CalendarComponent.vue'

export default {
  name: 'calendar',
  components: {
    CalendarComponent
  },
  data () {
    return {
      value: null,
      selectedMonthYear: { m: new Date().getMonth(), y: new Date().getUTCFullYear() },
      calKey: 0
    }
  },
  methods: {
    keyUp: function () {
      this.calKey++
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
    },

    setToCurrentDate: function () {
      this.selectedMonthYear = { m: new Date().getMonth(), y: new Date().getUTCFullYear() }
      this.keyUp()
    }
  }
}
</script>
