<template lang="pug">
  .h-card-container.ui.segment
    FriendRequestCard(v-for="friend in friends" :friend="friend" :humanName="human.name.first")
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import FriendRequestCard from '@/components/FriendRequestCard/FriendRequestCard.vue';

  @Component({
    name: 'HCard',
    components: {
      FriendRequestCard
    }
  })
  export default class HButton extends Vue {
    @Prop() private human!: object;
    //TODO: Move to type
    @Prop() private friends!: [object];
  }
</script>

<style lang="sass" scoped>
  .h-card
    width: 320px

    &-container
      display: flex

    &-friends-requests-list
      margin-top: 15px
      padding: 10px 0
      max-height: 540px
      overflow-y: scroll
      overflow-x: hidden
</style>
