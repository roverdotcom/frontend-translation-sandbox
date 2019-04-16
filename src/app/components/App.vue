<template lang="pug">
  div
    h3.bg-vue.card {{bookingSummary()}}
    .bg-vue.card {{reminder()}}
</template>

<script lang="ts">
import Vue from 'vue';
import something from '@rover/utilities/translation';
import { StateType } from '@rover/store';
export default Vue.extend({
  props: ['state'],
  computed: {
    petList(): string[] {
      return this.state.petList;
    },
  },
  methods: {
    reminder() {
      return `Make sure all the information for ${this.petList.join(
        ', '
      )} is up-to-date for your sitter`;
    },
    bookingSummary() {
      return `Booking for ${this.petList.length} pet`;
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
