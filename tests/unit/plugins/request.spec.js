import { mount, createLocalVue } from "@vue/test-utils";
import request from "@/plugins/request";
import App from "@/App";

const localVue = createLocalVue();

localVue.use(request);

describe("request plugin", () => {
  it("Deve instalar corretamente o plugin", () => {
    const wrapper = mount(App, {
      localVue,
      stubs: ["router-link", "router-view"]
    });

    expect(wrapper.vm.$request).toBeTruthy();
    expect(typeof wrapper.vm.$request.get).toBe("function");
    expect(typeof wrapper.vm.$request.post).toBe("function");
  });
});
