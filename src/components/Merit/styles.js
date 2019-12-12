import styled from 'styled-components';
import { device } from '../../styles/devices';

export const MeritCard = styled.div`
  padding: 10px 15px 15px;
  background-color: #bdbcbc;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.desktop} {
    padding: 15px 30px;
  }
`;

export const MeritHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    font-size: 1.66rem;
  }
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70px;
  justify-content: space-evenly;
  & > div:nth-child(2) > span {
    display: none;
  }

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    & > div:nth-child(2) > span {
      display: block;
      padding: 0 10px;
    }
  }
`;

export const ScoreTitle = styled.p`
  font-size: 1.3rem;
`;

export const Calculator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & span:nth-child(1) {
    font-size: 1.33rem;
    margin-left: 15px;
  }
  & span:nth-child(2) {
    padding: 0 10px;
  }
  @media ${device.desktop} {
    & span:nth-child(1) {
    margin-left: 0;
  }
  }
`;
