import React from "react";
import { List, Typography, Card, Image, Avatar } from "antd";

const { Meta } = Card;

// const gridStyle = {
//   width: 120,
//   textAlign: "center",
// };

const TopList = ({ title, data = [], duration = "", count = 12 }) => {
  console.log(data);
  return (
    <List
      header={duration + " " + title}
      itemLayout="horizontal"
      dataSource={data}
      size="small"
      bordered
      renderItem={(item) => (
        <List.Item>
          {item.trackName}
        </List.Item>
      )}
    />
  );
};

export default TopList;
