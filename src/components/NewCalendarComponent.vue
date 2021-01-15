<template>
  <section class="mx-auto border-solid border-black border-2">
    <div class="h-12 text-2xl w-auto bg-black text-white">
      {{ this.getDateDisplay() }}
    </div>
    <div class="h-8 w-auto grid grid-cols-7 gap-0 bg-black">
      <strong class="text-white" v-bind:key="weekdays.indexOf(wd)" v-for="wd in weekdays">{{ wd }}</strong>
    </div>
    <div class="w-auto grid grid-cols-7 grid-rows-5 gap-0 divide-x divide-y">
      <NewCalendarBlankBox v-for="n in getFirstDayOfWeek()" v-bind:key="n" />
      <NewCalendarBox v-for="m in getDaysInMonth()" v-bind:key="m" :dayOfMonth="m" />
      <NewCalendarBlankBox v-for="o in getRemainingBlanks()" v-bind:key="o" />
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
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      months: [
        'January', //  31,
        'February', //  28,
        'March', //  31,
        'April', //  30,
        'May', //  31,
        'June', //  30,
        'July', //  31,
        'August', //  31,
        'September', //  30,
        'October', //  31,
        'November', //  30,
        'December' //  31
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
      switch (currMonth) {
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
    },
    // Returns the day of the week of the first day of the month
    // there is 100% a betteer way to do this, but w/e
    getFirstDayOfWeek: function () {
      let currDate = new Date()
      let currDOW = currDate.getDay()
      let currDOM = currDate.getDate()
      /* while (currDOM > 7) { */
      /* currDOM -= 7 */
      /* } */
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
  },
  mounted: {
    loadDayNumbers: function () {
      // let firstWeekDayMonth = this.getFirstDayOfWeek()
      return ''
    }
  }
}
</script>
