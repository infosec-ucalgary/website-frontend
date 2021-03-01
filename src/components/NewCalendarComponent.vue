<template>
  <section class="mx-auto border-solid border-black border-2">
    <div class="w-auto bg-black p-2 flex">
      <svg @click="this.decrementMonth" class="flex-none text-white h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <div class="text-white text-2xl flex-grow">{{ this.getDateDisplay() }}</div>
      <svg @click="this.incrementMonth" class="flex-none text-white h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
    <div class="h-8 w-auto grid grid-cols-7 gap-0 bg-black">
      <strong class="text-white text-xs md:text-md" :key="weekdays.indexOf(wd)" v-for="wd in weekdays">{{ wd }}</strong>
    </div>
    <div class="w-auto grid grid-cols-7 grid-rows-5 gap-0 divide-x divide-y">
      <NewCalendarBlankBox v-for="n in getFirstDayOfWeek()" :key="'pre' + n" />
      <NewCalendarBox v-for="d in getDaysInMonth()" :key="d" :day="d" :month="selectedMonthYear.m" :year="selectedMonthYear.y" :events="getEventsOnDate(d, selectedMonthYear.m+1, selectedMonthYear.y)" />
      <NewCalendarBlankBox v-for="o in getRemainingBlanks()" :key="'post' + o" />
    </div>
  </section>
</template>

<script>
import NewCalendarBox from '@/components/NewCalendarBoxComponent.vue'
import NewCalendarBlankBox from '@/components/NewCalendarBlankBox.vue'
import eventlist from '@/eventlist.json'

export default {
  name: 'NewCalendar',
  props: ['month', 'year'],
  event: ['inc', 'dec'],
  components: {
    NewCalendarBox,
    NewCalendarBlankBox
  },
  data () {
    return {
      selectedMonthYear: { m: this.month, y: this.year },
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
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      events: eventlist.eventlist
    }
  },
  methods: {
    getCurrentDate: function () {
      let curr = new Date()
      return {
        d: curr.getDate(),
        m: curr.getMonth(),
        y: curr.getUTCFullYear()
      }
    },

    getCurrentMonthYear: function () {
      let curr = new Date()
      return {
        m: curr.getMonth(),
        y: curr.getUTCFullYear()
      }
    },

    // Deprecated?
    checkIfLeapyear: function (year) {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    },

    getDaysInMonth: function () {
      /* let currDate = new Date() */
      let selDate = new Date(this.selectedMonthYear.y, this.selectedMonthYear.m)
      return new Date(selDate.getUTCFullYear(), selDate.getMonth() + 1, 0).getDate()
    },

    // Return a string of the current month, a comma, then the year
    getDateDisplay: function () {
      /* let currDate = new Date() */
      let selDate = new Date(this.selectedMonthYear.y, this.selectedMonthYear.m)
      /* let currMonth = currDate.getMonth() */
      let selMonth = selDate.getMonth()
      return this.months[selMonth] + ', ' + selDate.getFullYear()
    },

    // Return the day of the week for the current months first day
    // Yes, this is a better way, checkout the commits lol
    getFirstDayOfWeek: function () {
      /* let currDate = new Date() */
      let selDate = new Date(this.selectedMonthYear.y, this.selectedMonthYear.m)
      return new Date(selDate.getUTCFullYear(), selDate.getMonth(), 1).getDay()
    },

    // Return the remaining amount of boxes needed to fill the empty spots of the calendar
    getRemainingBlanks: function () {
      let blanks = 35 - this.getDaysInMonth() - this.getFirstDayOfWeek()

      // Just a note on this return value. I default to use a 7x5 grid. However, sometimes
      // the calendar uses six rows rather than five. In those cases 'blanks' is negative
      // can be returned after adding seven
      return (blanks < 0) ? (7 + blanks) : blanks
    },

    getEventsOnDate: function (day, month, year) {
      return this.events.filter(ev =>
        ev.eventDate.d === day && ev.eventDate.m === month && ev.eventDate.y === year
      )
    },

    incrementMonth: function () {
      this.$emit('inc')
    },

    decrementMonth: function () {
      this.$emit('dec')
    }
  }
}
</script>
