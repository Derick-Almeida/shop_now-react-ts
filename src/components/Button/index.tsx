import * as S from "./style";
import { IButtonProps } from "./types";

const Button = ({ children, ...props }: IButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
