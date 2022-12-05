import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const YearRelease = ({ data = [], setFilter = (f) => f }) => {
  const options = {
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "22px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },
    colors: [
      "#120202",
      "#360505",
      "#5b0808",
      "#7f0b0b",
      "#a30e0e",
      "#c71111",
      "#eb1414",
      "#ee3838",
      "#f15c5c",
      "#f48080",
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    chart: {
      height: 400,
      type: "treemap",
      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          console.log(config.dataPointIndex);
          setFilter(config.dataPointIndex);
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={data}
        type="treemap"
        height={600}
        width={750}
      />
    </div>
  );
};

export default YearRelease;
