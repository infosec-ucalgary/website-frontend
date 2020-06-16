<template>
  <section class="py-8 md:w-1/3 mx-auto text-center">
    <p class="font-display text-4xl">Events Calendar</p>
    <div class="inline lg:overflow-x-auto lg:mx-0 lg:flex lg:scrolling-touch">
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
      <CalendarCard title="TBA" date="??/??/2020" desc="Stay tuned for Fall 2020!" />
    </div>
  </section>

  <!--
  <i-container class="_text-center">
    <i-row>
      <i-column xs="12">
        <h1>Events Calendar</h1>
      </i-column>
    </i-row>
    <i-row>
      <i-column xs="12" class="_text-center">
        <i-table striped style="margin: auto; width: 500px;">
          <thead>
            <tr>
              <th>Date</th><th>Topic</th><th>Presenter</th><th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">2020/01/27</th><td>Virtual Machines and Terminal Commands</td><td>Jeremy and Braydon</td><td>ICT 102</td>
            </tr>
            <tr>
              <th scope="row">2020/02/03</th><td>Intro to Web Exploitation</td><td>Alex</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/02/10</th><td>Intro to Binary Exploitation - Buffer Overflows</td><td>Jeremy</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/02/24</th><td>Intro to Crypto and Modular Arithmatic</td><td>Himika</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/03/02</th><td>Intro to Reverse Engineering</td><td>Jeremy</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/03/09</th><td>Intro to Forensics</td><td>Braydon</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/03/16</th><td>Cross Site Scripting (XSS)</td><td>Josh</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/03/23</th><td>SQL and SQL Injections</td><td>Alex</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/03/30</th><td>Binary Exploitation Part II - Electric Boogaloo</td><td>Jeremy</td><td>ENG 60</td>
            </tr>
            <tr>
              <th scope="row">2020/04/06</th><td>TBD</td><td>TBD</td><td>TBD</td>
            </tr>
          </tbody>
        </i-table>
      </i-column>
    </i-row>
  </i-container>
  -->
</template>

<script>
import CalendarCard from '@/components/CalendarCard.vue'

export default {
  name: 'calendar',
  components: {
    CalendarCard
  },
  data () {
    return {
      value: null
    }
  }
}
</script>
