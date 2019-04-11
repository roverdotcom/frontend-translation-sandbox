<template lang="pug">
  .container Hello {{app}}
</template>

<script lang="ts">
import Vue from "vue";
import something from '@rover/utilities/translation';
export default Vue.extend({
  data() {
    console.log(something);
    return {
      app: "Vue",
      someString: "some string"
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>
