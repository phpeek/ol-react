import { useEffect } from "react";
import olOverviewMap, {
  Options as olOverviewMapOptions,
} from "ol/control/OverviewMap";
import { useMap } from "react-ol/map/hooks";

type OverviewMapProps = olOverviewMapOptions;

export default function OverviewMap(props: OverviewMapProps) {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;

    map.addControl(new olOverviewMap(props));
  });

  return null;
}
