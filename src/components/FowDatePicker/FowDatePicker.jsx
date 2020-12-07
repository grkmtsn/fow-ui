import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment-timezone';
import { useGlobalState } from '../../context/StateContext';
import timeZones from '../../constants/timeZones';

const FowDatePicker = ({
  onChange, momentFormat, inputFormat, ...rest
}) => {
  const [state] = useGlobalState();
  const handleChange = (date, dateString) => {
    if (onChange) {
      const { title } = timeZones.find((item) => item.id === state.timezone);
      const dateWithTimeZone = moment.tz(date, title).locale(state.moment);
      const momentDateObj = dateWithTimeZone;
      const formattedValue = dateWithTimeZone.format(momentFormat);
      const isoString = dateWithTimeZone.format();
      onChange({
        momentDateObj, formattedValue, dateString, isoString,
      });
    }
  };

  return (
    <DatePicker format={inputFormat} onChange={handleChange} {...rest} />
  );
};

FowDatePicker.defaultProps = {
  momentFormat: 'DD.MM.YYYY',
  inputFormat: 'DD.MM.YYYY',
};

FowDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  momentFormat: PropTypes.string,
  inputFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default FowDatePicker;
