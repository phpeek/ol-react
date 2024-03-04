import olAttribution, {
  Options as olAttributionOptions,
} from "ol/control/Attribution";
import {  useEffect } from "react";
import { useMap } from "react-ol/map/hooks";

type AttributionProps = olAttributionOptions;

export default function Attribution(props: AttributionProps) {
  const map = useMap(); 

  useEffect(() => {
    if (!map) return;

    const control = new olAttribution(props);

    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map, props]);

  return null;
}
