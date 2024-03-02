import olZoomSlider, {
  Options as olZoomSliderOptions,
} from "ol/control/ZoomSlider";
import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

type ZoomSliderProps = olZoomSliderOptions;

export default function ZoomSlider(props: ZoomSliderProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olZoomSlider(props));
  }, [map, props]);

  return null;
}
