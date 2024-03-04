import olZoomSlider, {
  Options as olZoomSliderOptions,
} from "ol/control/ZoomSlider";
import { useEffect } from "react";
import { useMap } from "react-ol/map/hooks";

type ZoomSliderProps = olZoomSliderOptions;

export default function ZoomSlider(props: ZoomSliderProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoomSlider(props));
  }, [map, props]);

  return null;
}
