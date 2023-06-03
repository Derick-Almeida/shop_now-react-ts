import * as S from "./style";
import { IButtonProps } from "./types";

const Button = ({ children, ...props }: IButtonProps) => {
  return <S.button {...props}>{children}</S.button>;
};

export default Button;
