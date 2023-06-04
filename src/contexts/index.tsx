import ProductsProvider from "./products.context";
import { IProviderProps } from "./types";

const Providers = ({ children }: IProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;
