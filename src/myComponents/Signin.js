import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import "./css/sign.css"
import newscontext from '../contexts/newscontext';

function Signin() {
  const a=useContext(newscontext);
  const [user, setuser] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const signin=(e)=>
  {
    e.preventDefault();
    a.signIn(user);
  }
  return (
    <div >
      <h1>Welcome to A-NEWS</h1>
    <div className='siContainer'>
      <h3>Sign In!</h3>
      <form className='signin' onSubmit={signin}>
        <div className="input_component">
          <input type="email" placeholder='email' name='email' value={user.email} onChange={onChange}  />
        </div>
        <div className="input_component">
          <input type="password" placeholder='password' name='password' value={user.password} onChange={onChange} minLength={5}/>
        </div>
        <div className='input_component'>
          <Link to={"/signup"} style={{ borderTop: "0.25rem" }}>Not a user? Sign up</Link>
        </div>
        <div className='input_btn'>
          <button type='submit' className='btn btn-primary sbtn'>Sign In</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Signin