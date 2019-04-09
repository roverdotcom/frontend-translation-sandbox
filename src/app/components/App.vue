<template lang="pug">
  .container Hello {{app}}
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      app: "Vue"
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>
