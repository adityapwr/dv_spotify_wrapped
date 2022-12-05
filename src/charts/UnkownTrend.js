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
      "#3B93A5",
      "#F7B844",
      "#ADD8C7",
      "#EC3C65",
      "#CDD7B6",
      "#C1F666",
      "#D43F97",
      "#1E5D8C",
      "#421243",
      "#7F94B0",
      "#EF6537",
      "#C0ADDB",
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
        width={800}
      />
    </div>
  );
};

export default YearRelease;
