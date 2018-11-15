import { MUTATIONS } from "@/store/types";

const OrderRoutesMiddleware = function OrderRoutesMiddleware({
  stepValueKey = "",
  previousRoute
} = {}) {
  return {
    data: () => ({ error: false }),
    beforeRouteLeave(to, from, next) {
      const shouldGoBack =
        to.path === previousRoute || to.name === previousRoute.name;

      if (shouldGoBack) {
        return next();
      }

      const value = this[stepValueKey];

      if (value) {
        this.$store.commit(MUTATIONS.SET_ORDER_STEP, {
          name: stepValueKey,
          value
        });

        next();
      } else {
        next(false);

        this.error = "Você precisa selecionar uma opção para prosseguir.";
      }
    }
  };
};

export default OrderRoutesMiddleware;
