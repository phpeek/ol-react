import { ReactNode, createContext } from "react";

import olMap, { MapOptions } from "ol/Map";

import { useCreateMapInstance } from "./hooks";

import "ol/ol.css";
import "./Map.css";

type MapProps = Omit<MapOptions, "target"> & {
  children: ReactNode;
  onReady?: (map: olMap) => void;
};

export const MapContext = createContext<olMap | null>(null);

export default function Map(props: MapProps) {
  const map = useCreateMapInstance(props);

  map?.setTarget('map');

  return (
    <div id="map">
      {props.children}
    </div>
  );
}
