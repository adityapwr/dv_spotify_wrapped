import BarChart from "../charts/BarChart";
import BarChartNeg from "../charts/BarNeg";
import AreaChart from "../charts/AreaChart";
import ReverseBarChart from "../charts/ReverseBar";
import { Card } from "antd";
const Weeklytrend = ({ data, title }) => {
  return (
    // <BarChartNeg/>
    // <BarChart/>
    // <AreaChart/>
    <Card title={title} size="small">
      <ReverseBarChart />
    </Card>
  );
};

export default Weeklytrend;
