import { Card } from "antd";

const About = ({ title }) => {
  return (
    <Card style={{ background: "#f0f2f5", padding: 0, margin: 4}}>
      <h1>{title}</h1>
    </Card>
  );
};

export default About;
