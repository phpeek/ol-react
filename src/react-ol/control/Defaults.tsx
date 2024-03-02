import { useContext, useEffect } from "react";
import { defaults, DefaultsOptions } from "ol/control/defaults";
import { MapContext } from "react-ol/Map";

type DefaultsProps = DefaultsOptions;

export default function Defaults(props: DefaultsProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    defaults(props).forEach(control => {
      map.addControl(control);
    });
  }, [map, props]);

  return null;
}
