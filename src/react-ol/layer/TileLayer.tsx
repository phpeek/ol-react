import { createContext, useContext, useEffect, useState } from "react";

// openlayers
import olTileLayer from "ol/layer/Tile";
import olLayer from "ol/layer/Layer";

// react-ol
import { MapContext } from "react-ol/Map";

export const TileLayerContext = createContext<olLayer | null>(null);

type TileLayerProps = ConstructorParameters<typeof olTileLayer>[0];

export default function TileLayer(props?: TileLayerProps) {
  const map = useContext(MapContext);
  const [layer, setLayer] = useState<olTileLayer | null>(null);
  
  useEffect(() => {
    if (!map) return;

    const layer = new olTileLayer(props);

    map.addLayer(layer);

    setLayer(layer);

    return () => {
      layer.dispose();
    };
  }, [setLayer, map, props]);

  return (
    <TileLayerContext.Provider value={layer}>{props.children}</TileLayerContext.Provider>
  );
}
