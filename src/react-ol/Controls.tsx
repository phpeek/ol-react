import { ReactNode } from "react"

type ControlsProps = { children: ReactNode }

export default function Controls({ children }: ControlsProps) {
  return <>{ children }</>
}
