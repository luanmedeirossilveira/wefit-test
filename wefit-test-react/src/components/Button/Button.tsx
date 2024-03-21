import React from "react";
import { ButtonWrapper } from "./styles";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
