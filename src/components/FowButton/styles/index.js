/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/es/button/style/css';

export const StyledButton = styled(Button)(({ rounded }) => `
    border-radius: ${rounded ? '50px' : '0'};
`);
