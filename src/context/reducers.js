import {
  CHANGE_LANGUAGE, CHANGE_MOMENT_LOCAL, CHANGE_TIMEZONE, CHANGE_CURRENCY,
} from './types';

const reducers = (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        locale: action.payload.locale,
        direction: action.payload.direction,
      };
    case CHANGE_MOMENT_LOCAL:
      return {
        ...state,
        date: action.payload.date,
        moment: action.payload.moment,
      };
    case CHANGE_TIMEZONE:
      return {
        ...state,
        timezone: action.payload.timezone,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
        currencyLocale: action.payload.currencyLocale,
      };
    default:
      return state;
  }
};

export default reducers;
