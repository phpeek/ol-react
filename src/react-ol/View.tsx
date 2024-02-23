import { FunctionComponent, useContext, useEffect, useRef } from "react";
import olView, { ViewOptions } from "ol/View";

import { MapContext } from "./Map";

const View: FunctionComponent<ViewOptions> = (props: ViewOptions) => {
  const ref = useRef<olView | null>(null);
  const map = useContext(MapContext)

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
