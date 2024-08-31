import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

/**
 * LoginForm Component
 * A form for user login with username and password inputs.
 */
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * Validates the form to enable/disable the submit button.
   */
  const isFormValid = username.trim().length > 0 && password.trim().length > 0;

  /**
   * Handles input changes for username and password.
   * @param e - ChangeEvent from input fields.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  /**
   * Handles form submission.
   * Navigates to the Dashboard page if the form is valid.
   * @param e - FormEvent from the form.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/dashboard');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Welcome to Contilio</h1>
      <p>Please log in to continue.</p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
