import { create } from "zustand";

export const ACCESS_TOKEN = "access_token";

type InitialState = {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
};

export const useTokenStateStore = create<InitialState>((set) => ({
  accessToken: null,
  setAccessToken: (token: string) =>
    set((state) => ({ ...state, accessToken: token })),
}));
