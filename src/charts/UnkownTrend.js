import React from "react";
import ReactApexChart from "react-apexcharts";

const YearRelease = () => {
  const series = [
    {
      data: [
        {
          x: "New Delhi",
          y: 218,
        },
        {
          x: "Kolkata",
          y: 149,
        },
        {
          x: "Mumbai",
          y: 184,
        },
        {
          x: "Ahmedabad",
          y: 55,
        },
        {
          x: "Bangaluru",
          y: 84,
        },
        {
          x: "Pune",
          y: 31,
        },
        {
          x: "Chennai",
          y: 70,
        },
        {
          x: "Jaipur",
          y: 30,
        },
        {
          x: "Surat",
          y: 44,
        },
        {
          x: "Hyderabad",
          y: 68,
        },
        {
          x: "Lucknow",
          y: 28,
        },
        {
          x: "Indore",
          y: 19,
        },
        {
          x: "Kanpur",
          y: 29,
        },
      ],
    },
  ];
  const options = {
    legend: {
      show: false,
    },
    chart: {
      height: 400,
      type: "treemap",
      toolbar: {
        show: false,
      }
    },
    
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="treemap"
        height={400}
        width={700}
      />
    </div>
  );
};

export default YearRelease;
