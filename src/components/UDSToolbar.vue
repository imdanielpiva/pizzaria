<template>
  <div class="uds-toolbar">
    <button class="uds-toolbar__back-button ripple" @click="goBack">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        />
      </svg>
    </button>

    <h1 class="uds-toolbar__title"><slot name="title"></slot></h1>
  </div>
</template>

<script>
export default {
  name: "UDSToolbar",
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style>
.uds-toolbar {
  height: 58px;
  display: flex;
  align-items: center;
  background: #ed2621;
}

.uds-toolbar__title {
  margin-left: 8px;
  color: white;
  font-size: 24px;
  line-height: 36px;
}

.uds-toolbar__back-button {
  margin-left: 8px;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: 100%;
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}

.ripple:active {
  background-color: #ffffff83;
  background-size: 100%;
  transition: background 0.4s;
}
</style>
