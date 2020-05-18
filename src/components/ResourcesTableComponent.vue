<template>
  <section id="resources">
    <table class="table-auto">
      <thead>
        <tr>
          <th @click="currentSort = 'category'; sort('category')">Category</th>
          <th @click="currentSort = 'title'; sort('title')">Title</th>
          <th @click="currentSort = 'link'; sort('link')">Link</th>
          <th @click="currentSort = 'desc'; sort('desc')">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in rows"
            v-bind:key="idx"
            v-on:click="gotoLink(item.link)">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.link }}</td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>

    <!--
    <DataTable :value="rows"
               :resizableColumns="true"
               :autoLayout="true"
               :selection.sync="selectedItem"
               columnResizeMovde="fit"
               selectionMode="single"
               v-on:row-select="gotoLink"
    >
      <template #empty>
        Unable to retrieve any records...
      </template>
      <Column field="category" header="Category" :sortable="true"></Column>
      <Column field="title" header="Title" :sortable="true"></Column>
      <Column field="link" header="Link"></Column>
      <Column field="desc" header="Description"></Column>
      <template #footer>
      </template>
    </DataTable>
    <table>
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
    -->
  </section>
</template>
<style>
#resources thead {
  background-color: #343A40 !important;
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
