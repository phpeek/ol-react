import { Options } from "ol/layer/BaseTile";
import olTileLayer from "ol/layer/Tile";
import { useContext, useEffect, useRef } from "react";
import { MapContext } from "react-ol/Map";

type TileLayerProps = Options<olTileLayer>;

const TileSource: FunctionComponent<TileLayerProps>(props: TileLayerProps) => {
  const ref = useRef<olTileLayer | null>(null);
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    const layer = new olTileLayer(props);

    layer.setMap(map);

    ref.current = layer
    return () => {
      layer.dispose(); 
    }
  })

  return null;
}
