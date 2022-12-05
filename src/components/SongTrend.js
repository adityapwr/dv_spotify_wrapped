import { Card } from "antd";
import { useState, useEffect } from "react";
import ColumnChart from "../charts/ColumnChart";
import UnknownTrend from "../charts/UnkownTrend";

const toMins = (ms) => {
  return Math.floor(ms / 1000 / 60);
};

const transformData = (data) => {
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
  const transformed_data_array = Object.keys(transformed_data)
    .map(function (key) {
      return { x: key, y: toMins(transformed_data[key]) };
    })
    .sort((a, b) => b.y - a.y)
    .slice(0, 10);
  return [
    {
      //   name: transformed_data_array.map((d) => d.x),
      data: transformed_data_array,
    },
  ];
};

const SongTrend = ({ title, data = [], setUrl = (f) => f }) => {
  const [filter, setFilter] = useState();

  useEffect(() => {
    if (filter) {
      const transform = transformData(data);
      const key = transform[0].data[filter].x;
      // find uri for key from data
      const uri = data.find((d) => d.trackName === key).trackUrl;
      console.log(uri);
      setUrl(uri);
    }
  }, [filter]);

  // clear filter in data change and set url to first song
  // useEffect(() => {
  //   setFilter();
  //   setUrl(data[0].trackUrl);
  // }, [data]);

  return (
    <Card title={title} size="small" style={{background: "#f0f2f5", padding: 0}}>
      {/* <ColumnChart data={transformData(data)} /> */}
      <UnknownTrend data={transformData(data)} setFilter={setFilter} />
    </Card>
  );
};

export default SongTrend;
