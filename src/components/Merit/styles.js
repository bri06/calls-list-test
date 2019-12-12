import styled from 'styled-components';
import { device } from '../../styles/devices';


export const MeritCard = styled.div`
  padding: 0 15px 15px;
  background-color: #bdbcbc;
`;

export const MeritHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div:nth-child(2) > span {
    display: none;
  }
  div {
    display: flex;
  }

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    > div:nth-child(2) > span {
      display: block;
      padding: 0 5px;
    }
  }
`;