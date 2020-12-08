/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)(({ rounded, theme }) => `
    border-radius: ${rounded ? '50px' : '0'};
    padding: 0 ${theme.sizes.xxxlarge};
    font-size: ${theme.fontSizes.size16.size};
    line-height: ${theme.fontSizes.size16.lineHeight};
`);
