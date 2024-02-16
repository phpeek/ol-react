import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import Map from "react-ol/Map";
import View from "react-ol/View";

export default function App() {
  return (
    <div>
      <Map
        layers={[
          new TileLayer({
            source: new OSM(),
          }),
        ]}
      >
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
