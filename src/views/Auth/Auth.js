import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();

  const submitCreds = async (e) => {
    e.preventDefault();

    try {
      if (hasAccount) {
        const resp = await signInUser(username, password);
        setUser(resp.email);
      } else {
        const resp = await signUpUser(username, password);
        setUser(resp.email);
      }
      history.push('/todos');
    } catch (error) {
      setError(error.message);
    }
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
          {error && <div>{error}</div>}
          <label>
            Username:
            <input className="input" type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input
              className="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>{hasAccount ? 'Sign In' : 'Sign Up'}</button>
        </form>
      </div>
    </div>
  );
}
