<template>
  <div @click="modal = !modal" :class="checkIfCurrentDate() ? 'bg-green-100' : ''" class="h-16 md:h-48 bg-white px-2 text-left">
    <div :class="checkIfCurrentDate() ? 'underline font-bold' : ''">{{ this.day }}</div>
    <div class="flex flex-col">
      <Event v-for="e in events" :key="events.indexOf(e)" :eventName="e.eventName" :eventAuthor="e.eventAuthor" :eventType="e.eventType"/>
    </div>
    <!-- Thanks TailwindUI for this -->
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!--
             Background overlay, show/hide based on modal state.

             Entering: "ease-out duration-300"
             From: "opacity-0"
             To: "opacity-100"
             Leaving: "ease-in duration-200"
             From: "opacity-100"
             To: "opacity-0"
        -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <!--
             Modal panel, show/hide based on modal state.

             Entering: "ease-out duration-300"
             From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
             To: "opacity-100 translate-y-0 sm:scale-100"
             Leaving: "ease-in duration-200"
             From: "opacity-100 translate-y-0 sm:scale-100"
             To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Events for {{ day }}/{{ month + 1 }}/{{ year }}
                </h3>
                <div class="mt-2">
                  <p v-if="events.length === 0" class="text-sm text-gray-500">
                    There are no events on {{ day }}/{{ month + 1 }}/{{ year }}.
                  </p>
                  <ul v-else class="text-sm text-gray-700">
                    <li v-for="e in events" :key="events.indexOf(e)">
                      <i v-if="e.eventTime">{{ e.eventTime }} - </i><b>{{ printType(e.eventType) }}</b>: {{ e.eventName }} - {{ e.eventAuthor }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
export default {
  name: 'CalendarBox',
  components: {
    Event
  },
  props: ['day', 'month', 'year', 'events'],
  data () {
    return {
      modal: false
    }
  },
  methods: {
    checkIfCurrentDate: function () {
      let currentDate = new Date()
      return this.day === currentDate.getDate() && this.month === currentDate.getMonth() && this.year === currentDate.getUTCFullYear()
    },
    printType: function (t) {
      return (t !== 'workshop') ? (t === 'ctf') ? 'CTF' : 'Speaker' : 'Workshop'
    }
  }
}
</script>
