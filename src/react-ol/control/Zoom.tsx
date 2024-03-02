import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

import olZoom, { Options as olZoomOptions } from "ol/control/Zoom";

type ZoomProps = olZoomOptions;

export default function Zoom(props: ZoomProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoom(props));
  }, [map, props]);

  return null;
}
