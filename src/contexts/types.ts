import { ReactNode } from "react";

export interface IProviderProps {
  children?: ReactNode;
}

export interface IProductProps {
  id: number;
  image: string;
  name: string;
  tag: string;
  price: number;
}

export interface IProductProviderProps {
  data: IProductProps[];
  filter: IProductProps[];
  filterProducts: (e: string) => void;
}
