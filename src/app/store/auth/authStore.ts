import create from 'zustand';
import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { immer } from 'zustand/middleware/immer';

export interface authStoreType {
  isAuth: boolean;
  setIsAuth: (data: any) => { auth: boolean };
}

export const useAuthStore = create<authStoreType>((set: any, get: any) => ({
  isAuth: false,
  setIsAuth: (connected: boolean) =>
    set((state: authStoreType) => {
      state.isAuth = connected;
    }),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useAuthStore);
}
