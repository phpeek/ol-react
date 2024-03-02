import olMousePosition, { Options as olMousePositionOptions } from 'ol/control/MousePosition';
import { useContext, useEffect } from 'react';
import { MapContext } from 'react-ol/Map';

type MousePositionProps = olMousePositionOptions;

export default function MousePosition(props: MousePositionProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.addControl(new olMousePosition(props));
  }, [map, props]);
}
