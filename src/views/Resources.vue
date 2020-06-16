<template>
  <div class="text-center w-3/4 mx-auto">
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
