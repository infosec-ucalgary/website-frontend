<template>
  <div>
    <div id="" class="pb-6 w-full text-center inline-block align-middle">
      <span>We are a group of students from the University of Calgary who are dedicated to learning cyber security - &copy;2020</span>
    </div>
    <div class="mx-auto mb-4 text-center">
      <MailchimpComponent />
    </div>
  </div>
</template>
<script>
import MailchimpComponent from '@/components/MailchimpComponent.vue'

export default {
  name: 'FooterComponent',
  components: {
    MailchimpComponent
  }
}
</script>
