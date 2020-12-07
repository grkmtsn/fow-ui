/* eslint-disable react/style-prop-object */
import React from 'react';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';

import { useGlobalState } from '../../context/StateContext';
import currencies from '../../constants/currencies';

const FowCurrencyText = ({
  value, style, className,
}) => {
  const [state] = useGlobalState();
  const currencyCode = currencies.find((item) => item.id === state.currency).code;
  return (
    <FormattedNumber value={value} style="currency" currency={currencyCode} currencyDisplay="narrowSymbol">
      {(parts) => (
        <div className={className} style={style}>{parts}</div>
      )}
    </FormattedNumber>
  );
};

FowCurrencyText.defaultProps = {
  style: {},
  className: '',
};

FowCurrencyText.propTypes = {
  value: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FowCurrencyText;
