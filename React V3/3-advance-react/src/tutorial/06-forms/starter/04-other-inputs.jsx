import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping,setShipping]= useState(false);
  const [framework,setFramework] = useState('react')


  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' id='shipping' name='shipping' value={shipping} onChange={(e)=>setShipping(e.target.checked)} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select id='framework' name='framework' value={framework} onChange={(e)=>setFramework(e.target.value)}>
            {frameworks.map((framework)=>{
              return (<option key={framework}>{framework}</option>);
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
