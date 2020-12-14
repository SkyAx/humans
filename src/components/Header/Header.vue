<template lang="pug">
  .header.ui.continer.fluid
    HLogo
    HInput(@input="filterByString")
    .controls
      router-link.ui.green.button(:to="'/'") Home
      router-link.ui.button(:to="'/history'") History
</template>

<script lang="ts">
  import HInput from '@/components/shared/HInput/HInput.vue';
  import HLogo from '@/components/shared/HLogo/HLogo.vue';
  import { Component, Vue } from 'vue-property-decorator';
  import { mapActions } from 'vuex';

  @Component({
    components: {
      HInput,
      HLogo
    },
    methods: {
      ...mapActions('humans', ['FILTER_BY_STR']),
      filterByString(str: string) {
        setTimeout(() => {
          (this as any).FILTER_BY_STR(str);
        }, 100);
      }
    }
  })
  export default class Header extends Vue{
  };
</script>

<style lang="sass" scoped>
  .header
    padding: 10px 20px
    display: flex
    align-items: center
    justify-content: flex-start

    .logo
      margin-right: 20px

    .controls
      margin-left: 40px


</style>
