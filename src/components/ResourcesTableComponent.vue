<template>
  <section class="py-8 w-full">
    <div class="shadow overflow-x-auto scrolling-touch rounded border-b border-gray-200">
      <table id="resources" class="min-w-full">
        <thead class="bg-primary text-white">
          <tr>
            <th class="hidden md:table-cell w-1/6 text-center py-3 px-4 uppercase font-semibold text-sm">Category</th>
            <th class="w-1/6 text-center py-3 px-4 uppercase font-semibold text-sm">Title</th>
            <th class="hidden md:table-cell w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">Link</th>
            <th class="hidden md:table-cell w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">Description</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 font-display">
          <tr v-for="(item, idx) in rows"
              v-bind:key="idx"
              v-on:click="gotoLink(item.link)"
              :class="idx % 2 == 1 ? 'bg-gray-100' : 'bg-white'">
            <td class="hidden md:table-cell w-1/6 text-left py-3 px-4">{{ item.category }}</td>
            <td class="w-1/6 text-left py-3 px-4">{{ item.title }}</td>
            <td class="hidden md:table-cell w-1/3 text-left py-3 px-4">{{ item.link }}</td>
            <td class="hidden md:table-cell w-1/3 text-left py-3 px-4">{{ item.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style>
tbody tr:hover {
  background-color: #89c0e9;
}

#resources thead {
  /* background-color: #12418f !important; */
  color: #FFF !important;
}
#resources tbody {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
<script>
import resourcesJson from '../assets/output.json'
export default {
  name: 'ResourcesTableComponent',
  data () {
    return {
      rows: JSON.parse(JSON.stringify(resourcesJson['data'])),
      currentSort: 'category',
      currentSortDir: 'asc',
      reverse: false
    }
  },
  methods: {
    gotoLink: function (itm) {
      window.open(itm)
    },
    sort: function (k) {
      this.reverse = (this.currentSort === k) ? !this.reverse : false
      this.currentSort = k
    }
  },
  computed: {
  },
  watch: {
  }
}
</script>
