import React from "react";
import { Card, List, Typography, Row, Col } from "antd";
const App = ({ height, title, data }) => {
  const totalPlayedTime = (data) => {
    const total_ms = data.reduce((acc, curr) => {
      return acc + curr.msPlayed;
    }, 0);
    return Math.floor(total_ms / 1000 / 60 / 60);
  };

  const totalActiveDays = (data) => {
    const date_map = {};
    data.forEach((d) => {
      const date = d.endTime.split(" ")[0];
      date_map[date] = true;
    });
    return Object.keys(date_map).length;
  };

  const mostActiveMonth = (data) => {
    const numeric_month_map = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    const month_map = {};
    data.forEach((d) => {
      const month = d.endTime.split("-")[1];
      if (month_map[month] === undefined) {
        month_map[month] = 1;
      } else {
        month_map[month] += 1;
      }
    });
    const sorted_months = Object.keys(month_map).sort(
      (a, b) => month_map[b] - month_map[a]
    );
    return `${numeric_month_map[sorted_months[0]]} - ${
      month_map[sorted_months[0]]
    } plays`;
  };

  const totalSongsPlayed = (data) => {
    const x = "trackName";
    const y = "msPlayed";
    //    "artistName": "Dev Negi",
    // "trackName": "Prassthanam Title Track",
    // "msPlayed": 217142
    const transformed_data = {};
    data.forEach(function (d) {
      if (transformed_data[d[x]] === undefined) {
        transformed_data[d[x]] = parseInt(d[y]);
      } else {
        transformed_data[d[x]] += parseInt(d[y]);
      }
    });
    return Object.keys(transformed_data).length;
  };

  const totalRepeatSongs = (data) => {
    const x = "trackName";
    const transformData = {}

    data.forEach(function (d) {
      if (transformData[d[x]] === undefined) {
        transformData[d[x]] = 1;
      } else {
        transformData[d[x]] += 1;
      }
    });
    return Object.keys(transformData)
      .sort((a, b) => transformData[b] - transformData[a])[0]
  };

  return (
    <List
      size="small"
      header={<Typography.Text strong>{title}</Typography.Text>}
      //   extra={<a href="#">More</a>}
      // style={height? { height: height } : undefined}
    >
      <Row>
        <Col span={12}>
          <List.Item>
            <Typography.Text strong>🎵 Playback Time: </Typography.Text>
            <Typography.Text>{totalPlayedTime(data)} Hrs</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>📅 Active Days: </Typography.Text>
            <Typography.Text>{totalActiveDays(data)}</Typography.Text>
          </List.Item>
        </Col>
        <Col span={12}>
          <List.Item>
            <Typography.Text strong>🎵 Total Songs: </Typography.Text>
            <Typography.Text>{totalSongsPlayed(data)}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>📅 Active Month: </Typography.Text>
            <Typography.Text>{mostActiveMonth(data)}</Typography.Text>
          </List.Item>
        </Col>
      </Row>
      <List.Item>
        <Typography.Text strong>🔁 Most Repeat: </Typography.Text>
        <Typography.Text>{totalRepeatSongs(data)}</Typography.Text>
      </List.Item>
    </List>
  );
};
export default App;
