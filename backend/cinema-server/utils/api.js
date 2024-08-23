import { SUBSCRIPTIONS_API_DEV, SUBSCRIPTIONS_API_PROD } from "../environment";

export const getSubscriptionsApi = () => {
  return process.env.NODE_ENV === "development"
    ? SUBSCRIPTIONS_API_DEV
    : SUBSCRIPTIONS_API_PROD;
};
