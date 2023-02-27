import Dropdown from "./Components/Dropdown";
import Food from "./Components/Food";
import './App.css';
import { useState } from 'react'
import MenuData from "./Data/MenuData";

function App() {

  const [food, setFood] = useState(MenuData)

  const changeFood = (e) => {
    const category = e.target.value
    if (category === "Menu") {
      setFood(MenuData)
    } else {
      const finalList = MenuData.filter((list) => {
        return list.menu === category
      })
      setFood(finalList)
    }
  }

  return (
    <div className="container">
      <Dropdown changeFood={changeFood} />
      <div className="content">
        {food.map((data, index) => {
          return <Food key={index} {...data} />
        })}
      </div>
    </div>
  );
}

export default App;
