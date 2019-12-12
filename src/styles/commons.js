import styled from 'styled-components';
import { device } from './devices';

export const Header = styled.h1`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  @media ${device.desktop} {
    width: 100%;
    text-align: left;
    padding-top: 10px;
  }
`;

export const Input = styled.input`
  border: none;
  height: 35px;
  width: 65%;
  &::placeholder {
    color: gray;
    font-size: 1.1rem;
  }
  &:focus {
    outline: none;
  }

  @media ${device.desktop} {
    width: 100%;
  }
`;
