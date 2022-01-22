import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
