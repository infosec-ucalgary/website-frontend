<template>
  <div :class="this.eventType !== 'workshop' ? this.eventType === 'speaker' ? 'border-blue-400' : 'border-green-400' : 'border-red-500'" class="mb-1 h-2 md:h-8 w-full md:grid md:grid-cols-4 rounded-full border-2 md:border-none">
    <div :class="this.eventType !== 'workshop' ? this.eventType === 'speaker' ? 'md:border-blue-400 md:bg-blue-400' : 'md:border-green-400 md:bg-green-400' : 'md:border-red-500 md:bg-red-500'" class="hidden h-full md:inline md:py-1 md:border rounded-l-full w-full md:w-auto md:col-span-1 md:h-full">
      <svg v-if="eventType === 'speaker'" class="h-full mx-auto my-auto" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
      <svg v-else-if="eventType === 'ctf'" class="h-full mx-auto my-auto" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
      <svg v-else-if="eventType === 'workshop'" class="h-full mx-auto my-auto" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
      <svg v-else-if="eventType === 'agm'" class="h-full mx-auto my-auto" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <div class="hidden h-full md:truncate md:text-center md:inline md:col-span-3 bg-white md:border-r-2 md:border-t-2 md:border-b-2 md:rounded-r-full pl-1">
      <p class="hidden md:inline font-semibold text-sm">{{ this.eventName }}</p>
    </div>
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
