<template>
  <div class="h-16 md:h-48 bg-white px-2 text-left">
    <div :class="checkIfCurrentDate() ? 'underline font-bold' : ''">{{ this.day }}</div>
    <div class="flex flex-col">
      <Event v-for="e in events" :key="events.indexOf(e)" :eventName="e.eventName" :eventAuthor="e.eventAuthor" :eventType="e.eventType"/>
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
export default {
  name: 'NewCalendarBox',
  components: {
    Event
  },
  props: ['day', 'month', 'year', 'events'],
  data () {
    return {
    }
  },
  methods: {
    checkIfCurrentDate: function () {
      let currentDate = new Date()
      return this.day.toString().localeCompare(currentDate.getDate().toString().trim()) === 0
    }
  }
}
</script>
