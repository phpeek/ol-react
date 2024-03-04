import { createContext, useState } from "react";
import type { ReactNode } from "react";

import olMap from "ol/Map";

// initial value is false to detect missing MapProvider wrapping component
type MapProviderContextType =
  | false
  | {
      // map instance
      map: olMap | null;

      // used by useCreateMapInstance hook
      setMap: (map: olMap | null) => void;
    };

export const MapProviderContext = createContext<MapProviderContextType>(false);

type MapProviderProps = {
  children: ReactNode;
};

export default function MapProvider({ children }: MapProviderProps) {
  const [map, setMap] = useState<olMap | null>(null);

  return (
    <MapProviderContext.Provider
      value={{
        map,
        setMap,
      }}
    >
      {children}
    </MapProviderContext.Provider>
  );
}
