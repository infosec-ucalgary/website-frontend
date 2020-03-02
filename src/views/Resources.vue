<template>
  <div class="_text-center _width-75" style="margin: auto;">
    <br>
    <span class="h1">Resources List</span>
    <br>
    <br>
    <ResourcesTableComponent />
  </div>
</template>
<script>
import ResourcesTableComponent from '@/components/ResourcesTableComponent'

export default {
  name: 'Resources',
  components: {
    ResourcesTableComponent
  }
}
</script>
