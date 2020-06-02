import styled from "styled-components";
import { colors } from "../../styles/color";
import { Size } from "../../styles/size";
import { Radius } from "../../styles/radius";

export type ContainerProps = {
  height: string;
  minWidth: string;
  fontSize: string;
};

export const ButtonGroupContainer = styled.div<ContainerProps>`
  display: inline-flex;

  button {
    min-width: ${({ minWidth }) => minWidth};
    width: auto;
    height: ${({ height }) => height};
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    border: ${Size.Border.Small} solid ${({ theme }) => theme.palette.divider};
    padding-right: ${({ theme }) => theme.spacing}px;
    padding-left: ${({ theme }) => theme.spacing}px;
    border-radius: ${Radius.SMALL};
    font-size: ${({ fontSize }) => fontSize};
    box-shadow: none;
    font-weight: normal;
    &:hover {
      background: ${({ theme }) => theme.palette.gray.light};
    }
    &:active {
      background: ${colors.basic[300]};
    }
  }

  button:not(:last-of-type) {
    border-right: none;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  button:not(:first-of-type) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  button:last-of-type {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;
