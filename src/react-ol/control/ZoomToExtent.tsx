import olZoomToExtent, {
  Options as olZoomToExtentOptions,
} from "ol/control/ZoomToExtent";
import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

type ZoomToExtentProps = olZoomToExtentOptions;

export default function ZoomToExtent(props: ZoomToExtentProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoomToExtent(props));
  }, [map, props]);

  return null;
}
