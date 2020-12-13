<template lang="pug">
  .h-card.ui.card
    .image(v-if="human.image")
      img(:src="human.image")
    .content(v-if="human.fullName")
      a.header {{ human.fullName }}
      .meta
        span.date Joined in {{ human.registered }}
      .description(v-if="human.fullName && human.city")
        | {{ human.fullName }} living in {{ human.city }}.
    .extra.content
      a
        i.user.icon
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({
      name: 'UserCard'
    })
    export default class UserCard extends Vue {
      @Prop() private human!: [object];
    };
</script>

<style scoped>

</style>
