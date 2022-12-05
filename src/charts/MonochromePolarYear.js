import React from "react";
import ReactApexChart from "react-apexcharts";

const PolarAreaChart = ({ data = { data: [], labels: [] } }) => {
  console.log(data);
  const options = {
    chart: {
      type: "polarArea",
    },
    labels: data.labels,
    colors: ["#FCF187", "#FFBB21", "#91CEFF", "#0051CA", "#090089"],
    fill: {
      opacity: 1,
      // colors: ["#FCF187", "#FFBB21", "#91CEFF", "#0051CA", "#090089"],
    },
    // dataLabels: {
    //   colors: ["#FCF187", "#FFBB21", "#91CEFF", "#0051CA", "#090089"],
    // },
    stroke: {
      width: 1,
      colors: ["#FCF187", "#FFBB21", "#91CEFF", "#0051CA", "#090089"],
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
        height={350}
      />
    </div>
  );
};

export default PolarAreaChart;
