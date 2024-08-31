import React from 'react';
import './Dashboard.scss';
import BarChart from '../BarChart/BarChart';

/**
 * Attribute interface representing each attribute's structure.
 */
interface Attribute {
  name: string;
  value: number;
  unit: string;
}

/**
 * Item interface representing each item's structure in the JSON data.
 */
interface Item {
  title: string;
  attributes: Attribute[];
}

/**
 * Dashboard State interface.
 */
interface DashboardState {
  items: Item[];
  currentItemIndex: number;
  isLoading: boolean;
}

/**
 * Dashboard Component
 * Displays item details and a bar chart based on fetched JSON data.
 */
class Dashboard extends React.Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [],
      currentItemIndex: 0,
      isLoading: true,
    };
  }

  /**
   * Lifecycle method: componentDidMount
   * Fetches data from data.json upon mounting.
   */
  componentDidMount() {
    console.log('Dashboard mounted');
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: Item[]) => {
        this.setState({ items: data, isLoading: false });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ isLoading: false });
      });
  }

  /**
   * Lifecycle method: componentDidUpdate
   * Logs changes when the currentItemIndex updates.
   * @param prevProps 
   * @param prevState 
   */
  componentDidUpdate(prevProps: {}, prevState: DashboardState) {
    if (prevState.currentItemIndex !== this.state.currentItemIndex) {
      console.log(`Switched to item index: ${this.state.currentItemIndex}`);
    }
  }

  /**
   * Handles range input changes to switch items.
   * @param e - ChangeEvent from the range input.
   */
  handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value, 10);
    this.setState({ currentItemIndex: index });
  };

  render() {
    const { items, currentItemIndex, isLoading } = this.state;
    const currentItem = items[currentItemIndex] || {};

    if (isLoading) {
      return <div className="dashboard">Loading...</div>;
    }

    return (
      <div className="dashboard">
        <h1>{currentItem.title}</h1>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {currentItem.attributes?.map((attr, idx) => (
                <tr key={idx}>
                  <td>{attr.name}</td>
                  <td>{`${attr.value} ${attr.unit}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <BarChart attributes={currentItem.attributes || []} />
        </div>
        <input
          type="range"
          min="0"
          max={items.length - 1}
          value={currentItemIndex}
          onChange={this.handleRangeChange}
        />
      </div>
    );
  }
}

export default Dashboard;
