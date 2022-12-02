import { Space, Divider, Button, Row, Col } from "antd";
import YearReleaseChart from "../charts/YearReleaseChart";
import MoodChart from "../charts/MoodChart";
import UnkownChart from "../charts/UnkownTrend";
import TopArtist from "../charts/TopArtist";
import TopSong from "../charts/TopSongs";
import SongTrend from "../charts/SongTrend";

import topTrackAllTime from "../data/long_term_tracks.json";
import yashHistory from "../data/yash_history.json";

const transformData = (data) => {
  const x = "trackName";
  const y = "msPlayed";
  //    "artistName": "Dev Negi",
  // "trackName": "Prassthanam Title Track",
  // "msPlayed": 217142
  const transformed_data = {};
  data.forEach(function (d) {
    if (transformed_data[d[x]] == undefined) {
      transformed_data[d[x]] = parseInt(d[y]);
    } else {
      transformed_data[d[x]] += parseInt(d[y]);
    }
  });
  
  return Object.keys(transformed_data).map(function (key) {
    return { trackName: key, msPlayed: transformed_data[key] };
  });
};

function Main() {
  return (
    <Space direction="vertical" style={{ padding: 6 }}>
      <Row>
        <Col span={10}>
          <div>
            <TopSong
              title="Top Tracks"
              duration="All Time"
              count={12}
              data={transformData(yashHistory)
                .sort((a, b) => b.msPlayed - a.msPlayed)
                .slice(0, 12)}
            />
          </div>
        </Col>
        <Col span={6}>
          <div>
            <MoodChart />
          </div>
        </Col>
        <Col span={8}>
          <div>
            <SongTrend />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          {/* <div>
            <TopSong title="Recommendation Trend" count={2} />
          </div> */}
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </Space>
  );
}

export default Main;
