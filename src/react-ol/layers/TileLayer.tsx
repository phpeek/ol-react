import olTileLayer from "ol/layer/Tile";
import Layer from "ol/layer/Layer";
import { createContext, useContext, useEffect, useState } from "react";
import { MapContext } from "react-ol/Map";

export const TileLayerContext = createContext<Layer | null>(null);

export default function TileLayer(props) {
  const map = useContext(MapContext);
  const [layer, setLayer] = useState<Layer | null>(null);
  
  useEffect(() => {
    if (!map) return;

    const layer = new olTileLayer(props.options);

    map.addLayer(layer);

    setLayer(layer);

    return () => {
      layer.dispose();
    };
  }, [setLayer, map, props.options]);

  return (
    <TileLayerContext.Provider value={layer}>{props.children}</TileLayerContext.Provider>
  );
}
