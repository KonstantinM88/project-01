export const ROUTES = {
  HOME: "/",
  REGISTRATION: "/registration",
  GENDER_PREDICTOR: "/gender-predictor",
  COUNTER: "/counter",
  AGE_PREDICTOR: "/age-predictor",
  ABOUT: "/about",
  ACCOUNT: "/account",
} as const;

export const ACCOUNT_ROUTES = {
  ACCOUNT_SETTINGS: ROUTES.ACCOUNT + "/settings",
  ACCOUNT_INFO: ROUTES.ACCOUNT + "/info",
} as const;

  