import type { ReactNode } from "react";

export { default as TileLayer } from './TileLayer';

type LayerProps = {
  children: ReactNode | ReactNode[], 
}

export default function Layers({ children }: LayerProps) {
  return <>{children}</>;
}
