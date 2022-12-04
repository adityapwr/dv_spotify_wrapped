import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = ({
  data = [
    {
      name: [],
      data: [],
    },
  ],
}) => {
  console.log(data);
  const options = {
    chart: {
      type: "bar",
      height: 380,
      events: {
        dataPointSelection: (event, chartContext, config) => {
          console.log(config.w.config.labels[config.dataPointIndex]);
        },
      },
    },
    xaxis: {
      type: "category",
      categories: data[0].name,
    },
    yaxis: {
      title: {
        text: "Mins",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        series={data}
        options={options}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
