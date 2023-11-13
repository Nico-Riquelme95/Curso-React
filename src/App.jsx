
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListConteiner } from './Components/ItemListConteiner/ItemListConteiner'

export const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenido a mi tienda"} />
    </>
  )
}
