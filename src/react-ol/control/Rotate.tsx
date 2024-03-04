import olRotate, { Options as olRotateOptions } from 'ol/control/Rotate';
import { useEffect } from 'react';
import { useMap } from 'react-ol/map/hooks';

type RotateProps = olRotateOptions;

export default function Rotate(props: RotateProps) {
  const map = useMap();  
  
  useEffect(() => {
    if (!map) return;

    map.addControl(new olRotate(props));

  }, [map, props])
  return null;
}
