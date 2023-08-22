import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import newscontext from '../contexts/newscontext';
import "./css/sign.css"
import Alert from './Alert';
function SignUp() {
  const a = useContext(newscontext)
  const [user, setuser] = useState({ name: "", email: "", password: "", cPassword: "" });
  const [status, setstatus] = useState(false)
  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.cPassword) {
      a.signUp(user);
    }
    else {
      setstatus(true);
      setTimeout(() => {
        setstatus(false);
      }, 2000);
    }
  }
  return (
    <div className='container'>
      {a.login.status ? <Alert msg={a.login.msg} color={a.login.color} /> : ""}
      {status ? <Alert msg={"password and confirm password are not same"} color={"danger"} /> : ""}
      <div className='box'>
        <div className='dContainer'>
          <h1>Welcome to A-NEWS</h1>
          <p>
            Here you can sign up to personalize your feed by having access to saved NEWS that you can later read or can refer to in the future for your research <br /> <br />
          </p>
        </div>

        <div className='sContainer'>
          <h3>Sign Up!</h3>
          <form className='signin' onSubmit={onSubmit} >
            <div className="input_component">
              <input type="text" placeholder='name' name='name' value={user.name} onChange={onChange} minLength={3} />
            </div>
            <div className="input_component">
              <input type="email" placeholder='email' name='email' value={user.email} onChange={onChange} />
            </div>
            <div className="input_component">
              <input type="password" placeholder='password' name='password' value={user.password} onChange={onChange} minLength={5} />
            </div>
            <div className="input_component">
              <input type="password" placeholder='confirm password' name='cPassword' value={user.cPassword} onChange={onChange} minLength={5} />
            </div>
            <div className='input_component'>
              <Link to={"/signin"} style={{ borderTop: "0.25rem" }}>Already a user? Sign in</Link>
            </div>
            <div className='input_btn'>
              <button type='submit' className='btn btn-primary sbtn'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp