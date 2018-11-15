<template>
  <div class="uds-spacer" :style="margin"></div>
</template>

<script>
export default {
  name: "UDSSpacer",
  props: {
    top: {
      type: String,
      default: "10px"
    },
    bottom: {
      type: String,
      default: "10px"
    }
  },
  computed: {
    margin() {
      return { margin: `${this.top} ${this.bottom}` };
    }
  }
};
</script>

<style>
.uds-spacer {
  flex-grow: 1;
}
</style>
