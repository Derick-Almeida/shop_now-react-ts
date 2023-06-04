import { createContext, useState } from "react";
import { IProductProps, IProductProviderProps, IProviderProps } from "./types";
import products from "../data/products.json";

export const ProductsContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [data] = useState<IProductProps[]>(products.data);
  const [filter, setFilter] = useState<IProductProps[]>([]);

  const filterProducts = (text: string) => {
    if (text === "todos") {
      setFilter([]);
    } else {
      if (text === "Hortifruit" || text === "Laticínios" || text === "Panificadora") {
        setFilter(data.filter((product: IProductProps) => product.tag === text));
      } else {
        console.log(text);

        setFilter(
          data.filter((product: IProductProps) =>
            product.name.toLowerCase().includes(text.toLowerCase())
          )
        );
      }
    }
  };

  return (
    <ProductsContex.Provider value={{ data, filter, filterProducts }}>
      {children}
    </ProductsContex.Provider>
  );
};

export default ProductsProvider;
