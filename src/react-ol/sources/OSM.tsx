import { useContext, useEffect } from "react";
import OSMSource from "ol/source/OSM";
// openlayers
import type { Options as OSMOptions } from 'ol/source/OSM'
// react-ol
import { TileLayerContext } from "react-ol/layers/TileLayer";

type OSMProps = OSMOptions; 

export default function OSM(props?: OSMProps): void {
  const layer = useContext(TileLayerContext);

  useEffect(() => {
    if (!layer) return;

    const osm = new OSMSource(props);
    layer.setSource(osm);

    return () => {
      osm.dispose();
    };
  }, [props, layer]);

  return;
}
