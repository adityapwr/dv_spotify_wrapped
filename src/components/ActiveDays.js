import { useState, useEffect } from "react";
import { Card } from "antd";

import HeatMap from "../charts/HeatMap";
import SpotifyData from "../data/spotify_data.json";
// import RonakData from "../data/ronak.json";


// This component is used to show the heatmap of the days the user was active
const ActiveDays = ({ height, title, data, setData }) => {
  const [filter, setFilter] = useState({});

  // Update data on filter change, filter by specific date
  useEffect(() => {
    if (filter.date === undefined) {
      setData(SpotifyData);
      console.log(filter);
    } else {
      console.log(filter);
      const filteredData = data.filter((d) => {
        const date = new Date(d.endTime);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        if (filter.date === day && filter.month === month) {
          console.log(filter.date, filter.month, day, month);
          return true;
        }
        return false;
      });
      setData(filteredData);
    }
  }, [filter]);

  // Transform the data into a format that the heatmap can use
  const song_count_by_date_month = (data) => {
    //  {
    //     "endTime": "2022-09-17 10:18",
    //     "artistName": "A.R. Rahman",
    //     "trackName": "Param Sundari",
    //     "msPlayed": 200219
    //   },
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
    let song_count = {};
    data.forEach((song) => {
      const month = song.endTime.split("-")[1];
      const date = song.endTime.split(" ")[0];
      if (song_count[month] === undefined) {
        song_count[month] = {};
      }
      if (song_count[month][date] === undefined) {
        song_count[month][date] = 1;
      } else {
        song_count[month][date] += 1;
      }
    });
    // Transform the data into a format that the heatmap can use
    const transformed_data = Object.keys(song_count)
      .sort((a, b) => b - a)
      .map((month) => {
        return {
          name: numeric_month_map[month],
          data: Object.keys(song_count[month]).map(
            (date) => song_count[month][date]
          ),
        };
      });
    return transformed_data;
  };

  return (
    <Card
      size="small"
      title={title}
      //   extra={<a href="#">More</a>}
      // style={height? { height: height } : undefined}
      style={{ background: "#f0f2f5", padding: 0 }}
    >
      <HeatMap
        data={song_count_by_date_month(data)}
        setFilter={setFilter}
        filter={filter}
      />
    </Card>
  );
};
export default ActiveDays;
