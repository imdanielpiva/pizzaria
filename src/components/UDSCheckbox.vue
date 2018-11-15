<template>
  <div :class="wrapperClasses">
    <input
      @input="updateValue"
      :id="id"
      :name="name"
      :checked="value"
      :disabled="disabled"
      type="checkbox"
      class="uds-checkbox__input"
      autocomplete="new-password"
    />

    <label :for="id" class="uds-checkbox__label">
      <slot name="label"></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "UDSCheckbox",
  props: {
    value: Boolean,
    disabled: Boolean,
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    id() {
      return `uds-checkbox-${this._uid}`;
    },
    wrapperClasses() {
      return `uds-checkbox ${this.value ? "uds-checkbox--checked" : ""}`;
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
.uds-checkbox {
  width: calc(100% - ((12px * 2) + 2px));
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #ed2621;
  border-radius: 4px;
  margin: 4px 0;
  padding: 0 12px;
}

.uds-checkbox--checked {
  background: rgba(255, 121, 118, 0.4) !important;
}

.uds-checkbox__input {
  width: 16px;
  height: 16px;
  outline: none;
  border: 2px solid #999;
  border-radius: 2px;
  margin: 0 6px 0 0;
  transition: 0.2s all linear;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.uds-checkbox__input:checked {
  border: 6px solid #24292e;
}

.uds-checkbox__label {
  display: flex;
  cursor: pointer;
  padding: 12px 4px;
  flex-grow: 1;
}
</style>
