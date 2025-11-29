"use client";

import { createContext } from "react";
import { DesktopContextType } from "../type";

export const DesktopContext = createContext<DesktopContextType | null>(null);
