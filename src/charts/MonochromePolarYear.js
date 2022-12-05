import React from "react";
import ReactApexChart from "react-apexcharts";

const PolarAreaChart = ({ data = { data: [], labels: [] } }) => {
  console.log(data);
  const options = {
    chart: {
      type: "polarArea",
    },
    labels: data.labels,
    fill: {
      opacity: 1,
      colors: ["#FFBB21", "#FCF187", "#91CEFF", "#0051CA", "#090089"],
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "right",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={data.data}
        type="polarArea"
        height={450}
      />
    </div>
  );
};

export default PolarAreaChart;
