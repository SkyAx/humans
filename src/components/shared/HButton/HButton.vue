<template lang="pug">
  button.h-button(@click="buttonClick"
    :class="fullClassName") {{ text }}
</template>

<script lang="ts">
  import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

  @Component({
    name: 'HButton',
    computed: {
      fullClassName() {
          return 'ui'
            + `${ this.primary ? ' primary' : this.green ? ' green' : this.red ? ' red': ''}`
            + ' button';
      }
    }
  })
  export default class HButton extends Vue {
    @Prop() private text!: string;
    @Prop({ default: false }) primary!:boolean;
    @Prop({ default: false }) green!: boolean;
    @Prop({ default: false }) red!: boolean;
    @Emit('click')
    buttonClick(e: Event) {
      return e;
    }
  }
</script>

<style scoped>

</style>
