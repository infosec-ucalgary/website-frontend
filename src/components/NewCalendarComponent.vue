<template>
  <section class="mx-auto border-solid border-black border-2">
    <div class="w-auto bg-black p-2 flex">
      <svg class="flex-none text-white h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <div class="text-white text-2xl flex-grow">{{ this.getDateDisplay() }}</div>
      <svg class="flex-none text-white h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
    <div class="h-8 w-auto grid grid-cols-7 gap-0 bg-black">
      <strong class="text-white text-xs md:text-md" :key="weekdays.indexOf(wd)" v-for="wd in weekdays">{{ wd }}</strong>
    </div>
    <div class="w-auto grid grid-cols-7 grid-rows-5 gap-0 divide-x divide-y">
      <NewCalendarBlankBox v-for="n in getFirstDayOfWeek()" :key="'pre' + n" />
      <NewCalendarBox v-for="m in getDaysInMonth()" :key="m" :dayOfMonth="m" />
      <NewCalendarBlankBox v-for="o in getRemainingBlanks()" :key="'post' + o" />
    </div>
  </section>
</template>

<script>
import NewCalendarBox from '@/components/NewCalendarBoxComponent.vue'
import NewCalendarBlankBox from '@/components/NewCalendarBlankBox.vue'

export default {
  name: 'NewCalendar',
  components: {
    NewCalendarBox,
    NewCalendarBlankBox
  },
  data () {
    return {
      weekdays: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      months: [
        { name: 'January', days: 31 }, //  31,
        { name: 'February', days: 28 }, //  28,
        { name: 'March', days: 31 }, //  31,
        { name: 'April', days: 30 }, //  30,
        { name: 'May', days: 31 }, //  31,
        { name: 'June', days: 30 }, //  30,
        { name: 'July', days: 31 }, //  31,
        { name: 'August', days: 31 }, //  31,
        { name: 'September', days: 30 }, //  30,
        { name: 'October', days: 31 }, //  31,
        { name: 'November', days: 30 }, //  30,
        { name: 'December', days: 31 } //  31
      ]
    }
  },
  methods: {
    checkIfLeapyear: function (year) {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    },

    getDaysInMonth: function () {
      let currDate = new Date()
      let currMonth = currDate.getMonth()
      if (currMonth === 1) {
        if (this.checkIfLeapyear(currDate.getFullYear())) return 29
        else return 28
      } else {
        return this.months[currMonth].days
      }
    },

    // Return a string of the current month, a comma, then the year
    getDateDisplay: function () {
      let currDate = new Date()
      let currMonth = currDate.getMonth()
      return this.months[currMonth].name + ', ' + currDate.getFullYear()
    },

    // Returns the day of the week of the first day of the month
    // there is 100% a better way to do this, but w/e
    getFirstDayOfWeek: function () {
      let currDate = new Date()
      let currDOW = currDate.getDay()
      let currDOM = currDate.getDate()
      currDOM = currDOM % 7
      while (currDOM > 1) {
        currDOM -= 1
        if (currDOW === 0) currDOW = 6
        else currDOW--
      }
      return currDOW
    },

    // Return the remaining amount of boxes needed to fill the empty spots of the calendar
    getRemainingBlanks: function () {
      let blanks = 35 - this.getDaysInMonth() - this.getFirstDayOfWeek()

      // Just a note on this return value. I default to use a 7x5 grid. However, sometimes
      // the calendar uses six rows rather than five. In those cases 'blanks' is negative
      // can be returned after adding seven
      return (blanks < 0) ? (7 + blanks) : blanks
    }
  }
}
</script>
