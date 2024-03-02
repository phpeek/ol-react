import olFullScreen, {
  Options as olFullScreenOptions,
} from "ol/control/FullScreen";
import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

type FullScreenProps = olFullScreenOptions;

export default function FullScreen(props: FullScreenProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olFullScreen(props));
  }, [map, props]);

  return null;
}
