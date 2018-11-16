import actions from "@/store/actions";
import { ACTIONS as TYPES } from "@/store/types";

describe("Actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it(TYPES.GET_SIZES, async () => {
    fetch.mockResponse(JSON.stringify([{ name: "size" }]));

    const sizes = await actions[TYPES.GET_SIZES]();

    expect(sizes).toEqual([{ name: "size" }]);
  });

  it(TYPES.GET_FLAVORS, async () => {
    fetch.mockResponse(JSON.stringify([{ name: "flavor" }]));

    const flavors = await actions[TYPES.GET_FLAVORS]();

    expect(flavors).toEqual([{ name: "flavor" }]);
  });

  it(TYPES.GET_ADD_ONS, async () => {
    fetch.mockResponse(JSON.stringify([{ name: "addOn" }]));

    const addOns = await actions[TYPES.GET_ADD_ONS]();

    expect(addOns).toEqual([{ name: "addOn" }]);
  });
});
