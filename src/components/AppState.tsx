import React, { useState } from 'react';
import AppContext from './appContext';

export type ProductType = {
  name?: string;
  description?: string;
  thumbnail?: string;
  content?: string;
  category?: string;
  cost?: string;
  token?: string;
};

const AppState = ({ children }: any) => {
  const [product, setProduct] = useState<ProductType[] | undefined>();
  return (
    <AppContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
