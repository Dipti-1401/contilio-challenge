import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

/**
 * LoginPage Component
 * Centers the LoginForm on the page.
 */
class LoginPage extends React.Component {
  /**
   * Lifecycle method: componentDidMount
   */
  componentDidMount() {
    console.log('LoginPage mounted');
  }

  render() {
    return (
      <div className="login-page">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
