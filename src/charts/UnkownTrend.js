import React from "react";
import ReactApexChart from "react-apexcharts";

const YearRelease = ({ data = [], filter, setFilter = (f) => f }) => {
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
    chart: {
      height: 400,
      type: "treemap",
      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          // console.log(config.dataPointIndex);
          setFilter(data[config.dataPointIndex].spotify_uri);
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
        height={400}
        width={1100}
      />
    </div>
  );
};

export default YearRelease;
