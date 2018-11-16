import { MUTATIONS as TYPES } from "./types";

export default {
  [TYPES.SET_SIZES](state, sizes) {
    state.sizes = sizes;
  },

  [TYPES.SET_FLAVORS](state, flavors) {
    state.flavors = flavors;
  },

  [TYPES.SET_ADD_ONS](state, addOns) {
    state.addOns = addOns;
  },

  [TYPES.SET_ORDER_STEP](state, { name, value }) {
    state.order[name] = value;
  }
};
