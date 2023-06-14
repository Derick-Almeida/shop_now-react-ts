import { ReactNode } from "react";

export interface IProviderProps {
  children?: ReactNode;
}

export interface IProductProps {
  id: string;
  image: string;
  name: string;
  tag: string;
  price: number;
}

export interface IProductCartProps extends IProductProps {
  quantity: number;
}

export interface IProductProviderProps {
  data: IProductProps[];
  filter: IProductProps[];
  preview: IProductProps[];
  cart: IProductCartProps[];
  filterProducts: (e: string) => void;
  showPreview: (e: string) => void;
  selectProduct: (e: string) => void;
  addToCart: (e: string) => void;
}
