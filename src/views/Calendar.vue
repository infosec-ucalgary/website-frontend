<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <p class="font-display text-4xl">Events Calendar</p>
    <div class="inline lg:overflow-x-auto lg:mx-0 lg:flex lg:scrolling-touch">
      <CalendarDoubleCard top_title="Meeting" top_date="28/09/2020" top_desc="Linux Commands and Tools"
                          bot_title="Meeting" bot_date="28/09/2020" bot_desc="Kali VM setup and Linux Commands" />
      <CalendarDoubleCard top_title="Meeting" top_date="05/10/2020" top_desc="Breaking into a Box"
                          bot_title="Meeting" bot_date="05/10/2020" bot_desc="Intro to Web Exploitation" />
      <CalendarDoubleCard top_title="Meeting" top_date="19/10/2020" top_desc="RSA"
                          bot_title="Meeting" bot_date="19/10/2020" bot_desc="Intro to Cryptography" />
      <CalendarCard title="Speaker" date="26/10/2020" desc="Speaker Series Part #1" />
      <CalendarDoubleCard top_title="Meeting" top_date="02/11/2020" top_desc="ROP Chains"
                          bot_title="Meeting" bot_date="02/11/2020" bot_desc="Intro to Binary Exploitation" />
      <CalendarDoubleCard top_title="Meeting" top_date="16/11/2020" top_desc="Wireshark"
                          bot_title="Meeting" bot_date="16/11/2020" bot_desc="Intro to Forensics" />
      <CalendarCard title="Speaker" date="23/11/2020" desc="Speaker Series Part #2" />
      <CalendarDoubleCard top_title="Meeting" top_date="30/11/2020" top_desc="Hex Editing"
                          bot_title="Meeting" bot_date="30/11/2020" bot_desc="Intro to Reverse Engineering" />
      <CalendarDoubleCard top_title="Meeting" top_date="18/01/2021" top_desc="TBA"
                          bot_title="Meeting" bot_date="18/01/2021" bot_desc="SQL Injections" />
      <CalendarDoubleCard top_title="Meeting" top_date="25/01/2021" top_desc="Block Ciphers"
                          bot_title="Meeting" bot_date="25/01/2021" bot_desc="RSA" />
      <CalendarDoubleCard top_title="Meeting" top_date="01/02/2021" top_desc="TBA"
                          bot_title="Meeting" bot_date="01/02/2021" bot_desc="XSS" />
      <CalendarCard title="Speaker" date="08/02/2021" desc="Speaker Series #3" />
      <CalendarCard title="CTF" date="19/02/2021 - 21/02/2021" desc="You've seen some fancy cooking, are you ready for more?" />
      <CalendarDoubleCard top_title="Meeting" top_date="22/02/2021" top_desc="LMNR Poisoning and NTLM Relay"
                          bot_title="Meeting" bot_date="22/02/2021" bot_desc="TBA" />
      <CalendarCard title="Speaker" date="01/03/2021" desc="Speaker Series #4" />
      <CalendarCard title="Meeting" date="08/03/2021" desc="Malware Analysis" />
      <CalendarCard title="Speaker" date="22/03/2021" desc="Speaker Series #5" />
      <CalendarCard title="Meeting" date="29/03/2021" desc="Port Scanning" />
    </div>
  </section>

</template>

<script>
import CalendarCard from '@/components/CalendarCard.vue'
import CalendarDoubleCard from '@/components/CalendarDoubleCard.vue'

export default {
  name: 'calendar',
  components: {
    CalendarCard,
    CalendarDoubleCard
  },
  data () {
    return {
      value: null
    }
  }
}
</script>
