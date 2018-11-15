async function createResponse(request) {
  return {
    data: await request.json(),
    ...request
  };
}

export default function Request({ baseURL }) {
  const service = {};

  service.baseURL = baseURL;

  service.post = async (path = "/", options = {}) => {
    const request = await fetch(`${service.baseURL}${path}`, {
      ...options,
      method: "POST"
    });

    return await createResponse(request);
  };

  service.get = async (path = "/", options = {}) => {
    const request = await fetch(`${service.baseURL}${path}`, {
      ...options,
      method: "GET"
    });

    return createResponse(request);
  };

  service.install = Vue => {
    Vue.prototype.$request = service;
  };

  return Object.freeze(service);
}
