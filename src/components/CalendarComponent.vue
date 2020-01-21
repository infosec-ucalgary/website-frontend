<template>
  <FunctionalCalendar
    v-model="calendarData"
    v-on:choseDate="alertMe()"
    :configs="calendarConfigs"
    ref="EventsCal" style="max-width: 400px; margin: auto;"></FunctionalCalendar>
</template>
<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
export default {
  name: 'CalendarComponent',
  components: {
    FunctionalCalendar
  },
  data () {
    return {
      calendarData: {},
      calendarConfigs: {
        sundayStart: false,
        dateFormat: 'dd/mm/yyyy',
        isDatePicker: false,
        isDateRange: false
      }
    }
  },
  methods: {
    alertMe: function () {
      alert('Me')
    }
  }
}
</script>
