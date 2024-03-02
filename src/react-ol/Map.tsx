import { Children, ReactNode, createContext, useEffect, useState } from "react";

import olMap, { MapOptions } from "ol/Map";

import "ol/ol.css";
import "./Map.css";

type MapProps = Omit<MapOptions, "target"> & {
  children: ReactNode,
  onReady?: (map: olMap) => void,
};

export const MapContext = createContext<olMap | null>(null);

export default function Map(props: MapProps) { const [map, setMap] = useState<olMap | null>(null);
  useEffect(() => {
    const map = new olMap(props);

    map.setTarget("map");

    setMap(map);

    if(props.onReady) {
      props.onReady(map);
    } 

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
