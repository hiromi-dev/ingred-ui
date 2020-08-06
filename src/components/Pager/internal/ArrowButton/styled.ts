import styled from "styled-components";
import { Radius } from "../../../../styles";

type ButtonProps = {
  active?: boolean;
};

export const ArrowButton = styled.button<ButtonProps>`
  width: 28px;
  height: 28px;
  padding: 0 2px;
  border-radius: ${Radius.MEDIUM};
  border: 0;
  transition: all 0.3s;
  &:first-child {
    margin-right: 14px;
  }
  &:last-child {
    margin-left: 14px;
  }
  background-color: ${({ active, theme }) =>
    active ? theme.palette.gray.highlight : theme.palette.background.hint};
  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.palette.gray.highlight : theme.palette.primary.highlight};
    cursor: ${({ active }) => (active ? "default" : "pointer")};
  }
`;
