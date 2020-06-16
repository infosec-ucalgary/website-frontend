<template>
  <div class="py-8 text-center w-3/4 mx-auto">
    <br>
    <p class="font-display text-4xl">Resources List</p>
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
