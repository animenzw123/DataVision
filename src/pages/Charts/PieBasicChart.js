import React from "react";
import NVD3Chart from "react-nvd3";

const datum = [
  { key: "Project A", y: 29, color: "#ff8a65" },
  { key: "Project B", y: 12, color: "#f4c22b" },
  { key: "Project C", y: 32, color: "#04a9f5" },
  { key: "Project D", y: 85, color: "#3ebfea" },
  { key: "Project E", y: 92, color: "#4F5467" },
];

class PieBasicChart extends React.Component {
  render() {
    return (
      <NVD3Chart
        id="chart"
        height={300}
        type="pieChart"
        datum={datum}
        x="key"
        y="y"
      />
    );
  }
}

export default PieBasicChart;
