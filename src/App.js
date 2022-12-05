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
    "https://open.spotify.com/track/476CV6n8OfNmlw82HXcgfA"
  );
  // console.log(data)
  return (
    <div className="app">
      <Row>
        <Col span={8}>
          <About title="Spotify Rewind 2022! Your top songs, trends and more 🎧🎵🤘" />
        </Col>
        <Col span={8} style={style}>
          <TotalPlayed
            height={100}
            title="📊 Here are some stats for 2022!!!"
            data={data}
            setData={setData}
          />
        </Col>
        <Col span={8} style={style}>
          <Spotify
            wide
            view="coverart"
            link={url}
            style={{ height: 180, margin: 2, marginTop: 5 }}
          />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <SongTrend
            title="📈 Do you know you most trending songs?"
            data={data}
            setData={setData}
            setUrl={setUrl}
          />
        </Col>
        <Col span={12} style={style}>
          <Row>
            <Col span={24}>
              <ActiveDays
                title="📅 Checkout your streak!"
                data={data}
                setData={setData}
              />
            </Col>
            <Col span={24}>
              <MostPlayed
                title="🕰️ What time of day you're most active?"
                data={data}
                setData={setData}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;

// // Needed Updates:
// No of songs played
// Song Repeat count
// Most repeated song
// Show labels for polar chart and heat map
// Monthly time spend like on insta
