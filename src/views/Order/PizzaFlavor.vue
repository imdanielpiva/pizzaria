<template>
  <div>
    <div class="slideInRight fadeIn">
      <h2>Qual sabor?</h2>

      <UDSRadioGroup
        v-model="flavor"
        :error="error"
        :options="options"
        name="flavors"
      />
    </div>

    <UDSFooter>
      <div slot="content" class="full-width">
        <UDSLink to="/order/add-on">Continuar</UDSLink>
      </div>
    </UDSFooter>
  </div>
</template>

<script>
import UDSLink from "@/components/UDSLink";
import UDSFooter from "@/components/UDSFooter";
import UDSRadioGroup from "@/components/UDSRadioGroup";
import OrderRoutesMiddleware from "@/mixins/order-middleware";

const flavorFlavorMiddleware = new OrderRoutesMiddleware({
  stepValueKey: "flavor",
  previousRoute: "/order/size"
});

export default {
  name: "UDSFlavor",
  components: {
    UDSLink,
    UDSFooter,
    UDSRadioGroup
  },
  mixins: [flavorFlavorMiddleware],
  data: () => ({ flavor: "" }),
  computed: {
    flavorsList() {
      return this.$store.state.flavors;
    },
    options() {
      return this.flavorsList.map(flavor => ({
        checked: false,
        disabled: false,
        value: flavor.id,
        label: `Pizza de ${flavor.name}`,
        ...flavor
      }));
    }
  }
};
</script>
