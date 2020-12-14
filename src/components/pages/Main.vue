<template lang="pug">
  .main
    .ui.container.fluid
      Profile(
        v-if="humans.length && !filteredHumans.length"
        v-for="(human, idx) in humans"
        :key="idx"
        :user="human"
      )
      Profile(
        v-if="filteredHumans.length"
        v-for="(human, idx) in filteredHumans"
        :key="idx"
        :user="human"
      )
</template>

<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';
  import { Component, Vue } from 'vue-property-decorator';
  import HButton from '@/components/shared/HButton/HButton.vue';
  import Profile from '@/components/Profile/Profile.vue';

  @Component({
      name: 'Main',
      components: {
        HButton,
        Profile
      },
      computed: {
        ...mapGetters({
          humans: 'humans/HUMANS',
          filteredHumans: 'humans/FILTERED_HUMANS'
        })
      },
      methods: {
        ...mapActions('humans', ['CREATE_USERS'])
      },
      created() {
        this.CREATE_USERS(100);
      }
  })
  export default class Main extends Vue {
  }
</script>

<style lang="sass" scoped>
  .main
    padding: 10px 20px
</style>
