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

  /**
   * Renders the DashboardPage component based on the state.
   * If the component is still loading, renders a "Loading..." message.
   * Otherwise, renders a Dashboard component.
   * @returns A div element with class "dashboard-page" containing the rendered content.
   */
  render() {
    return (
      <div className="dashboard-page">
        <Dashboard />
      </div>
    );
  }
}

export default DashboardPage;
