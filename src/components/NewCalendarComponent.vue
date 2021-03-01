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
      <NewCalendarBox v-for="d in getDaysInMonth()" :key="d" :day="d" :month="getCurrentDate().m" :year="getCurrentDate().y" :events="getEventsOnDate(d, getCurrentDate().m, getCurrentDate().y)" />
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
      selectedMonthYear: this.getCurrentDate(),
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
      events: [
        {
          eventName: 'Threat Intelligence',
          eventAuthor: 'Adam McMath',
          eventType: 'speaker',
          eventDate: {
            d: 8,
            m: 1,
            y: 2021
          }
        },
        {
          eventName: 'magpieCTF',
          eventAuthor: 'UofC Infosec Club',
          eventType: 'ctf',
          eventDate: {
            d: 19,
            m: 1,
            y: 2021
          }
        },
        {
          eventName: 'magpieCTF',
          eventAuthor: 'UofC Infosec Club',
          eventType: 'ctf',
          eventDate: {
            d: 20,
            m: 1,
            y: 2021
          }
        },
        {
          eventName: 'magpieCTF',
          eventAuthor: 'UofC Infosec Club',
          eventType: 'ctf',
          eventDate: {
            d: 21,
            m: 1,
            y: 2021
          }
        },
        {
          eventName: 'NTLM and Lanman Poisoning',
          eventAuthor: 'Sunny',
          eventType: 'workshop',
          eventDate: {
            d: 22,
            m: 1,
            y: 2021
          }
        }
      ]
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
    checkIfLeapyear: function (year) {
      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    },

    getDaysInMonth: function () {
      let currDate = new Date()
      return new Date(currDate.getUTCFullYear(), currDate.getMonth() + 1, 0).getDate()
    },

    // Return a string of the current month, a comma, then the year
    getDateDisplay: function () {
      let currDate = new Date()
      let currMonth = currDate.getMonth()
      return this.months[currMonth] + ', ' + currDate.getFullYear()
    },

    // Return the day of the week for the current months first day
    // Yes, this is a better way, checkout the commits lol
    getFirstDayOfWeek: function () {
      let currDate = new Date()
      return new Date(currDate.getUTCFullYear(), currDate.getMonth(), 1).getDay()
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
    }
  }
}
</script>
