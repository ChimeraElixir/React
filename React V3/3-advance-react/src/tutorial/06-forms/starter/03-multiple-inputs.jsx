import { useState } from "react";

const MultipleInputs = () => {

  const[users,setUsers]=useState([]);

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
  })
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUsers([...users,user])
    setUser({
      name:"",
      email:"",
      password:"",
    })
  }


  return (
    <div>
      <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' value={user.name} onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email'name="email" value={user.email} onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>  
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" value={user.password} onChange={handleChange}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Users</h2>
      {
        users.map((person,index)=>{
          return <div key={index}>

          <h4>Name :{person.name}</h4>
          <h4>Email :{person.email}</h4>
          <h4>Password :{person.password}</h4>
          </div>
        })
      }
    </div>
  );
};
export default MultipleInputs;
