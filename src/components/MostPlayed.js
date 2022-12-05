import Card from "antd/es/card/Card";
import PolarAreaChart from "../charts/MonochromePolarYear";

const utc_to_ist = (utc_hour_time) => {
    const utc_hour = parseInt(utc_hour_time.split(":")[0]);
    const utc_min = parseInt(utc_hour_time.split(":")[1]);
    const utc_time = utc_hour * 60 + utc_min;
    const ist_time = utc_time + 330;
    const ist_hour = Math.floor(ist_time / 60);
    return `${ist_hour}`;

};

const TransformData = (data) => {
  //     //   {
  //     "endTime": "2022-09-17 10:18",
  //     "artistName": "A.R. Rahman",
  //     "trackName": "Param Sundari",
  //     "msPlayed": 200219
  //   },
  // Return the time bin trend over the last 12 months
  const x = "endTime";
  const time_trend = {
    morning: 0,
    afternoon: 0,
    evening: 0,
    night: 0,
    late_night: 0,
  };
  data.forEach(function (d) {
    const hour = parseInt(utc_to_ist(d[x].split(" ")[1]));
    if (hour >= 5 && hour < 12) {
      time_trend["morning"] += 1;
    } else if (hour >= 12 && hour < 17) {
      time_trend["afternoon"] += 1;
    } else if (hour >= 17 && hour < 20) {
      time_trend["evening"] += 1;
    } else if (hour >= 20 && hour < 24) {
      time_trend["night"] += 1;
    } else if (hour >= 0 && hour < 5) {
      time_trend["late_night"] += 1;
    }
  });
  return {
    labels: Object.keys(time_trend),
    data: Object.values(time_trend),
  };
};
const MostPlayed = ({ title, data }) => {
  return (
    <Card
      title={title}
      size="small"
      style={{ background: "#f0f2f5", padding: 0 }}
    >
      <PolarAreaChart data={TransformData(data)} />
    </Card>
  );
};

export default MostPlayed;
