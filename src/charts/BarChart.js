import React from "react";
import ReactApexChart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "coins",
          data: [
            2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12,
            12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 410,
          animations: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "100%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          colors: ["#fff"],
          width: 0.2,
        },
        labels: Array.apply(null, { length: 39 }).map(function (el, index) {
          return index + 1;
        }),
        yaxis: {
          reversed: true,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
          title: {
            text: "Weight",
          },
        },
        grid: {
          position: "back",
        },
        title: {
          text: "Paths filled by clipped image",
          align: "right",
          offsetY: 30,
        },
        fill: {
          type: "image",
          opacity: 0.87,
          image: {
            src: ["./charts/love.jpg"],
            width: 466,
            height: 406,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={410}
        />
      </div>
    );
  }
}

export default BarChart;

