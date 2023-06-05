import { createContext, useState } from "react";
import { IProductProps, IProductProviderProps, IProviderProps } from "./types";
import products from "../database/products.json";

export const ProductsContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [data] = useState<IProductProps[]>(products.data);
  const [filter, setFilter] = useState<IProductProps[]>([]);
  const [preview, setPreview] = useState<IProductProps[]>([]);

  const filterProducts = (text: string) => {
    if (text === "todos") {
      setFilter([]);
    } else {
      if (text === "Hortifruit" || text === "Laticínios" || text === "Panificadora") {
        setFilter(data.filter((product: IProductProps) => product.tag === text));
      } else {
        setFilter(
          data.filter((product: IProductProps) =>
            product.name.toLowerCase().includes(text.toLowerCase())
          )
        );
      }
    }
  };

  const showPreview = (text: string) => {
    setPreview(
      data.filter((product: IProductProps) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const selectProduct = (id: number) => {
    setFilter(data.filter((product: IProductProps) => product.id === id));
  };

  return (
    <ProductsContex.Provider
      value={{ data, filter, preview, filterProducts, showPreview, selectProduct }}
    >
      {children}
    </ProductsContex.Provider>
  );
};

export default ProductsProvider;
