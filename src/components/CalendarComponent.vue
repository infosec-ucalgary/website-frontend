<template>
  <section class="mx-auto border-black border-2">
    <div class="mx-auto w-full bg-black px-2 py-1 flex">
      <svg @click="this.decrementMonth" class="cursor-pointer flex-none text-white h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
      <div @click="currentMonth" class="cursor-pointer text-white text-2xl flex-grow">{{ this.getDateDisplay() }}</div>
      <svg @click="this.incrementMonth" class="cursor-pointer flex-none text-white h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="mx-auto h-8 w-full grid grid-cols-7 bg-black">
      <strong class="text-white text-xs md:text-md" :key="weekdays.indexOf(wd)" v-for="wd in weekdays">{{ wd }}</strong>
    </div>
    <div class="mx-auto w-full grid grid-cols-7 grid-rows-5 divide-x divide-y">
      <CalendarBlankBox v-for="n in getFirstDayOfWeek()" :key="'pre' + n" />
      <CalendarBox v-for="d in getDaysInMonth()" :key="d" :day="d" :month="selectedMonthYear.m" :year="selectedMonthYear.y" :events="getEventsOnDate(d, selectedMonthYear.m+1, selectedMonthYear.y)" />
      <CalendarBlankBox v-for="o in getRemainingBlanks()" :key="'post' + o" />
    </div>
  </section>
</template>

<script>
import CalendarBox from '@/components/CalendarBoxComponent.vue'
import CalendarBlankBox from '@/components/CalendarBlankBox.vue'
import eventlist from '@/assets/eventlist.json'

export default {
  name: 'CalendarComponent',
  props: ['month', 'year'],
  event: ['inc', 'dec', 'cur'],
  components: {
    CalendarBox,
    CalendarBlankBox
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

    getDaysInMonth: function () {
      let selDate = new Date(this.selectedMonthYear.y, this.selectedMonthYear.m)
      return new Date(selDate.getUTCFullYear(), selDate.getMonth() + 1, 0).getDate()
    },

    // Return a string of the current month, a comma, then the year
    getDateDisplay: function () {
      let selDate = new Date(this.selectedMonthYear.y, this.selectedMonthYear.m)
      let selMonth = selDate.getMonth()
      return this.months[selMonth] + ', ' + selDate.getFullYear()
    },

    // Return the day of the week for the current months first day
    getFirstDayOfWeek: function () {
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
    },

    currentMonth: function () {
      this.$emit('cur')
    }
  }
}
</script>
