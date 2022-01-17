import React, { createContext, useState, useEffect } from "react";
import { IColor } from "../types";

export const ColorsContext = createContext<{
  colors: IColor[];
  setColors: React.Dispatch<React.SetStateAction<IColor[]>>;
}>({ colors: [], setColors: () => null });

function Context({ children }: React.PropsWithChildren<{}>) {
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
    const colors = localStorage.getItem("colors");
    if (!colors) return;
    setColors(JSON.parse(colors));
  }, [setColors]);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorsContext.Provider>
  );
}

export default Context;
