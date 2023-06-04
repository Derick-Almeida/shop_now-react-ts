import { createContext, useState } from "react";
import { IProductProps, IProductProviderProps, IProviderProps } from "./types";
import products from "../data/products.json";

export const ProductsContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [data] = useState<IProductProps[]>(products.data);
  const [filter, setFilter] = useState<IProductProps[]>([]);

  const filterProducts = (tag: string) => {
    setFilter(
      data.filter((e: IProductProps) => {
        e.tag === tag;
      })
    );
  };

  return (
    <ProductsContex.Provider value={{ data, filter, filterProducts }}>
      {children}
    </ProductsContex.Provider>
  );
};

export default ProductsProvider;
