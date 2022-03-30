import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  const submitCreds = (e) => {
    e.preventDefault();
    {
      hasAccount
        ? signInUser(username, password).then(({ email }) => setUser(email))
        : signUpUser(username, password).then(({ email }) => setUser(email));
    }
    console.log('submitted');
  };

  return (
    <div className="container">
      <div className="header">header</div>
      <div className="sign-form">
        <div className="sign-in-out">
          <h3 className={`${hasAccount ? '' : 'selected'}`} onClick={() => setHasAccount(false)}>
            Sign Up
          </h3>
          <h3 className={`${hasAccount ? 'selected' : ''}`} onClick={() => setHasAccount(true)}>
            Sign In
          </h3>
        </div>
        <form onSubmit={submitCreds}>
          <label>
            Username:
            <input className="input" type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Username:
            <input
              className="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Sign</button>
        </form>
      </div>
    </div>
  );
}
