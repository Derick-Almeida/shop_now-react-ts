import { createContext, useState } from "react";
import { IProductCartProps, IProductProps, IProductProviderProps, IProviderProps } from "./types";
import products from "../database/products.json";

export const ProductsContex = createContext<IProductProviderProps>({} as IProductProviderProps);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [data] = useState<IProductProps[]>(products.data);
  const [filter, setFilter] = useState<IProductProps[]>([]);
  const [preview, setPreview] = useState<IProductProps[]>([]);
  const [cart, setCart] = useState<IProductCartProps[]>([]);

  const filterProducts = (text: string) => {
    if (text === "todos") {
      setFilter([]);
    } else {
      if (text === "Hortifruit" || text === "Laticínios" || text === "Panificadora") {
        setFilter(data.filter((product: IProductProps) => product.tag === text));
      } else {
        setFilter(
          data.filter(
            (product: IProductProps) =>
              product.name.toLowerCase().includes(text.toLowerCase()) ||
              product.tag.toLowerCase().includes(text.toLocaleLowerCase())
          )
        );
      }
    }

    return null;
  };

  const showPreview = (text: string) => {
    setPreview(
      data.filter(
        (product: IProductProps) =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.tag.toLowerCase().includes(text.toLocaleLowerCase())
      )
    );

    return null;
  };

  const selectProduct = (id: string) => {
    setFilter(data.filter((product: IProductProps) => product.id === id));

    return null;
  };

  const addToCart = (productId: string) => {
    const filtredProduct = data.find((product) => product.id === productId);
    const { id, ...rest } = filtredProduct as IProductProps;

    if (cart.length === 0) {
      setCart([...cart, { id, ...rest, quantity: 1 }]);
    } else {
      const idCart = [...new Set(cart.map((e) => e.id))];

      if (idCart.includes(id)) {
        const updateCart = cart.map((e) => (e.id === id ? { ...e, quantity: e.quantity + 1 } : e));

        setCart(updateCart);
      } else {
        setCart([...cart, { id, ...rest, quantity: 1 }]);
      }
    }

    return null;
  };

  const removeToCart = (productId: string) => {
    const filtredProduct = cart.find((product) => product.id === productId);
    const { quantity } = filtredProduct as IProductCartProps;

    if (quantity > 1) {
      const updateCart = cart.map((e) =>
        e.id === productId ? { ...e, quantity: e.quantity - 1 } : e
      );

      setCart(updateCart);
    } else {
      excludeProduct(productId);
    }

    return null;
  };

  const excludeProduct = (productId: string) => {
    const newList = cart.filter((e) => e.id !== productId);

    setCart(newList);

    return null;
  };

  return (
    <ProductsContex.Provider
      value={{
        data,
        filter,
        preview,
        cart,
        filterProducts,
        showPreview,
        selectProduct,
        addToCart,
        removeToCart,
        excludeProduct,
      }}
    >
      {children}
    </ProductsContex.Provider>
  );
};

export default ProductsProvider;
