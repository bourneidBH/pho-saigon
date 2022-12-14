import { useState, useEffect, useContext, createContext } from "react"
import API from "../utils/API"

export const MenuContext = createContext()

export const MenuProvider = (props) => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    loadMenuItems()
  }, [])

  console.log("menu", menu)

  const loadMenuItems = async () => {
    try {
      const res = await API.getMenuItems()
      console.log("res", res)
      setMenu(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <MenuContext.Provider 
      {...props}
      value={{
        menu,
        setMenu,
      }}
    />
  )
}

export const MenuContextConsumer = () => {
  return <MenuContext.Consumer />
}


export const useMenuContext = () => useContext(MenuContext)