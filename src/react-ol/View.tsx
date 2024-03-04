import { useEffect, useRef } from "react";
import olView, { ViewOptions as olViewOptions } from "ol/View";

import { useMap } from "./map/hooks";

type ViewProps = olViewOptions;

const View = (props: ViewProps) => {
  const ref = useRef<olView | null>(null);
  const map = useMap();

  useEffect(() => {
    // map not initialized
    if (!map) return;
    
    const view = new olView(props);

    ref.current = view;

    map.setView(view);

    return () => {
      view.dispose();
    }
  }, [props, map]);

  return null;
};

export default View;
