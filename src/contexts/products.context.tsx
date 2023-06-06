import { createContext, useState } from "react";
import { IProductListProps, IProductProps, IProductProviderProps, IProviderProps } from "./types";
import products from "../database/products.json";

export const ProductsContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [data] = useState<IProductProps[]>(products.data);
  const [filter, setFilter] = useState<IProductProps[]>([]);
  const [preview, setPreview] = useState<IProductProps[]>([]);
  const [list, setList] = useState<IProductListProps[]>([]);

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

    return null;
  };

  const showPreview = (text: string) => {
    setPreview(
      data.filter((product: IProductProps) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );

    return null;
  };

  const selectProduct = (id: number) => {
    setFilter(data.filter((product: IProductProps) => product.id === id));

    return null;
  };

  const addToList = (productId: number) => {
    const filtredProduct = data.find((product) => product.id === productId);
    const { id, name, price } = filtredProduct as IProductProps;

    if (list.length === 0) {
      setList([...list, { id, name, price, quantity: 1 }]);
    } else {
      const idList = [...new Set(list.map((e) => e.id))];

      if (idList.includes(id)) {
        const updateList = list.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e));

        setList(updateList);
      } else {
        setList([...list, { id, name, price, quantity: 1 }]);
      }
    }

    return null;
  };

  return (
    <ProductsContex.Provider
      value={{ data, filter, preview, list, filterProducts, showPreview, selectProduct, addToList }}
    >
      {children}
    </ProductsContex.Provider>
  );
};

export default ProductsProvider;
