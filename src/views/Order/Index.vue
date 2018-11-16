<template>
  <div class="uds-order">
    <UDSToolbar><div slot="title">Pizza</div></UDSToolbar>

    <div class="uds-order__page-content"><router-view></router-view></div>
  </div>
</template>

<script>
import UDSToolbar from "@/components/UDSToolbar";

export default {
  name: "UDSOrderIndex",
  components: {
    UDSToolbar
  }
};
</script>

<style>
.uds-order__page-content {
  margin: auto;
  max-width: 500px;
  padding: 20px;
}
</style>
