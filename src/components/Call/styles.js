import styled from 'styled-components';

export const CallCard = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  background-color: #d3d3d3c0;
  font-family: 'Roboto', sans-serif;
`;

export const CallHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 18px;
`;

export const Merits = styled.div`
  display: grid;
  grid-gap: 12px;
  > div:nth-child(2n) {
    background-color: #9E9E9E;
  }
`;
