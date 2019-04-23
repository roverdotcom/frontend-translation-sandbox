<template lang="pug">
  div
    h3.bg-vue.card {{bookingSummary()}}
    .bg-vue.card {{reminder()}}
</template>

<script lang="js">
import Vue from 'vue';
import { StateType } from '@rover/store';
import { appConstants } from '@rover/app/constants/translationConstants';
export default Vue.extend({
  props: ['state'],
  computed: {
    petList() {
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
