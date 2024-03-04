import olScaleLine, {
  Options as olScaleLineOptions,
} from "ol/control/ScaleLine";
import { useEffect } from "react";
import { useMap } from "react-ol/map/hooks";

type ScaleLineProps = olScaleLineOptions;

export default function ScaleLine(props: ScaleLineProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.addControl(new olScaleLine(props));
  });
  
  return null;
}
