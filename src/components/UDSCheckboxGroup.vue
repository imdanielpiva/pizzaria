<template>
  <div>
    <UDSCheckbox
      @input="updateSelected(index);"
      v-model="options[index].checked"
      v-for="(option, index) in options"
      :name="option.name"
      :disabled="option.disabled"
      :key="`input-checkbox-group-${index}`"
    >
      <span slot="label">{{ option.label }}</span>
    </UDSCheckbox>
  </div>
</template>

<script>
import UDSCheckbox from "@/components/UDSCheckbox.vue";

export default {
  name: "UDSCheckboxGroup",
  components: { UDSCheckbox },
  props: {
    value: {
      type: Array,
      default: () => []
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
  data: () => ({ selected: [] }),
  methods: {
    updateSelected(optionIndex) {
      const option = this.options[optionIndex];

      if (option.checked === true) {
        this.selected.push(option);
      } else {
        const selectedIndex = this.selected.findIndex(
          ({ checked }) => checked === false
        );

        if (selectedIndex >= 0) {
          this.selected.splice(selectedIndex, 1);
        }
      }

      this.$emit("input", this.selected);
      this.$forceUpdate();
    }
  }
};
</script>
