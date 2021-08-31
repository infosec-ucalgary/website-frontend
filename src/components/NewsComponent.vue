<style scoped>
    a:visited {
        color: #06239F;
    }
    a:hover {
        text-decoration: underline;
        color: #06239F;
    }
</style>

<template>
    <section class="h-14 relative">
      <div class="text-left">
        <b><a class="text-lg" :href="path" target="_blank">{{title}} </a></b>
        <div>
          <p class="font-body font-light"> {{source}} | {{date}} </p>
        </div>
      </div>
    </section>
</template>

<style>
</style>

<script>
export default {
  name: 'NewsComponent',
  props: [
    'title',
    'source',
    'date',
    'path'
  ]
}
</script>
