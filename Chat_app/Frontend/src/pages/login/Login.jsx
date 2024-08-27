import React from "react"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 border-gray-700 rounded-md border ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              id="username"
              className="w-full input input-bordered  h-10"
            />
          </div>

          <div>
            <label className="label" htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id=""
              name="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-info mt-4">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
