import olRotate, { Options as olRotateOptions } from 'ol/control/Rotate';
import { useContext, useEffect } from 'react';
import { MapContext } from 'react-ol/Map';

type RotateProps = olRotateOptions;

export default function Rotate(props: RotateProps) {
  const map = useContext(MapContext);
  
  useEffect(() => {
    if (!map) return;

    map.addControl(new olRotate(props));

  }, [map, props])
  return null;
}
