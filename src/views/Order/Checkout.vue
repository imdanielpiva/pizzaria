<template>
  <div class="uds-order-checkout">
    <div class="slideInRight">
      <h2>Checkout</h2>

      <ul class="uds-order-checkout__list">
        <li>
          <div class="uds-order-checkout__list-item-content">
            <h3 class="uds-order-checkout__list-item-title">Tamanho</h3>
            <p>{{ size.name }}</p>
          </div>
        </li>

        <li>
          <div class="uds-order-checkout__list-item-content">
            <h3 class="uds-order-checkout__list-item-title">Sabor</h3>
            <p>{{ flavor.name }}</p>
          </div>
        </li>

        <li v-if="hasAddoOns">
          <div
            class="uds-order-checkout__list-item-content uds-order-checkout__list-item-content--block"
          >
            <h3 class="uds-order-checkout__list-item-title">Adicionais</h3>

            <ul class="uds-order-checkout__add-ons-list">
              <li v-for="(addOn, index) in addOnsList" :key="`addOn-${index}`">
                <h4>{{ addOn.name }}</h4>
                <p>{{ formatPrice(addOn.price || defaultPriceParameter) }}</p>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div class="uds-order-checkout__list-item-content">
            <h3 class="uds-order-checkout__list-item-title">
              Tempo de preparo
            </h3>
            <p>{{ time }}</p>
          </div>
        </li>

        <li>
          <div class="uds-order-checkout__list-item-content">
            <h3 class="uds-order-checkout__list-item-title">Total</h3>
            <p>{{ price }}</p>
          </div>
        </li>
      </ul>
    </div>

    <UDSSpacer top="35px" bottom="35px" />

    <UDSFooter>
      <div slot="content" class="full-width">
        <UDSButton>Finalizar</UDSButton>
      </div>
    </UDSFooter>
  </div>
</template>

<script>
import UDSSpacer from "@/components/UDSSpacer.vue";
import UDSFooter from "@/components/UDSFooter.vue";
import UDSButton from "@/components/UDSButton.vue";

export default {
  name: "UDSOrderCheckout",
  components: {
    UDSButton,
    UDSSpacer,
    UDSFooter
  },
  data: () => ({
    defaultPriceParameter: {
      value: 0,
      currency: "BRL"
    },
    defaultTimeParamater: {
      value: 0
    }
  }),
  computed: {
    checkout() {
      const order = {
        price: this.size.price.value,
        time: this.size.time.value
      };

      return this.addOnsList.reduce(
        (order, addOn) => ({
          time: this.aggregateAddOnsPrices(order, addOn),
          price: this.aggregateAddOnTime(order, addOn)
        }),
        order
      );
    },
    size() {
      return this.order.size;
    },
    addOnsList() {
      return this.order.addOns;
    },
    flavor() {
      return this.order.flavor;
    },
    price() {
      const sizePrice = (this.size.price || this.defaultPriceParameter).value;
      const flavorPrice = (this.flavor.price || this.defaultPriceParameter)
        .value;
      const minimumPrice = sizePrice + flavorPrice;

      const finalPrice = this.addOnsList.reduce(
        this.aggregateAddOnsPrices,
        minimumPrice
      );

      return this.formatPrice({
        value: finalPrice,
        currency: this.size.price.currency || "BRL"
      });
    },
    time() {
      const sizeTime = (this.size.time || { value: 0 }).value;
      const flavorTime = (this.flavor.time || { value: 0 }).value;
      const minimumTime = sizeTime + flavorTime;

      const finalTime = this.addOnsList.reduce(
        this.aggregateAddOnTime,
        minimumTime
      );

      return this.formatTime({ value: finalTime });
    },
    hasAddoOns() {
      return this.addOnsList.length > 0;
    },
    order() {
      return this.state.order;
    },
    state() {
      return this.$store.state;
    }
  },
  methods: {
    aggregateAddOnTime(price, addOn) {
      return price + (addOn.time || { value: 0 }).value;
    },
    aggregateAddOnsPrices(timeInMinutes, addOn) {
      return timeInMinutes + (addOn.price || { value: 0 }).value;
    },
    formatPrice({ value = 0, currency = "BRL" }) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency
      });
    },
    formatTime({ value = 0 }) {
      return `${value} minutos`;
    }
  }
};
</script>

<style>
.uds-order-checkout {
  overflow: auto;
  padding: 12px;
  border: 1px solid #dedede;
  border-radius: 4px;
  height: calc(100vh - 190px);
}

.uds-order-checkout__list {
  margin-bottom: 72px;
  padding: 0;
  list-style-type: none;
}

.uds-order-checkout__list-item-content {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
}

.uds-order-checkout__list-item-content--block {
  display: block;
}

.uds-order-checkout__list-item-title {
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 2px;
}

.uds-order-checkout__add-ons-list {
  margin: 12px 0;
}
</style>
