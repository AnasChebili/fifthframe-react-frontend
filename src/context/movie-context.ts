import { createContext, Dispatch, SetStateAction } from "react";

export const MovieContext = createContext<{
  setOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<number>>;
} | null>(null);
