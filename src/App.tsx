import Map from "react-ol/Map";
import View from "react-ol/View";
import Layers from "react-ol/layers";
import TileLayer from "react-ol/layers/TileLayer";
import { OSM } from "react-ol/sources";

export default function App() {
  return (
    <div>
      <Map>
        <Layers>
          <TileLayer>
            <OSM />
          </TileLayer>
        </Layers>
        <View
          center={[0, 0]}
          zoom={2}
        />
      </Map>
    </div>
  );
}
