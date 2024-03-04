import { useEffect } from "react";

import olZoom, { Options as olZoomOptions } from "ol/control/Zoom";
import { useMap } from "react-ol/map/hooks";

type ZoomProps = olZoomOptions;

export default function Zoom(props: ZoomProps) {
  const map = useMap(); 

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoom(props));
  }, [map, props]);

  return null;
}
