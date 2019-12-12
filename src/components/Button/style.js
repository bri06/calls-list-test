import styled from 'styled-components';
import { device } from '../../styles/devices';


const bgColor = '#000';
const textColor = '#fff';

export const Btn = styled.button`
  color: ${textColor};
  background-color: ${bgColor};
  width: 100%;
  height: 50px;
  &:hover {
    cursor: pointer;
  }

  @media ${device.desktop} {
    width: 130px;
    padding: 5px 10px;
    margin-top: 20px;
    border-radius: 3px;
    align-self: flex-end;
  }
`;