"use client";

import { createContext } from "react";
import { DropUIPropsContextType } from "../type";

export const DropUIPropsContext = createContext<DropUIPropsContextType | null>(
  null
);
