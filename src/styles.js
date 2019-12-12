import styled from 'styled-components';
import { device } from './styles/devices';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    padding: 0 50px;
    margin-bottom: 10px;
  }
`;
