"use client";

import { useContext } from "react";
import { DropUIPropsContext } from "../context/DropUIPropsContext";

export const useDropUIPropsCtx = () => {
  const context = useContext(DropUIPropsContext);
  if (!context) {
    throw new Error("useDropUIPropsCtx must be used within a DropUIProvider");
  }
  return context;
};
