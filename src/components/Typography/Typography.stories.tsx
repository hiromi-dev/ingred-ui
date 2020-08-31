import * as React from "react";
import styled from "styled-components";
import Typography from "./";

export default {
  title: "Typography",
  parameters: {
    component: Typography,
  },
};

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing * 3}px;
  background-color: ${({ theme }) => theme.palette.background.dark};
`;

const RowContainer = styled.div`
  margin: ${({ theme }) => theme.spacing * 3}px;
  padding: ${({ theme }) => theme.spacing * 3}px;
  background-color: ${({ theme }) => theme.palette.background.default};
  button + button {
    margin-left: ${({ theme }) => theme.spacing * 5}px;
  }
`;

const colors = ["initial", "primary", "secondary", "disabled", "hint", "white"];
const sizes = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl",
  "xxxxl",
  "xxxxxl",
  "xxxxxxl",
  "xxxxxxxl",
];
const aligns = ["left", "center", "right"];

export const Overview = () => (
  <Container>
    <h2>Sizes</h2>
    <RowContainer>
      {sizes.map((s) => (
        <Typography size={s}>{s}</Typography>
      ))}
    </RowContainer>
    <h2>Colors</h2>
    <RowContainer>
      {colors.map((c) => (
        <Typography color={c}>{c}</Typography>
      ))}
    </RowContainer>
    <h2>Weight</h2>
    <RowContainer>
      <Typography weight={"normal"}>normal</Typography>
      <Typography weight={"bold"}>bold</Typography>
    </RowContainer>
    <h2>Align</h2>
    <RowContainer>
      {aligns.map((a) => (
        <Typography align={a}>{a}</Typography>
      ))}
    </RowContainer>
  </Container>
);
