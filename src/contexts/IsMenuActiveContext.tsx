import { createContext, Dispatch, PropsWithChildren, useState } from "react"

export const IsMenuActiveStateContext = createContext(false)
export const IsMenuActiveDispatchContext = createContext<Dispatch<boolean>>(
  () => {}
)

const IsMenuActiveContextProvider = ({ children }: PropsWithChildren) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  return (
    <IsMenuActiveStateContext.Provider value={isMenuActive}>
      <IsMenuActiveDispatchContext.Provider value={setIsMenuActive}>
        {children}
      </IsMenuActiveDispatchContext.Provider>
    </IsMenuActiveStateContext.Provider>
  )
}

export default IsMenuActiveContextProvider
