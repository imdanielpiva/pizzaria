import { mount } from "@vue/test-utils";
import UDSRadio from "@/components/UDSRadio";

describe("<UDSRadio>", () => {
  it("Deve renderizar um input", () => {
    const wrapper = mount(UDSRadio, {
      propsData: { name: "test" }
    }).find("input");

    expect(wrapper.exists()).toBe(true);
  });

  it("Deve renderizar um input do tipo radio", () => {
    const wrapper = mount(UDSRadio, {
      propsData: { name: "test" }
    });

    const inputWrapper = wrapper.find("input");

    expect(inputWrapper.attributes("type")).toBe("radio");
  });

  it("Deve renderizar um input com um atributo id válido", () => {
    const wrapper = mount(UDSRadio, {
      propsData: { name: "test" }
    });

    const inputWrapper = wrapper.find("input");

    expect(inputWrapper.attributes("id")).toBe(`uds-radio-${wrapper.vm._uid}`);
  });

  it("Deve renderizar corretamente o label do input", () => {
    const wrapper = mount(UDSRadio, {
      propsData: { name: "test" },
      slots: {
        label: "<span>Radio label</span>"
      }
    });
    const labelWrapper = wrapper.find("label");

    expect(labelWrapper.text()).toBe("Radio label");
  });

  it("Deve renderizar corretamente o estado de selecionado", () => {
    const wrapper = mount(UDSRadio, {
      propsData: {
        name: "test",
        value: true
      }
    });

    expect(wrapper.props("value")).toBe(true);
    expect(wrapper.classes()).toContain("uds-radio--checked");
  });

  it("Deve emitir o evento input", () => {
    const wrapper = mount(UDSRadio, {
      propsData: {
        name: "test",
        value: true
      }
    });

    wrapper.vm.$emit("input", false);

    expect(wrapper.emitted("input")[0]).toEqual([false]);
  });
});
