<template lang="pug">
  .network-request-card
    .ui.cards
      .card
        .content
          img.right.floated.mini.ui.image(:src="networkRequest.thumb")
          .header
            | {{ networkRequest.fullName }}
          .meta
            | from {{ networkRequest.city }}
          .description
            | {{ networkRequest.fullName }} requested permission to view your contact details
        .extra.content
          .ui.two.buttons
            HButton(:text="'Approve'" :green="true" @click="onApproveRequest")
            HButton(:text="'Decline'" :red="true" @click="onDeclineRequest")
</template>

<script lang="ts">
  import { Component, Prop, Emit, Vue } from "vue-property-decorator";
  import { Human } from '@/types/Human';
  import HButton from '@/components/shared/HButton/HButton.vue';

  @Component({
    name: 'NetworkRequestCard',
    components: {
      HButton
    }
  })
  export default class NetworkRequestCard extends Vue {
    @Prop() private networkRequest!: Human;
    @Emit('onApproveRequest')
    onApproveRequest(e: Event) {
      return {
        event: e,
        request: this.networkRequest
      };
    }
    @Emit('onDeclineRequest')
    onDeclineRequest(e: Event) {
      return {
        event: e,
        request: this.networkRequest
      };
    }
  };
</script>

<style lang="sass">
  .network-request-card
    padding: 10px 20px
</style>
