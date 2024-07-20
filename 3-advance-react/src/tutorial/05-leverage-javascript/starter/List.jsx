import React from 'react'
import {people} from '../../../data'
import Person from './Person';

const List = () => {
  return (
    <div>
      <h2>Leverage Javascript Optional Chaining</h2>
      {
        people.map((person,index)=>{
            return <Person key={index} {...person}/>;
        })
      }
    </div>
  )
}

export default List
