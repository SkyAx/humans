<template lang="pug">
  .h-card.ui.card
    .image(v-if="user.image")
      img(:src="user.image")
    .content(v-if="user.fullName")
      a.header {{ user.fullName }}
      .meta
        span.date Joined in {{ user.registered }}
      .description(v-if="user.fullName && user.city")
        | {{ user.fullName }} living in {{ user.city }}.
    .extra.content
      a
        i.user.icon
        | {{ user.fullName }} has {{ user.network.length }} friends
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { Human } from '@/types/Human';

    @Component({
      name: 'UserCard'
    })
    export default class UserCard extends Vue {
      @Prop() private user!: Human;
    };
</script>

<style scoped>

</style>
