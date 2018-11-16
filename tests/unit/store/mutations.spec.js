import mutations from "@/store/mutations";
import { MUTATIONS as TYPES } from "@/store/types";

describe("Mutations", () => {
  it(TYPES.SET_SIZES, () => {
    const state = { sizes: [] };
    const expected = [{ name: "size" }];

    mutations[TYPES.SET_SIZES](state, expected);

    expect(state).toEqual({ sizes: expected });
  });

  it(TYPES.SET_FLAVORS, () => {
    const state = { flavors: [] };
    const expected = [{ name: "flavor" }];

    mutations[TYPES.SET_FLAVORS](state, expected);

    expect(state).toEqual({ flavors: expected });
  });

  it(TYPES.SET_ADD_ONS, () => {
    const state = { addOns: [] };
    const expected = [{ name: "addOn" }];

    mutations[TYPES.SET_ADD_ONS](state, expected);

    expect(state).toEqual({ addOns: expected });
  });

  it(TYPES.SET_ORDER_STEP, () => {
    const state = { order: {} };
    const expected = {
      size: { name: "size" },
      flavor: { name: "flavor" },
      addOns: { name: "addOns" }
    };

    mutations[TYPES.SET_ORDER_STEP](state, {
      name: "size",
      value: expected.size
    });

    mutations[TYPES.SET_ORDER_STEP](state, {
      name: "flavor",
      value: expected.flavor
    });

    mutations[TYPES.SET_ORDER_STEP](state, {
      name: "addOns",
      value: expected.addOns
    });

    expect(state).toEqual({ order: expected });
  });
});
