<template>
  <div class="text-center">
    <p class="font-body text-3xl">Need to pay your club fees?</p>
    <button class="my-6 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-12 rounded-full" @click="showModal">
      Click Here
    </button>
    <modal
      name="payment"
      :adaptive="true"
      :height="auto"
      :minHeight="350">
      <p class="font-bold text-2xl my-4">Paying Club Fees<p>
      <p class="text-xl mx-6 mb-6">
        To pay club fees, transfer $10 to infosec.ucalgary@gmail.com
      </p>
      <p class="text-xl mx-6">
        Please include your name, email and Discord username (if you have one) in the message.  Make sure to include your four-digit Discord identifier.
      </p>
      <button class="my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="hideModal">
        Close
      </button>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'PaymentModal',
  methods: {
    showModal: function () {
      this.$modal.show('payment')
    },
    hideModal: function () {
      this.$modal.hide('payment')
    }
  }
}
</script>
