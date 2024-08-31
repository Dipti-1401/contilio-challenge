import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import './App.scss';


class App extends React.Component {
  /**
   * Renders the main application component with routes.
   * @returns A div element with class "app" containing the rendered routes.
   */
  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
