<template>
  <div>
    <div class="slideInRight fadeIn">
      <h2>Adicionais</h2>

      <UDSCheckboxGroup v-model="addOns" :options="options" />
    </div>

    <UDSFooter>
      <div slot="content" class="full-width">
        <UDSLink to="/order/checkout">Continuar</UDSLink>
      </div>
    </UDSFooter>
  </div>
</template>

<script>
import UDSLink from "@/components/UDSLink";
import UDSFooter from "@/components/UDSFooter";
import UDSCheckboxGroup from "@/components/UDSCheckboxGroup";
import OrderRoutesMiddleware from "@/mixins/order-middleware";

const addOnMiddleware = new OrderRoutesMiddleware({
  stepValueKey: "addOns",
  previousRoute: "/order/flavor"
});

export default {
  name: "UDSAddOn",
  components: {
    UDSLink,
    UDSFooter,
    UDSCheckboxGroup
  },
  mixins: [addOnMiddleware],
  data: () => ({ addOns: [] }),
  computed: {
    addOnsList() {
      return this.$store.state.addOns;
    },
    options() {
      return this.addOnsList.map(addOn => ({
        checked: false,
        value: addOn.id,
        label: addOn.name,
        name,
        ...addOn
      }));
    }
  }
};
</script>
