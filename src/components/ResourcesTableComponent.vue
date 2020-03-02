<template>
  <div id="cal">
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
    <!--
    <table>
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
    -->
  </div>
</template>
<style>
#cal thead {
  background-color: #343A40 !important;
  color: #FFF !important;
}
#cal tbody {
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
      selectedItem: null
    }
  },
  methods: {
    gotoLink: function () {
      window.open(this.selectedItem.link)
    }
  }
}
</script>
