import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    setUsers([...users, { fakeId, name }]);
    setName("");
  };

  const handleRemove = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user?.id}>
            <h4 key={user?.id || 5}>{user.name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => handleRemove(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
