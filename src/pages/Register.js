import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Registrer(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const handelUserChange = (e) => {
    console.log(e.target.value, e.target.id);

    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
    handleError(e.target.id, e.target.value)
  }
  const history = useHistory({})
  const handleSumbit = (e) => {
    e.preventDefault();
    history.push("/")
  }
  const [userErr, serUserErr] = useState({
    nameErr: "",
    emailErr: "",
    userNameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  })
  const handleError = (filed, value) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(user.password)

    switch (filed) {
      case 'name':

        serUserErr({
          ...userErr,
          nameErr: value.length === 0 ? "Email is required" : ""
        });
        break;
      case 'email':

        serUserErr({
          ...userErr,
          emailErr: value.length === 0 ? "Email is required" : regex.test(user.email) ? "" : "not valid"
        });
        break;
      case 'userName':

        serUserErr({
          ...userErr,
          userNameErr: value.length === 0 ? "Email is required" : value.indexOf(" ") !== -1 ? "please no white spaces" : ""
        });
        break;

      case 'password':
        serUserErr({
          ...userErr,
          passwordErr: value.length === 0 ? "password is required" : passRegex.test(user.password) ? "" : "not valid"
        });
        console.log(userErr.passwordErr)
        break;
      case 'confirmPassword':
        serUserErr({
          ...userErr,
          confirmPasswordErr: value.length === 0 ? "Confirm password is required" : value === user.password ? "" : "not matched",
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
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className={`form-control ${userErr.nameErr && "border-danger"}`} id="name" aria-describedby="nameHelp" value={user.name} onChange={(e) => handelUserChange(e)} />
        <div id="nameHelp" className="form-text text-danger">{userErr.nameErr}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className={`form-control ${userErr.emailErr && "border-danger"}`} id="email" aria-describedby="emailHelp" value={user.email} onChange={(e) => handelUserChange(e)} />
        <div id="emailHelp" className="form-text text-danger">{userErr.emailErr}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">User Name</label>
        <input type="text" className={`form-control ${userErr.userNameErr && "border-danger"}`} id="userName" aria-describedby="userNameHelp" value={user.userName} onChange={(e) => handelUserChange(e)} />
        <div id="userNameHelp" className="form-text text-danger">{userErr.userNameErr}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="text" className={`form-control ${userErr.passwordErr && "border-danger"}`} id="password" aria-describedby="passwordHelp" value={user.password} onChange={(e) => handelUserChange(e)} />
        <div id="passwordHelp" className="form-text text-danger">{userErr.passwordErr}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="text" className={`form-control ${userErr.confirmPasswordErr && "border-danger"}`} id="confirmPassword" aria-describedby="confirmPasswordHelp" value={user.confirmPassword} onChange={(e) => handelUserChange(e)} />
        <div id="confirmPasswordHelp" className="form-text text-danger">{userErr.confirmPasswordErr}</div>
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}