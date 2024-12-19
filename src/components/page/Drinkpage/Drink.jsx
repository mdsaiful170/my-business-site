import DrinkCarusole from "./DrinkCarusole"
import DrinkFrom from "./DrinkFrom"
import DrinkHero from "./DrinkHero"
import DrinkMap from "./DrinkMap"
import {DrinkResturants} from "./DrinkResturants"



const Drink = () => {
  return (
    <>
       <DrinkHero />
       <DrinkFrom />
       <DrinkResturants title={"Popular restuarants in Lagos"} />
       <DrinkCarusole />
       <DrinkResturants title={"Resturants nearby"} />
       <DrinkMap />
    </>
  )
}

export default Drink
