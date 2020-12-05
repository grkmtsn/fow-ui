import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const FowButton = ({ label, rounded, ...rest }) => (
  <StyledButton {...rest} rounded={rounded}>
    {label}
  </StyledButton>
);

FowButton.defaultProps = {
  rounded: false,
};

FowButton.propTypes = {
  label: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default FowButton;
