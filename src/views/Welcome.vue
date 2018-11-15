<template>
  <div>
    <div>
      <h1>Pizzaria UDS</h1>
      <p>Monte já sua pizza!</p>

      <UDSButton @click="startOrder" :loading="loading">
        Montar minha pizza
      </UDSButton>
    </div>
  </div>
</template>

<script>
import UDSButton from "@/components/UDSButton";
import { mapActions, mapMutations } from "vuex";
import * as TYPES from "@/store/types";

export default {
  name: "UDSWelcome",
  components: { UDSButton },
  data: () => ({
    selected: [],
    loading: false,
    daniel: false,
    options: [
      {
        name: "1",
        label: "1 chbx",
        checked: false
      },
      {
        name: "2",
        label: "2 chbx",
        checked: false
      },
      {
        name: "3",
        label: "3 chbx",
        checked: false
      }
    ]
  }),
  computed: {
    shouldRequest() {
      const { sizes, flavors, addOns } = this.$store.state;

      return {
        sizes: sizes.length === 0,
        flavors: flavors.length === 0,
        addOns: addOns.length === 0
      };
    }
  },
  methods: {
    log: e => console.log(e),
    async startOrder() {
      const { shouldRequest } = this;

      this.loading = true;

      if (
        shouldRequest.sizes &&
        shouldRequest.flavors &&
        shouldRequest.addOns
      ) {
        const makeRequest = request => request();

        const requests = [
          this.GET_SIZES,
          this.GET_ADD_ONS,
          this.GET_FLAVORS
        ].map(makeRequest);

        const [sizes, addOns, flavors] = await Promise.all(requests);

        this.SET_SIZES(sizes);
        this.SET_FLAVORS(flavors);
        this.SET_ADD_ONS(addOns);

        this.loading = false;

        this.$router.push("/order/size");
      } else {
        this.$router.push("/order/size");
      }
    },

    ...mapActions([
      TYPES.ACTIONS.GET_SIZES,
      TYPES.ACTIONS.GET_ADD_ONS,
      TYPES.ACTIONS.GET_FLAVORS
    ]),

    ...mapMutations([
      TYPES.MUTATIONS.SET_SIZES,
      TYPES.MUTATIONS.SET_ADD_ONS,
      TYPES.MUTATIONS.SET_FLAVORS
    ])
  }
};
</script>
