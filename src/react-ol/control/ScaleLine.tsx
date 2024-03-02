import olScaleLine, {
  Options as olScaleLineOptions,
} from "ol/control/ScaleLine";
import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";

type ScaleLineProps = olScaleLineOptions;

export default function ScaleLine(props: ScaleLineProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olScaleLine(props));
  });
  
  return null;
}
