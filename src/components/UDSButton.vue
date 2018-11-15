<template>
  <button
    @click="emitClick"
    :class="buttonClasses"
    :disabled="disabled || loading"
  >
    <div class="uds-button__content">
      <UDSLoader v-model="loading" />

      <span><slot></slot></span>
    </div>
  </button>
</template>

<script>
export default {
  name: "UDSButton",
  components: {
    UDSLoader: () => import("@/components/UDSLoader")
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return `uds-button ${this.isDisabled && "uds-button--disabled"}`;
    },
    isDisabled() {
      return this.disabled || this.loading;
    }
  },
  methods: {
    emitClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style>
.uds-button {
  cursor: pointer;
  margin: 4px;
  padding: 11px 16px;
  border: 3px solid #ed2621;
  border-radius: 4px;
  background: #ed2621;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.uds-button span {
  color: white;
  font-weight: 700;
}

.uds-button:hover {
  border-color: #ed2621;
  background: white;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
}

.uds-button:hover span {
  color: #ed2621;
  transition: all 0.3s ease-in-out;
}

.uds-button--disabled {
  cursor: not-allowed;
  border-color: #7c7c7c;
  background: white;
  box-shadow: none;
}

.uds-button--disabled span {
  color: #b4b4b4;
}

.uds-button--disabled:hover {
  border-color: #b4b4b4;
  background: white;
  box-shadow: none;
}

.uds-button--disabled:hover span {
  color: #b4b4b4;
  transition: all 0.3s ease-in-out;
}

.uds-button__content {
  display: flex;
  align-items: center;
}
</style>
