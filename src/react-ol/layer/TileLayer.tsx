import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// openlayers
import type { Options as BaseTileLayerOptions } from "ol/layer/BaseTile";
import type TileSource from "ol/source/Tile";
import type olLayer from "ol/layer/Layer";
import olTileLayer from "ol/layer/Tile";

// react-ol
import { useMap } from "react-ol/map/hooks";

export const TileLayerContext = createContext<olLayer | null>(null);

type TileLayerProps = BaseTileLayerOptions<TileSource> & {
  children: ReactNode;
};

export default function TileLayer(props: TileLayerProps) {
  const map = useMap();
  const [layer, setLayer] = useState<olTileLayer<TileSource> | null>(null);
  
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
