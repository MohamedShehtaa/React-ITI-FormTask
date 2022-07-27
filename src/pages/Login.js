import React, { useState } from 'react'


export default function Login() {

  const [user, setUser] = useState({
    userEmail: "",
    password: "",
  });
  const handelUserChange = (e) => {
    console.log(e.target.value, e.target.id);

    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
    handleError(e.target.id, e.target.value)
  }
  const handleSumbit = (e) => {
    e.preventDefault();
  }
  const [userErr, serUserErr] = useState({
    userEmailErr: "",
    passwordErr: "",
  })
  const handleError = (filed, value) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    switch (filed) {
      case 'userEmail':

        serUserErr({
          ...userErr,
          userEmailErr: value.length === 0 ? "Email is required" : regex.test(user.userEmail) ? "" : "not valid"
        });
        break;

      case 'password':
        serUserErr({
          ...userErr,
          passwordErr: value.length === 0 ? "password is required" : value.length < 8 ? "pasworad length must be grater than 8" : "",
        });
        break;

      default:
        serUserErr({
          ...userErr,
        })
        break;
    }
  }

  return (
    <form onSubmit={(e) => { handleSumbit(e) }}>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email address</label>
        <input type="email" className={`form-control ${userErr.userEmailErr && "border-danger"}`} id="userEmail" aria-describedby="emailHelp" value={user.userEmail} onChange={(e) => handelUserChange(e)} />
        <div id="emailHelp" className="form-text text-danger">{userErr.userEmailErr}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="text" className={`form-control ${userErr.passwordErr && "border-danger"}`} id="password" aria-describedby="passwordHelp" value={user.password} onChange={(e) => handelUserChange(e)} />
        <div id="passwordHelp" className="form-text text-danger">{userErr.passwordErr}</div>
      </div>

      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}