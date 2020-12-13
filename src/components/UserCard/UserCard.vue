<template lang="pug">
  .h-card.ui.card
    .image
      img(:src="human.picture.large")
    .content
      a.header {{ human.name.first }}
      .meta
        span.date Joined in {{ human.registered.date }}
      .description
        | {{ human.name.first }} living in {{ human.location.city }}.
    .extra.content
      a
        i.user.icon
        | {{ human.name.first }} has {{ friends.length }} friend requests
</template>

<script lang="ts">
    import { Component, Prop, Emit, Vue } from "vue-property-decorator";

    @Component({
      name: 'UserCard',
      components: {
        HButton
      }
    })
    export default class UserCard extends Vue {
      @Prop()
    };
  };
</script>

<style scoped>

</style>
