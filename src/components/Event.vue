<template>
  <div :class="this.eventType !== 'workshop' ? this.eventType === 'speaker' ? 'bg-blue-500' : 'bg-green-400' : 'bg-red-500'" class="mb-1 p-1 text-center h-2 md:h-auto w-full border rounded-full md:truncate">
    <p class="hidden md:inline font-bold font-display">{{ this.eventName }}</p>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: ['eventName', 'eventAuthor', 'eventType', 'eventDate'],
  data () {
    return {
    }
  }
}
</script>
