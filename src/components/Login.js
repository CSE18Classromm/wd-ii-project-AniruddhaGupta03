import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_USER',
      user: { email: email }
    });
    navigate('/');
  };

  const register = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_USER',
      user: { email: email }
    });
    navigate('/');
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt="Amazon Logo"
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amazon Clone Conditions of Use.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;