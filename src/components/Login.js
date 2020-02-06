import React, { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($username: String!, $password: String!) {
    login( username: $username, password: $password) {
      token,
      user {
        _id
        username
      }
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ loginUser, { loadingU }] = useMutation(LOGIN_MUTATION)

  // whenever the email input is changed, it updates the email var
  const changeUsername = e => {
    setUsername(e.target.value);
  };
  // whenever the password input is changed, it updates the password var
  const changePassword = e => {
    setPassword(e.target.value);
  };
  
  // handles the submission of the form
  // calls the mutation for the login
  const handleSubmit = async e => {
    e.preventDefault();
    if (username && password) {
      const res = await loginUser({
        variables: {
          username,
          password
        }
      });
      // clean the inputs
      setUsername("");
      setPassword("");
    }
  };

    return (
      <div className='content'>
      <div className='loginFormContainer'>
      <form onSubmit={handleSubmit} className="loginForm">
        <fieldset className='loginFields'>
          <h2>Log In</h2>
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={changeUsername}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={changePassword}
            />
          </label>
          <br />
          <button type="submit" className='loginButton'>Login</button>
        </fieldset>
      </form>
      </div>
    </div>
    )
}

export default Login;
