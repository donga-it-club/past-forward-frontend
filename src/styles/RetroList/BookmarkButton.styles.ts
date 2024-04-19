import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface ButtonProps {
  isBookmarked: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 95px;
  height: 30px;
  background-color: ${props => (props.isBookmarked ? '#111b47' : '#f0f2ef')};
  color: ${props => (props.isBookmarked ? 'white !important' : '#494949')};
  border-radius: 3px;
  font-size: 14px;
  color: #494949;
  display: grid;
  grid-template-columns: 25px 1fr;
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
  justify-self: center;
  align-self: center;
`;

export const Text = styled.text`
  justify-self: start;
  align-self: center;
`;

export const StarIcon = styled(FaStar)`
  width: 15px;
  height: 15px;
  justify-self: center;
  align-self: center;
  color: #fcea12;
`;
