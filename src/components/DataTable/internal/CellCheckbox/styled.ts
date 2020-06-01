import styled from "styled-components";
import { Size } from "../../../../styles";

const CELL_PADDING = 24;

export const StandardCell = styled.td`
  text-align: left;
  width: ${CELL_PADDING + 18}px;
  padding: ${({ theme }) => theme.spacing * 2}px 0
    ${({ theme }) => theme.spacing * 2}px ${({ theme }) => theme.spacing * 3}px;
`;

export const HeaderCell = styled.th`
  text-align: left;
  width: ${CELL_PADDING + 18}px;
  padding: ${({ theme }) => theme.spacing * 2}px 0
    ${({ theme }) => theme.spacing * 2 - 2}px
    ${({ theme }) => theme.spacing * 3}px;
  border-top: ${Size.Border.Small} solid ${({ theme }) => theme.palette.divider};
  border-bottom: ${Size.Border.Small} solid
    ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.gray.highlight};
`;
