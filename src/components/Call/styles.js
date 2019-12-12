import styled from 'styled-components';
import { device } from '../../styles/devices';

const largeFontSize = '1.6rem';
const normalFontSize = '1.1rem';

export const CallCard = styled.div`
  margin: 10px 0 0;
  padding: 0 10px 30px;
  background-color: #d3d3d3c0;
  font-family: 'Roboto', sans-serif;

  @media ${device.desktop} {
    padding: 0 30px 30px;
  }
`;

export const CallHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 18px;
  line-height: 1.33rem;
  & h1 {
    font-size: ${largeFontSize};
    margin: 20px 0;
  }
  & p {
    font-size: ${normalFontSize};
  }
`;

export const Merits = styled.div`
  display: grid;
  grid-gap: 12px;
  > div:nth-child(2n) {
    background-color: #9E9E9E;
  }

  @media ${device.desktop} {
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 25px;
    div:nth-child(n) {
      background-color: #d3d3d3c0;
    }
  }
`;
