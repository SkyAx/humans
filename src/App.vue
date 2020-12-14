<template lang="pug">
  #app
    Header
    router-view
</template>

<script lang="ts">
  import Header from '@/components/Header/Header.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'App',
    components: {
      Header
    }
  })
  export default class App extends Vue {
  }
</script>

<style>
</style>
