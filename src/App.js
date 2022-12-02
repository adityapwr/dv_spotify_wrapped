import "./App.css";
import { Layout, Row, Col, Breadcrumb, Menu, Radio } from "antd";
import { Typography } from "antd";
import Main from "./Layout/main";
import SpotifyPlayer from "react-spotify-web-playback";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <> */}
          {/* <Title level={5} style={{ color: "white" }}>
            Top Chart
          </Title> */}
          {/* <Radio.Group
            defaultValue="a"
            style={{ marginTop: 16, marginRight: 6, marginLeft: "35vw" }}
          >
            <Radio.Button value="a">Top Artist</Radio.Button>
            <Radio.Button value="b">Top Tracks</Radio.Button>
          </Radio.Group>
        </> */}
        {/* <> */}
          {/* <Title level={5} style={{ color: "white" }}>
            Time Duration
          </Title> */}
          {/* <Radio.Group
            defaultValue="a"
            style={{ marginTop: 16, marginRight: 6 }}
          >
            <Radio.Button value="a">Last Week</Radio.Button>
            <Radio.Button value="b">Last Year</Radio.Button>
            <Radio.Button value="c">All Time</Radio.Button>
          </Radio.Group> */}
        {/* </> */}
        {/* <>
          <span style={{ color: "white", marginRight: 6 }}>12 FOLLOWERS</span>
          <span style={{ color: "white", marginRight: 6 }}>Aditya Pawar</span>
        </> */}
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content" style={{ marginTop: 16 }}>
          <Main />
        </div>
      </Content>

      <SpotifyPlayer
        // ...
        token="BQDoLHj_cEU3B-0aoMQ7tq5C3RD6SderZSh7e_WkNrSyJT4gJw-Fw1VVbXI6C5KAg99hCSqW2CM5f3Ffs8MbJfqkMmN67U9QbayAEgRWXF7MudHcqJL0ddLJpELkiU5ZruJGbN5BLAOYV7oKey4PIqCu0jSc8MbpKC5fQdg-Alx9weBJaOM8YPl8ARW_uzDXiNDf5n6cTGkbgtlvMsDhAGcXT_PAsQ407G_j8SnQFeGr"
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Jio Institute AI&DS@2022 Created by Group 14 Data Visulalization
      </Footer>
    </Layout>
  );
}

export default App;
