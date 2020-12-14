<template lang="pug">
  .ui.input
    input(@input="oninput" v-model="newValue" type="text" placeholder="Search...")
</template>

<script lang="ts">
  import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

  @Component({
    name: 'HInput',
    data() {
      return {
        newValue: (this as any).value || ''
      }
    }
  })
  export default class HInput extends Vue {
    @Prop() private value!: string;
    @Emit('input')
    oninput(e: Event): string | null {
      return (e.target as any).value;
    }
  };
</script>

<style scoped>

</style>
