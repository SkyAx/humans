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
          )
      .network-list
        h2.ui.blue.header My Network
        NetworkRequestCard(
          v-for="(request, idx) in user.network"
          :key="idx"
          :networkRequest="request"
        )
      .network-list
        h2.ui.red.header Decline Requests
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
    computed: {
      ...mapActions('humans', ['APPROVE_AS_NETWORK'])
    },
    methods: {
      approveNetworkRequest: ({ event: Event, request: Human }) => {
        this.APPROVE_AS_NETWORK({
            user: this.user,
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
