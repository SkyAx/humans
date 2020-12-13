<template lang="pug">
  .container
    HCard(
      v-if="humans.length"
      v-for="(human, idx) in humans"
      :key="idx"
      :human="human"
      :friends="human.friends"
    )
</template>

<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';
  import { Component, Vue } from 'vue-property-decorator';
  import HButton from '@/components/shared/HButton/HButton.vue';
  import HCard from "@/components/shared/HCard/HCard.vue";

  @Component({
      name: 'Main',
      components: {
        HButton,
        HCard
      },
      computed: {
        ...mapGetters({
          humans: 'humans/HUMANS'
        })
      },
      methods: {
        ...mapActions('humans', ['createList'])
      },
      created() {
        this.createList();
      }
  })
  export default class Main extends Vue {
  }
</script>

<style lang="sass" scoped>
</style>
