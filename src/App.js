import "./App.css";
import { useState } from "react";
import { Row, Col } from "antd";
import TotalPlayed from "./components/TotalPlayed";
import MostPlayed from "./components/MostPlayed";
import Weeklytrend from "./components/WeeklyTrend";
import SongTrend from "./components/SongTrend";
import About from "./components/About";
import ActiveDays from "./components/ActiveDays";
import Spotify from "react-spotify-embed";

import SpotifyData from "./data/spotify_data.json";

const style = {
  // background: "grey",
  padding: 5,
};
const App = () => {
  const [data, setData] = useState(SpotifyData);
  const [url, setUrl] = useState(
    "https://open.spotify.com/track/0ecW7IqLKhzKTPeqLSNc0V?si=3dcbb24a79ac446e"
  );
  // console.log(data)
  return (
    <Row>
      <Col span={18}>
        <Row style={style}>
          <Col span={12}>
            <About title="Spotify Rewind 2022 is here! See your top songs, artists, and more" />
          </Col>
          <Col span={12} style={style}>
            <TotalPlayed
              height={100}
              title="Do you know how many hours you spend groving?"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
        {/* <Row style={{ height: "30vh" }}></Row> */}

        <Row style={{ height: "40vh" }}>
          <Col span={24} style={style}>
            <SongTrend
              title="Do you know you most trending songs?"
              data={data}
              setData={setData}
              setUrl={setUrl}
            />
          </Col>
        </Row>
      </Col>
      <Col span={6} style={{ ...style, height: "100vh" }}>
        <Row>
          <Col span={24} style={style}>
            {/* <TotalPlayed
              height={100}
              title="Do you know how many hours you spend groving?"
              data={data}
              setData={setData}
            /> */}

            {/* <Spotify uri="spotify:playlist:37i9dQZF1DXcBWIGoYBM5M" /> */}
            <Spotify wide view="coverart" link={url} />
          </Col>
          <Col span={24}>
            <ActiveDays
              title="Do you know how many days you have been active?"
              data={data}
              setData={setData}
            />
          </Col>
          <Col span={24} style={style}>
            <MostPlayed
              title="When do you miss me most?"
              data={data}
              setData={setData}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default App;

// // Needed Updates:
// No of songs played
// Song Repeat count
// Most repeated song
// Show labels for polar chart and heat map
// Monthly time spend like on insta
