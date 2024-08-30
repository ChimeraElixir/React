import React, { useState } from "react"
import GenderCheckbox from "./GenderCheckBox"
import { Link } from "react-router-dom"
import useSignUp from "../../hooks/useSignUp"

const SignUp = () => {
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const handleCheckBoxChange = (gender) => {
    setInput({ ...inputs, gender: gender })
  }

  const handleChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value })
  }

  const { loading, signup } = useSignUp()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 border-gray-700 rounded-md   border ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">
            {" "}
            Yapp
            <h4 className="text-xs text align-items-center item-center justify-center pb-2 text-gray-500">
              Because There's Always More to Say
            </h4>
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              name="fullName"
              value={inputs.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              name="username"
              value={inputs.username}
              className="w-full input input-bordered h-10"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={inputs.password}
              className="w-full input input-bordered h-10"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              className="w-full input input-bordered h-10"
              onChange={handleChange}
            />
          </div>

          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-info mt-4" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
