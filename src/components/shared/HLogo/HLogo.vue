<template lang="pug">
  router-link.logo(:to="'/'")
    img(src="@/assets/logo.png")
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default class HLogo extends Vue{
  };
</script>

<style lang="sass">
  .logo
    width: 60px
    height: 60px
    display: inline-block

    img
      max-width: 100%
</style>
