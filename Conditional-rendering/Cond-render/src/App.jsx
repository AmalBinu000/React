import { useState } from 'react'
import UserGreeting from './Components/UserGreeting'
import FruitList from './Components/FruitList'
import Fruits from './Components/Fruits'



function App() {
  
    const fruits = [
      { id :1 ,name : "apple" , calaries : 95},
      { id :2 ,name : "pineapple" , calaries : 139},
      { id :3 ,name : "orange" , calaries : 35},
      { id :4 ,name : "avacado" , calaries : 78}
    ]

    const vegitables = [
      { id :1 ,name : "carrot" , calaries : 95},
      { id :2 ,name : "tomato" , calaries : 139},
      { id :3 ,name : "potato" , calaries : 35},
      { id :4 ,name : "spinach" , calaries : 78}
    ]



  return (
    <>
     {/* <UserGreeting isLoggedIn={false} userName='Amal'/> */}
     {/* <FruitList/> */}
     {fruits.length > 0 && <Fruits items={fruits} categeory ="Fruits"/> }
     {vegitables.length > 0 && <Fruits items={vegitables} categeory ="Vegitables"/> }
     
    </>
  )
}

export default App
