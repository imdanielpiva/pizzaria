<template>
  <div :class="wrapperClasses">
    <input
      @input="updateValue"
      :id="id"
      :name="name"
      :checked="value"
      :disabled="disabled"
      type="radio"
      class="uds-radio__input"
      autocomplete="new-password"
    />

    <label :for="id" class="uds-radio__label">
      <slot name="label"></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "UDSRadio",
  props: {
    value: [Boolean, undefined],
    name: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    id() {
      return `uds-radio-${this._uid}`;
    },
    wrapperClasses() {
      return `uds-radio ${this.value ? "uds-radio--checked" : ""}`;
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.checked);
    }
  }
};
</script>

<style>
.uds-radio {
  width: calc(100% - ((12px * 2) + 2px));
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #ed2621;
  border-radius: 4px;
  margin: 4px 0;
  padding: 0 12px;
}

.uds-radio--checked {
  background: rgba(255, 121, 118, 0.4) !important;
}

.uds-radio__input {
  width: 16px;
  height: 16px;
  outline: none;
  border: 2px solid #999;
  border-radius: 50%;
  margin: 0 6px 0 0;
  transition: 0.2s all linear;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.uds-radio__input:checked {
  border: 6px solid #24292e;
}

.uds-radio__label {
  display: flex;
  cursor: pointer;
  padding: 12px 4px;
  flex-grow: 1;
}
</style>
