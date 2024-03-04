import { useContext } from "react";

import olMap from 'ol/Map';

import useMapProviderContext from "./useMapProviderContext";

export default function useMap(): olMap | null {
  const { map } = useMapProviderContext(); 
  
  return map;
}
