import { useEffect, useRef } from "react";

import olMap, { MapOptions as olMapOptions } from "ol/Map";

import useMapProviderContext from "./useMapProviderContext";

export type Options = Omit<olMapOptions, 
  'controls' | // controlled by Controls components 
  'interactions' | // controlled by Interactions components
  'layers' | // controlled by Layers components
  'overlays' |  // controlled by Overlays components
  'view' // controlled by View component
>

export default function useCreateMapInstance(options: Options): olMap | null {
  const mapInstance = useRef<olMap | null>(null);
  const { map, setMap } = useMapProviderContext();

  // create map instance once
  if(!mapInstance.current) {
    mapInstance.current = new olMap(options);
  }
  
  useEffect(() => {
    setMap(mapInstance.current);

    return () => {
      setMap(null);
    }
  }, [setMap]);
 
  return map;
}

