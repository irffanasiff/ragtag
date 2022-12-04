import { createContext } from 'react';
import { ProductType } from './AppState';

const AppContext = createContext({
  product: undefined as ProductType[] | undefined,
  setProduct: (product: ProductType[]) => {},
});

export default AppContext;
