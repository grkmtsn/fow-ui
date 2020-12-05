import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledRadio, StyledGroup } from './styles';

const FowRadio = ({ label, ...rest }) => (
  <StyledRadio {...rest}>
    {label}
  </StyledRadio>
);

FowRadio.propTypes = {
  label: PropTypes.string.isRequired,
};

FowRadio.Button = StyledButton;
FowRadio.Group = StyledGroup;

export default FowRadio;
