import { useState } from "react"
import "../styles/Login.css"
export const Login = ()=>{
  // Hooks
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  // Logic
  const handleFormData=(e)=>{
    e.preventDefault()
    console.log('Email:',email);
    console.log('Password:',password);
  }
  
  return (
    <>
      <div className="body_cont">
        <div className="header">
        <h1>Login</h1>
        </div>
        <div >
          <form onSubmit={handleFormData} className="body">
          <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}