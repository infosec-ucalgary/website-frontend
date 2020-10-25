<template>
  <section class="py-8 md:w-1/2 mx-auto text-center">
    <NewCalendar />
    <br>
    <p class="font-display text-4xl">Events Calendar</p>
    <div class="mt-12">
      <p class="font-display text-2xl">Fall Semester</p>
      <div class="inline lg:overflow-x-auto lg:mx-0 lg:flex lg:scrolling-touch">
        <CalendarCard       date="21/09/2020" title="Workshop" desc="Intro to Kali and Linux Commands" />
        <CalendarDoubleCard date="28/09/2020" top_title="Workshop"  top_desc="Basics of Breaking into a Box" top_author="Josh"
                            bot_title="Workshop" bot_desc="Intro to Web Exploitation" bot_author="James" />
        <CalendarDoubleCard date="05/10/2020" top_title="Workshop" top_desc="Linux Privilege Escalation" top_author="James"
                            bot_title="Workshop" bot_desc="Intro to Cryptography" bot_author="Britta" />
        <CalendarDoubleCard date="19/10/2020" top_title="Workshop" top_desc="ROP Chains" top_author="Brandon"
                            bot_title="Workshop" bot_desc="Intro to Forensics" bot_author="James" />
        <CalendarCard       date="26/10/2020" title="Speaker" desc="Penetration Testing" author="Saminah Amin" />
        <CalendarDoubleCard date="02/11/2020" top_title="Workshop" top_desc="Block Ciphers" top_author="Braydon"
                            bot_title="Workshop" bot_desc="Reverse Engineering" bot_author="Jeremy" />
        <CalendarDoubleCard date="16/11/2020" top_title="Workshop" top_desc="Docker and its Exploitation" top_author="Alex"
                            bot_title="Workshop" bot_desc="SQL Code Injection" bot_author="James" />
        <CalendarCard       date="23/11/2020" title="Speaker" desc="Practical Cybersecurity & Cybercrime Prevention" author="Kathy Macdonald" />
        <CalendarDoubleCard date="30/11/2020" top_title="Workshop" top_desc="RSA" top_author="Braydon"
                            bot_title="Workshop" bot_desc="Binary Exploitation" bot_author="Jeremy" />
      </div>
    </div>
    <div class="mt-16">
      <p class="font-display text-2xl">Winter Semester</p>
      <div class="inline lg:overflow-x-auto lg:mx-0 lg:flex lg:scrolling-touch">
        <CalendarCard       date="18/01/2021" title="Workshop" desc="Wireshark" author="Braydon" />
        <CalendarCard       date="25/01/2021" title="Workshop" desc="Cross-Site Scripting" author="Emily" />
        <CalendarCard       date="01/02/2021" title="Workshop" desc="Shellcode" author="Brandon" />
        <CalendarCard       date="08/02/2021" title="Speaker" desc="Threat Intelligence" author="Adam McMath" />
        <CalendarCard       date="19/02/2021 - 21/02/2021" title="CTF" desc="magpieCTF" />
        <CalendarCard       date="22/02/2021" title="Workshop" desc="LLMNR Poisoning and NTLM Relay" author="Sunny" />
        <CalendarCard       date="01/03/2021" title="Speaker" desc="Contact Tracing Apps & Security" author=" Dr. Joel Reardon" />
        <CalendarCard       date="08/03/2021" title="Workshop" desc="Malware Analysis: Part 1" author="Jeremy" />
        <CalendarCard       date="15/03/2021" title="Workshop" desc="Malware Analysis: Part 2" author="Jeremy" />
        <CalendarCard       date="22/03/2021" title="Speaker" desc="The Hiring Process" author="Emilie Vincent" />
        <CalendarCard       date="29/03/2021" title="Workshop" desc="Web Traffic Analysis" author="Josh" />
      </div>
    </div>
  </section>

</template>

<script>
import CalendarCard from '@/components/CalendarCard.vue'
import CalendarDoubleCard from '@/components/CalendarDoubleCard.vue'
import NewCalendar from '@/components/NewCalendarComponent.vue'

export default {
  name: 'calendar',
  components: {
    CalendarCard,
    CalendarDoubleCard,
    NewCalendar
  },
  data () {
    return {
      value: null
    }
  }
}
</script>
