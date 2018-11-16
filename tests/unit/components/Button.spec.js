import { mount } from "@vue/test-utils";
import UDSButton from "@/components/UDSButton";

describe("<UDSButton>", () => {
  it("Deve renderizar corretamente o slot label", () => {
    const wrapper = mount(UDSButton, {
      slots: "<span>Botão</span>"
    }).find("div");

    expect(wrapper.classes()).toContain("uds-button__content");
    expect(wrapper.text()).toBe("<span>Botão</span>");
  });

  it("Deve renderizar corretamente o estado de carregamento", () => {
    const wrapper = mount(UDSButton, {
      propsData: { loading: true }
    });

    const [contentEl] = wrapper.vm.$el.children;
    const loaderEl = contentEl.children[0];

    expect(wrapper.classes()).toContain("uds-button--disabled");
    expect(loaderEl.className).toContain("uds-loader");
  });

  it("Deve emitir o evento click", () => {
    const wrapper = mount(UDSButton);

    wrapper.vm.$emit("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
