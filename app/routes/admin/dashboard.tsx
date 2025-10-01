import Header from "../../../components/Header";
import { user } from "~/constants";

const Dashboard = () => {
  return (
    <div>
      <Header
        title={`Hello ${user?.name}`}
        description="Track activity, trends and popular destinations in real time"
      />
    </div>
  );
};

export default Dashboard;
