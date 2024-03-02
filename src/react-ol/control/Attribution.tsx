import olAttribution, {
  Options as olAttributionOptions,
} from "ol/control/Attribution";
import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

type AttributionProps = olAttributionOptions;

export default function Attribution(props: AttributionProps) {
  const map = useContext(MapContext);

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
