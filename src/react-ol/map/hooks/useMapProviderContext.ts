import { useContext } from "react";

import { MapProviderContext } from "../MapProvider";

export default function useMapProviderContext() {
  const ctx = useContext(MapProviderContext); 

  if (ctx === false) {
    throw new Error("Please wrap in <MapProvider>");
  }
  
  return ctx;
}
