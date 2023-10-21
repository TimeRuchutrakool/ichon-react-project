import Heading from "../../components/Heading";
import { useOrderCount } from "../../hooks/adminHooks/useOrderCount";
import { formatDate } from "../../utils/helper";
import { ContentArea } from "./AdminStyled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AdminHome() {
  const { orderCount } = useOrderCount();
  const labels = orderCount?.date.map((date) => formatDate(date));
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "จำนวนยอดขาย",
        data: orderCount?.count,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <Heading $small={false} as="h1" className="header">
        Dashboard
      </Heading>
      <ContentArea>
        <Line options={options} data={data} />
      </ContentArea>
    </>
  );
}

export default AdminHome;
