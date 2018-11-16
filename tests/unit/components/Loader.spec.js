import { mount } from "@vue/test-utils";
import UDSLoader from "@/components/UDSLoader";

describe("<UDSLoader>", () => {
  it("Deve renderizar o loader em SVG", () => {
    const wrapper = mount(UDSLoader, {
      propsData: { value: true }
    });

    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("Não deve renderizar o loader em SVG", () => {
    const wrapper = mount(UDSLoader, {
      propsData: { value: false }
    });

    expect(wrapper.find("svg").exists()).toBe(false);
  });

  it("Deve renderizar o loader SVG nos tamanhos corretos", () => {
    const wrapper = mount(UDSLoader, {
      propsData: {
        value: true,
        width: "50px",
        height: "50px"
      }
    });

    const svgWrapper = wrapper.find("svg");

    expect(svgWrapper.attributes("width")).toBe("50px");
    expect(svgWrapper.attributes("height")).toBe("50px");
  });
});
