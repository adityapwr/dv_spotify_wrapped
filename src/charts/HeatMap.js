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
            console.log("Nothing set");
          }
        },
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 25,
              name: "very low",
              color: "#cefad0",
            },
            {
              from: 26,
              to: 50,
              name: "low",
              color: "#00ac46",
            },
            {
              from: 51,
              to: 75,
              name: "medium",
              color: "#fdc500",
            },
            {
              from: 76,
              to: 100,
              name: "high",
              color: "#f85c00",
            },
            {
              from: 101,
              to: 125,
              name: "very high",
              color: "#dc0000",
            },
            {
              from: 126,
              to: 200,
              name: "extremely high",
              color: "#780000",
            },
          ],
        },
      },
    },
    // colors: ["#008FFB"],
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
