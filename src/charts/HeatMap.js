import ReactApexChart from "react-apexcharts";
const HeatMap = ({
  data,
  width,
  height,
  x,
  y,
  color,
  radius,
  filter,
  setFilter = (f) => f,
}) => {
  const options = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          if (filter.date === undefined) {
            console.log(config.dataPointIndex + 1, 12 - config.seriesIndex);
            setFilter({
              date: config.dataPointIndex + 1,
              month: 12 - config.seriesIndex,
            });
          } else {
            setFilter({});
            console.log("Nothing set")
          }
          
        },
      },
    },
    colors: ["#008FFB"],
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },

    stroke: {
      width: 1,
    },

    xaxis: {
      labels: {
        show: false,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={data}
        type="heatmap"
        height={200}
      />
    </div>
  );
};

export default HeatMap;
