import { ReactElement, createContext, useEffect, useRef, useState } from "react";

import olMap, { MapOptions } from "ol/Map";

import View from "./View";

import "ol/ol.css";
import "./Map.css";

type MapProps = Omit<MapOptions, "target"> & {
  children: ReactElement<typeof View>;
};

export const MapContext = createContext<olMap | null>(null);

export default function Map(props: MapProps) {
  const [map, setMap] = useState<olMap | null>(null);

  useEffect(() => {
    const map = new olMap(props);

    map.setTarget("map");

    setMap(map);

    return () => {
      map.dispose();
    };
  }, [props]);

  return (
    <MapContext.Provider value={map}>
      <div id="map">{props.children}</div>
    </MapContext.Provider>
  );
}
