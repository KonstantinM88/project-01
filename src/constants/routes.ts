

export const ROUTES = {
  HOME: "/",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  GENDER_PREDICTOR: "/gender-predictor",
  COUNTER: "/counter",
  AGE_PREDICTOR: "/age-predictor",
  ABOUT: "/about",
  ACCOUNT: "/account",
  USERS: "/users",
  ADD_PRODUCT: "/add-product",
  // TOGGLE_CARD: "/toggle-card",
} as const;

export const ACCOUNT_ROUTES = {
  ACCOUNT_SETTINGS: ROUTES.ACCOUNT + "/settings",
  ACCOUNT_INFO: ROUTES.ACCOUNT + "/info",
} as const;


  