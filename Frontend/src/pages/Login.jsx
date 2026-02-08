import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../features/auth/authThunk";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm(form => ({...form, [e.target.name]:e.target.value}))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(form)).unwrap();
      navigate("/products");
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form 
        onSubmit={submitHandler} 
        className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input 
            onChange={changeHandler} 
            type="email" 
            name="email" 
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            placeholder="example@mail.com" 
            required 
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input 
            onChange={changeHandler} 
            type="password" 
            name="password" 
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 mb-4"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-600">
          Not registered? <Link className="text-blue-600 hover:underline" to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login