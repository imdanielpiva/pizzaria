<template>
  <router-link class="uds-link" :to="to">
    <span><slot class="uds-link__content"></slot></span>
  </router-link>
</template>

<script>
export default {
  name: "UDSLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  }
};
</script>

<style>
.uds-link {
  width: calc(100% - ((16px * 2) + (4px * 2) + 2px));
  text-align: center;
  display: inline-block;
  margin: 4px;
  padding: 10px 16px;
  font-weight: 700;
  border: 2px solid #ed2621;
  border-radius: 4px;
  background: white;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.uds-link span {
  color: #ed2621;
}

.uds-link:hover {
  border-color: #ed2621;
  background: #ed2621;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
}

.uds-link:hover span,
a {
  color: white;
  transition: all 0.3s ease-in-out;
}
</style>
