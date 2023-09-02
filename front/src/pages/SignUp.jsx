import axios from 'axios';
import React, { useState } from 'react'
import { AppRoute } from '../App';

function SignUp() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

const SignUpuser = (e) => {
  e.preventDefault();
  const payload = {username,email,password}
  console.log(payload)
  axios.post(`${AppRoute}api/signup`,payload)
  .then((json)=> console.log(json.data))
  .catch(err => console.log(err.message))
}



  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
          <div className='p-5 wrapper rounded text-white'>
          <div className="logo">
              <img
                src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
                alt=""
              />
            </div>
            <div className="text-center mt-4 name">
            Sign Up
            </div>
            <form onSubmit={SignUpuser}>
            <div className="mb-3 form-field">
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputName"
                  placeholder='UserName'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 form-field">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 form-field">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <button type="submit" className="btn ">
                SignUp
              </button>
            </form>

          </div>


        </div>
      </div>
    </>
  )
}

export default SignUp