import { useState } from "react"

const UseStateObject = () => {
  const [name, setName] = useState("John")
  const [age, setAge] = useState(25)
  const [hobby, setHobby] = useState("Playing game")

  const handleClick = () => {
    setName("Peter")
    setAge(42)
    setHobby("playing hockey")
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button className="btn" type="buttom" onClick={handleClick}>
        Change peter
      </button>
    </>
  )
}

export default UseStateObject
