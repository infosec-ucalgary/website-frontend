<template>
  <section class="mx-auto border-solid border-black border-2">
    <div class="h-12 text-2xl w-auto bg-black text-white">
      {{ this.getDateDisplay() }}
    </div>
    <div class="h-8 w-auto grid grid-cols-7 gap-0 bg-black">
      <strong class="text-white">Sun</strong>
      <strong class="text-white">Mon</strong>
      <strong class="text-white">Tue</strong>
      <strong class="text-white">Wed</strong>
      <strong class="text-white">Thu</strong>
      <strong class="text-white">Fri</strong>
      <strong class="text-white">Sat</strong>
    </div>
    <div class="w-auto grid grid-cols-7 grid-rows-5 gap-0">
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
      <div class="h-48 border-solid border-red border-2"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewCalendar',
  data () {
    return {
      months: [
        'January', // : 31,
        'February', // : 28,
        'March', // : 31,
        'April', // : 30,
        'May', // : 31,
        'June', // : 30,
        'July', // : 31,
        'August', // : 31,
        'September', // : 30,
        'October', // : 31,
        'November', // : 30,
        'December'// : 31
      ]
    }
  },
  methods: {
    checkIfLeapyear: function (year) {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    },
    getDaysInMonth: function (monthNum) {
      switch (monthNum) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
          return 31
        case 3:
        case 5:
        case 8:
        case 10:
          return 30
        case 1:
          let currDate = new Date()
          if (this.checkIfLeapyear(currDate.getFullYear())) return 29
          return 28
      }
    },
    getDateDisplay: function () {
      let currDate = new Date()
      let currMonth = currDate.getMonth()
      return this.months[currMonth] + ' ' + currDate.getFullYear()
    }
  },
  mounted: {
    loadDayNumbers: function () {
      return ''
    }
  }
}
</script>
