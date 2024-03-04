import olFullScreen, {
  Options as olFullScreenOptions,
} from "ol/control/FullScreen";
import { useEffect } from "react";
import { useMap } from "react-ol/map/hooks";

type FullScreenProps = olFullScreenOptions;

export default function FullScreen(props: FullScreenProps) {
  const map = useMap(); 
  
  useEffect(() => {
    if (!map) return;

    map.addControl(new olFullScreen(props));
  }, [map, props]);

  return null;
}
