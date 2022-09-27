<template>
  <div class="mt-16">
    <div class="mx-auto mb-4 text-center">
      <MailchimpComponent />
    </div>
    <div id="" class="pb-6 w-full text-center inline-block align-middle">
      <span>We are a group of students from the University of Calgary who are dedicated to learning cyber security<br/> &copy; 2021 - Present</span>
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
