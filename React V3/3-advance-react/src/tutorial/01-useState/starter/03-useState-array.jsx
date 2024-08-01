import { useState } from "react"
import {data} from '../../../data'

const UseStateArray = () => {

  const [people,setPeople] =useState(data);

  const singleClick = (id)=>{
      setPeople(people.filter((person)=>person.id!=id))
  }
  const removeAll = ()=>{
      setPeople(people.filter((person)=>{
        false
      }))
  }


  return (
    <>
      <h2>useState array example</h2>
      {
        people.map((person)=>{
          const {id,name} = person;
          return (<div key = {id}>
            <h3>{name}</h3>
            <button className="btn" type="button" onClick={()=>singleClick(id)}>Remove Item</button>
            </div>
          )

        })
      }
      <button className="btn" type="button" onClick={()=>removeAll()} >Remove All</button>
    </>
  )
}

export default UseStateArray
