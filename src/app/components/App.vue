<template lang="pug">
  div
    h3.bg-vue.card {{bookingSummary}}
    .bg-vue.card {{reminder}}
</template>

<script lang="ts">
import Vue from 'vue';
import something from '@rover/utilities/translation';
export default Vue.extend({
  data() {
    const petList = global.Rover.context.petList;
    return {
      reminder:
        `Make sure all the information for ${petList.join(", ")} is up-to-date for your sitter`,
      bookingSummary: `Booking for ${petList.length} pet`,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
