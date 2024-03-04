import olZoomToExtent, {
  Options as olZoomToExtentOptions,
} from "ol/control/ZoomToExtent";
import { useEffect } from "react";
import { useMap } from "react-ol/map/hooks";

type ZoomToExtentProps = olZoomToExtentOptions;

export default function ZoomToExtent(props: ZoomToExtentProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoomToExtent(props));
  }, [map, props]);

  return null;
}
