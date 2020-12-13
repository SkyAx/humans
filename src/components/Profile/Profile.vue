<template lang="pug">
  .h-card-container.ui.segment
    .user-cart
      UserCard(:user="user")
    .network-lists
      .network-list
        h2.ui.green.header Network Request
        .network-request-cards
          NetworkRequestCard(
            v-for="(request, idx) in user.networkRequests"
            :key="idx"
            :networkRequest="request"
            @onApproveRequest="approveNetworkRequest"
            @onDeclineRequest="declineNetworkRequest"
          )
      .network-list
        h2.ui.blue.header My Network
        .network-request-cards
          NetworkRequestCard(
            v-for="(request, idx) in user.network"
            :key="idx"
            :networkRequest="request"
          )
      .network-list
        h2.ui.red.header Decline Requests
        .network-request-cards
          NetworkRequestCard(
            v-for="(request, idx) in user.declinedRequest"
            :key="idx"
            :networkRequest="request"
          )
  </template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Human } from '@/types/Human';
  import NetworkRequestCard from '@/components/NetworkRequestCard/NetworkRequestCard.vue';
  import UserCard from '@/components/UserCard/UserCard.vue';
  import { mapActions } from 'vuex';

  @Component({
    name: 'Profile',
    components: {
      NetworkRequestCard,
      UserCard
    },
    methods: {
      ...mapActions('humans', ['APPROVE_AS_NETWORK', 'DECLINE_AS_NETWORK']),
      approveNetworkRequest({ event, request }) {
          (this as any).APPROVE_AS_NETWORK({
            user: (this as any).user,
            networkRequest: request
        });
      },
      declineNetworkRequest({event, request}) {
          (this as any).DECLINE_AS_NETWORK({
              user: (this as any).user,
              networkRequest: request
          });
      }
    }
  })
  export default class HButton extends Vue {
    @Prop() private user!: Human;
  }
</script>

<style lang="sass" scoped>
  .h-card
    &-container
      display: flex

  .network-lists
    padding: 0 20px
    display: grid
    grid-template-columns: 1fr 1fr 1fr

  .network-list

    &:not(:last-child)
      margin-right: 40px

    h2
      padding: 0 20px

  .network-request-cards
    height: 380px
    overflow-y: scroll
    overflow-x: hidden
</style>
