import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "active";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
