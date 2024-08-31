import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import './DashboardPage.scss';

/**
 * DashboardPage Component
 * Centers the Dashboard on the page.
 */
class DashboardPage extends React.Component {
  /**
   * Lifecycle method: componentDidMount
   */
  componentDidMount() {
    console.log('DashboardPage mounted');
  }

  render() {
    return (
      <div className="dashboard-page">
        <Dashboard />
      </div>
    );
  }
}

export default DashboardPage;
