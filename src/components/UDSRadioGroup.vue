<template>
  <div>
    <UDSRadio
      @input="updateSelected(index);"
      v-model="options[index].checked"
      v-for="(option, index) in options"
      :name="name"
      :key="`input-radio-group-${index}`"
    >
      <span slot="label">{{ option.label }}</span>
    </UDSRadio>

    <div v-if="error" class="uds-radio-group__error">
      <h3 class="uds-radio-group__error-title">Atenção</h3>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import UDSRadio from "@/components/UDSRadio";

export default {
  name: "UDSRadioGroup",
  components: { UDSRadio },
  props: {
    name: {
      type: String
    },
    value: {
      type: [Object, String, Number, Boolean],
      default: ""
    },
    options: {
      type: [Array],
      default: () => []
    },
    error: {
      type: [String, Boolean],
      default: false
    }
  },
  data: () => ({ selected: null }),
  methods: {
    updateSelected(optionIndex) {
      if (this.selected) {
        this.selected.checked = false;
      }

      this.selected = this.options[optionIndex];
      this.selected.checked = true;

      this.$emit("input", this.selected);
      this.$forceUpdate();
    }
  }
};
</script>

<style>
.uds-radio-group__error {
  width: 100%;
  margin: 16px 0;
}

.uds-radio-group__error-title {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}
</style>
