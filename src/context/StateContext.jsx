import React, {
  createContext, useContext, useReducer,
} from 'react';
import PropTypes from 'prop-types';

import reducers from './reducers';
import languages from '../constants/languages';
import momentLocales from '../constants/momentLocals';
import currencies from '../constants/currencies';

export const StateContext = createContext();

export const StateProvider = ({ children, initialState: receivedState }) => {
  let updatedInitialState = {};
  const { locale } = languages.find((item) => item.id === (receivedState.language || 1));
  const { key } = momentLocales.find((item) => item.id === (receivedState.date || 1));
  const { locale: currencyLocale } = currencies.find((item) => item.id === (receivedState.currency || 1));

  updatedInitialState.locale = locale;
  updatedInitialState.moment = key;
  updatedInitialState.language = receivedState.language || 1;
  updatedInitialState.date = receivedState.date || 1;
  updatedInitialState.timezone = receivedState.timezone || 575;
  updatedInitialState.currency = receivedState.currency || 1;
  updatedInitialState.currencyLocale = currencyLocale;

  updatedInitialState = {
    ...updatedInitialState,
    ...receivedState,
  };

  const [state, dispatch] = useReducer(reducers, updatedInitialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.defaultProps = {
  initialState: {
    language: 1,
    date: 1,
    timezone: 1,
    currency: 1,
    currencyLocale: currencies.find((item) => item.id === 1).locale,
    locale: languages.find((item) => item.id === 1).locale,
    moment: momentLocales.find((item) => item.id === 1).key,
    direction: languages.find((item) => item.id === 1).direction,
  },
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({
    language: PropTypes.number,
    date: PropTypes.number,
    timezone: PropTypes.number,
    currency: PropTypes.number,
    currencyLocale: PropTypes.string,
    locale: PropTypes.object,
    moment: PropTypes.string,
    direction: PropTypes.string,
  }),
};

export const useGlobalState = () => useContext(StateContext);
