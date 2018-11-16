import { mount } from "@vue/test-utils";
import UDSRadioGroup from "@/components/UDSRadioGroup";

describe("<UDSRadioGroup>", () => {
  it("Deve ter um input do tipo radio", () => {
    const wrapper = mount(UDSRadioGroup, {
      propsData: {
        name: "test-radio-group",
        options: [{ checked: false }]
      }
    });

    const inputWrapper = wrapper.find("input");

    expect(inputWrapper.attributes("type")).toBe("radio");
  });

  it("Deve renderizar corretamente o estado de erro", () => {
    const wrapper = mount(UDSRadioGroup, {
      propsData: {
        name: "test",
        error: "Mensagem de erro."
      }
    });
    const errorElement =
      wrapper.vm.$el.children[wrapper.vm.$el.children.length - 1];
    const titleEl = errorElement.children[0];
    const messageEl = errorElement.children[1];

    expect(errorElement.className).toContain("uds-radio-group__error");
    expect(titleEl).not.toBeNull();
    expect(messageEl).not.toBeNull();
    expect(titleEl.textContent).toContain("Atenção");
    expect(messageEl.textContent).toContain("Mensagem de erro.");
  });

  it("Deve emitir o evento input", () => {
    const wrapper = mount(UDSRadioGroup, {
      propsData: { name: "test" }
    });

    const selected = { checked: true };

    wrapper.vm.$emit("input", selected);

    expect(wrapper.emitted("input")[0][0]).toEqual(selected);
  });
});
