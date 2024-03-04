import olMousePosition, { Options as olMousePositionOptions } from 'ol/control/MousePosition';
import { useEffect } from 'react';
import { useMap } from 'react-ol/map/hooks';

type MousePositionProps = olMousePositionOptions;

export default function MousePosition(props: MousePositionProps) {
  const map = useMap();
  
  useEffect(() => {
    if (!map) {
      return;
    }

    map.addControl(new olMousePosition(props));
  }, [map, props]);
}
