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
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "dark",
        shadeIntensity: 0.6,
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
