<template>
  <div>
    <div class="slideInRight fadeIn">
      <h2 slot="title">Qual tamanho?</h2>

      <UDSRadioGroup
        v-model="size"
        name="pizzaFlavor"
        label="Selecione uma das opções"
        :error="error"
        :options="options"
      />
    </div>

    <UDSFooter>
      <div slot="content" class="full-width">
        <UDSLink to="/order/flavor">Continuar</UDSLink>
      </div>
    </UDSFooter>
  </div>
</template>

<script>
import UDSLink from "@/components/UDSLink";
import UDSFooter from "@/components/UDSFooter";
import UDSRadioGroup from "@/components/UDSRadioGroup";
import OrderRoutesMiddleware from "@/mixins/order-middleware";

const pizzaSizeMiddleware = new OrderRoutesMiddleware({
  stepValueKey: "size",
  previousRoute: "/welcome"
});

export default {
  name: "UDSPizzaSize",
  components: {
    UDSLink,
    UDSFooter,
    UDSRadioGroup
  },
  mixins: [pizzaSizeMiddleware],
  data: () => ({ size: null }),
  computed: {
    sizesList() {
      return this.$store.state.sizes;
    },

    options() {
      return this.sizesList.map(size => ({
        checked: false,
        disabled: false,
        value: size.id,
        label: `Pizza ${size.name}`,
        ...size
      }));
    }
  }
};
</script>
