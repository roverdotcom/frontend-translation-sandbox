<template lang="pug">
  .container {{someString}}
</template>

<script lang="ts">
import Vue from "vue";
import something from '@rover/utilities/translation';
export default Vue.extend({
  data() {
    return {
      app: "Vue",
      someString: "We’re The Dog People. The nation’s largest network of 5‑star pet sitters and dog walkers."
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>
