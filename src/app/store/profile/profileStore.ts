import create from 'zustand';
import produce from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { immer } from 'zustand/middleware/immer';

const user: any = {
  id: undefined,
};

export const useProfileStore = create<any>((set: any, get: any) => ({
  user: user,
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', useProfileStore);
}
