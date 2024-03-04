import { useEffect } from "react";
import { defaults, DefaultsOptions } from "ol/control/defaults";
import { useMap } from "react-ol/map/hooks";

type DefaultsProps = DefaultsOptions;

export default function Defaults(props: DefaultsProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    defaults(props).forEach(control => {
      map.addControl(control);
    });
  }, [map, props]);

  return null;
}
