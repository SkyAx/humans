<template lang="pug">
  .h-card-container.ui.segment
    UserCard(:human="human")
    FriendRequestCard(
      v-for="(friend, idx) in human.friends"
      :key="idx"
      :friend="friend"
      :humanName="human.name.first"
    )
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Human } from '@/types/Human';
  import FriendRequestCard from '@/components/FriendRequestCard/FriendRequestCard.vue';
  import UserCard from '@/components/UserCard/UserCard.vue';

  @Component({
    name: 'HCard',
    components: {
      UserCard,
      FriendRequestCard
    }
  })
  export default class HButton extends Vue {
    @Prop() private human!: Human;
  }
</script>

<style lang="sass" scoped>
</style>
