import { create } from "zustand";

export type Status = {
  name: "전체" | "예정" | "진행중" | "마감";
  key: "all" | "upcoming" | "progress" | "close";
};

type StatusCategory = {
  status: Status;
  setStatus: (status: Status) => void;
};

export const useStatusCategoryStore = create<StatusCategory>((set) => ({
  status: { name: "전체", key: "all" },
  setStatus: (status: Status) => set(() => ({ status })),
}));
