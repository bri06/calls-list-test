import styled from 'styled-components';
import { device } from './devices';

export const Header = styled.h1`
  text-align: center;
  width: 50%;
  margin: 0 auto;

  @media ${device.desktop} {
    width: 100%;
    text-align: left;
  }
`;