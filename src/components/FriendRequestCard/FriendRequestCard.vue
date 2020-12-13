<template lang="pug">
  .h-friend-card.ui.cards
    .card
      .content
        img.right.floated.mini.ui.image(:src="friend.picture.thumbnail")
        .header
          | {{ friend.name.first }} {{ friend.name.last }}
        .meta
          | from {{ friend.location.city }}
        .description
          | {{ friend.name.first }} requested permission to view your contact details
      .extra.content
        .ui.two.buttons
          HButton(:text="'Approve'" :green="true" @click="onApproveRequest")
          HButton(:text="'Decline'" :red="true" @click="onDeclineRequest")
</template>

<script lang="ts">
  import { Component, Prop, Emit, Vue } from "vue-property-decorator";
  import HButton from '@/components/shared/HButton/HButton.vue';

  @Component({
    name: 'FriendRequestCard',
    components: {
      HButton
    }
  })
  export default class FriendRequestCard extends Vue {
    @Prop() private friend!: [object];
    @Prop() private humanName!: string;
    @Emit('onApproveRequest')
    onApproveRequest(e: Event) {
      return e;
    }
    @Emit('onDeclineRequest')
    onDeclineRequest(e: Event) {
      return e;
    }
  };
</script>

<style scoped>

</style>
