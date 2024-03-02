import { useContext, useEffect } from "react";
import { MapContext } from "react-ol/Map";
import olOverviewMap, {
  Options as olOverviewMapOptions,
} from "ol/control/OverviewMap";

type OverviewMapProps = olOverviewMapOptions;

export default function OverviewMap(props: OverviewMapProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    map.addControl(new olOverviewMap(props));
  });

  return null;
}
