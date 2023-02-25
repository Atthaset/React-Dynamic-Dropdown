import Dropdown from "./Components/Dropdown";
import Food from "./Components/Food";
import './App.css';
import {useState} from 'react'
import MenuData from "./Data/MenuData";

function App() {

  const[food,setFood] = useState(MenuData)

  return (
    <div className="container">
      <Dropdown />
      <div className="content">
        {food.map((data,index)=>{
          return <Food key={index} {...data}/>
        })}
      </div>
    </div>
  );
}

export default App;
