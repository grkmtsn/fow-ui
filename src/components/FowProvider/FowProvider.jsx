import React from 'react';
import PropTypes from 'prop-types';

import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { generateThemeColor, changeAntdTheme } from 'dynamic-antd-theme';

import { StateProvider, StateContext } from '../../context/StateContext';
import FowThemeProvider from '../FowThemeProvider/FowThemeProvider';

import languages from '../../constants/languages';
import momentLocales from '../../constants/momentLocals';

const FowProvider = ({ initialState, children }) => (
  <StateProvider initialState={initialState}>
    <FowThemeProvider>
      {changeAntdTheme(generateThemeColor(initialState.color || '#ff9337'))}
      <StateContext.Consumer>
        {([states]) => (
          <IntlProvider locale={states?.currencyLocale}>
            <ConfigProvider locale={states?.locale} direction={states?.direction}>
              {children}
            </ConfigProvider>
          </IntlProvider>
        )}
      </StateContext.Consumer>
    </FowThemeProvider>
  </StateProvider>
);

FowProvider.defaultProps = {
  initialState: {
    language: 1,
    date: 1,
    timezone: 1,
    currency: 1,
    locale: languages.find((item) => item.id === 1).locale,
    moment: momentLocales.find((item) => item.id === 1).key,
    direction: languages.find((item) => item.id === 1).direction,
  },
};

FowProvider.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default FowProvider;
