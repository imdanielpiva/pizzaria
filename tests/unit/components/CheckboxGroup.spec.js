import { mount } from "@vue/test-utils";
import UDSCheckboxGroup from "@/components/UDSCheckboxGroup";

describe("<UDSCheckboxGroup>", () => {
  it("Deve ter um input do tipo checkbox", () => {
    const wrapper = mount(UDSCheckboxGroup, {
      propsData: {
        name: "test-checkbox-group",
        value: [],
        options: [{ checked: false, name: "test-checkbox" }]
      }
    });

    const inputWrapper = wrapper.find("input");

    expect(inputWrapper.attributes("type")).toBe("checkbox");
  });

  it("Deve renderizar corretamente o estado de erro", () => {
    const wrapper = mount(UDSCheckboxGroup, {
      propsData: {
        name: "test",
        error: "Mensagem de erro."
      }
    });
    const errorElement =
      wrapper.vm.$el.children[wrapper.vm.$el.children.length - 1];
    const titleEl = errorElement.children[0];
    const messageEl = errorElement.children[1];

    expect(errorElement.className).toContain("uds-checkbox-group__error");
    expect(titleEl).not.toBeNull();
    expect(messageEl).not.toBeNull();
    expect(titleEl.textContent).toContain("Atenção");
    expect(messageEl.textContent).toContain("Mensagem de erro.");
  });

  it("Deve emitir o evento input", () => {
    const wrapper = mount(UDSCheckboxGroup, {
      propsData: { name: "test" }
    });

    const selected = [{ checked: true, name: "uds-checkbox-group" }];

    wrapper.vm.$emit("input", selected);

    expect(wrapper.emitted("input")[0][0]).toEqual(selected);
  });
});
