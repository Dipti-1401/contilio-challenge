import React from 'react';
import './BarChart.scss';

/**
 * Attribute interface representing each attribute's structure.
 */
interface Attribute {
  name: string;
  value: number;
  unit: string;
}

/**
 * BarChart Props interface.
 */
interface BarChartProps {
  attributes: Attribute[];
}

/**
 * BarChart Component
 * Renders a simple bar chart based on provided attributes.
 */
class BarChart extends React.Component<BarChartProps> {
  /**
   * Lifecycle method: componentDidMount
   */
  componentDidMount() {
    console.log('BarChart mounted');
  }

  /**
   * Lifecycle method: componentDidUpdate
   * @param prevProps 
   */
  componentDidUpdate(prevProps: BarChartProps) {
    if (prevProps.attributes !== this.props.attributes) {
      console.log('BarChart updated');
    }
  }

  /**
   * Renders a simple bar chart based on provided attributes.
   * @returns A div element with class "bar-chart" containing a
   * collection of div elements with class "bar-container" each
   * containing a span for the label and a div for the bar.
   */
  render() {
    const { attributes } = this.props;

    return (
      <div className="bar-chart">
        {attributes.map((attr, index) => (
          <div key={index} className="bar-container">
            <span className="label">{attr.name}</span>
            <div
              className="bar"
              style={{ height: `${attr.value * 10}px` }}
            ></div>
            <span className="value">{attr.value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default BarChart;
