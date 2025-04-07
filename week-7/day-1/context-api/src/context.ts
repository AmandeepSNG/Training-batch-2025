import { createContext } from "react"

type ContextType = {
  color: string,
  message: string,
  click: (message: string) => void
}
export const ParentContext = createContext<ContextType>({} as ContextType)