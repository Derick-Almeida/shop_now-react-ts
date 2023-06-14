import { LiHTMLAttributes } from "react";
import { IProductCartProps } from "../../contexts/types";

interface ICardOptions extends LiHTMLAttributes<HTMLLIElement> {
  controls?: boolean;
}

export type ICardProps = IProductCartProps & ICardOptions;
