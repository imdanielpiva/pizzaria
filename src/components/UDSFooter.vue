<template>
  <footer class="uds-footer"><slot name="content"></slot></footer>
</template>

<script>
export default {
  name: "UDSFooter"
};
</script>

<style>
.uds-footer {
  margin: auto;
  max-width: 500px;
  display: flex;
  align-items: center;
  padding: 12px;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-top: 1px solid #dedede;
  background: white;
}
</style>
