<template>
  <i-container class="_text-center">
    <i-row>
      <i-column xs="12">
        <h1>Events Calendar</h1>
      </i-column>
    </i-row>
    <i-row center-xs>
      <i-column xs="12">
        <CalendarComponent/>
        <br>
      </i-column>
    </i-row>
    <i-row>
      <i-column xs="12">
        <i-table striped>
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
              <th scope="row">2020/03/16</th><td>Scripting with Bash and Python</td><td>Josh</td><td>ENG 60</td>
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
</template>

<script>
import CalendarComponent from '@/components/CalendarComponent.vue'

export default {
  name: 'calendar',
  components: {
    CalendarComponent
  }
}
</script>
