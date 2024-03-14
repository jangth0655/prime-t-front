import { NameKeyType } from "@/types/NameKeyType";
import { useState } from "react";

export default function useCategory(initialState: NameKeyType) {
  const [category, setCategory] = useState<NameKeyType>(initialState);

  const onStatusCategory = (state: NameKeyType) => {
    setCategory(state);
  };

  return {
    category,
    onStatusCategory,
  };
}
