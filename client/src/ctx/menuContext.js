import { useState, useEffect, createContext } from "react"
import API from "../utils/API"

export const MenuContext = createContext()

export default ({children}) => {
  const [menu, setMenu] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    loadMenuItems()
    loadCategories()
  }, [])

  const loadMenuItems = async () => {
    try {
      const res = await API.getMenuItems()
      setMenu(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  const loadCategories = async () => {
    try {
      const res = await API.getCategories()
      setCategories(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  const ctx = {
    menu,
    setMenu,
    categories,
    setCategories
  }

  return (
    <MenuContext.Provider value={ctx}>{children}</MenuContext.Provider>
  )
}
