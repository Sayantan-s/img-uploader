import { useContext } from "react";
import { DesktopContext } from "../context/DesktopContext";

export const useDesktopCtx = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error(
      "DropUI.Desktop subcomponents must be used within DropUI.Desktop"
    );
  }
  return context;
};
