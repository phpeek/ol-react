import { ReactNode } from "react";

type LayerProps = {
  children: ReactNode | ReactNode[], 
}

export default function Layers({ children }: LayerProps) {
  return <>{children}</>;
}
