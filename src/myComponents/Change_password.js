import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/sign.css"
import newscontext from '../contexts/newscontext';
import Alert from "./Alert"

function Change_password() {
  const a = useContext(newscontext);
  const [user, setuser] = useState({ new_password: "", c_password: "", old_password: "" });
  const [pass, setpass] = useState(false)
  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const signin = (e) => {
    e.preventDefault();
    if (user.new_password === user.c_password) {
      a.change_password(user.old_password, user.new_password);
    }
    else {
      setuser({ new_password: "", c_password: "", old_password: "" })
      setpass(true);
      setTimeout(() => {
        setpass(false)
      }, 1000);
    }
  }
  return (
    <div >
      {pass ? <Alert msg={"New password and confirm password do not match!"} color={"danger"} /> : ""}
      {a.cPassword.status ? <Alert msg={a.cPassword.msg} color={a.cPassword.color} /> : ""}
      <h1>Change your password</h1>
      <div className='siContainer'>
        <h3>Sign In!</h3>
        <form className='signin' onSubmit={signin}>

          <div className="input_component">
            <input type="password" placeholder='old password' name='old_password' value={user.old_password} onChange={onChange} minLength={5} />
          </div>
          <div className="input_component">
            <input type="password" placeholder='new password' name='c_password' value={user.c_password} onChange={onChange} minLength={5} />
          </div>
          <div className="input_component">
            <input type="password" placeholder='confirm password' name='new_password' value={user.new_password} onChange={onChange} minLength={5} />
          </div>
          <div className='input_btn'>
            <button type='submit' className='btn btn-primary sbtn'>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Change_password