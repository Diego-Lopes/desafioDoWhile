import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement;
}

export function Button({ children, ...rest }: IButtonProps) {
  return <Container {...rest}>{children}</Container>;
}
