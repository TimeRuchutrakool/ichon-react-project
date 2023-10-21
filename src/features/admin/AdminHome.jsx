import styled from "styled-components";
import Heading from "../../components/Heading";
import { useOrderCount } from "../../hooks/adminHooks/useOrderCount";
import { formatDateOnlyDay } from "../../utils/helper";
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
  defaults
} from "chart.js";
import { Line } from "react-chartjs-2";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Dashboard = styled.div`
  width: 60%;
  margin: 3rem;
`;

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
  const labels = orderCount?.date.map((date) => formatDateOnlyDay(date));
  defaults.font.family = "Prompt";
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "จำนวนยอดขาย 7 วันล่าสุด",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "จำนวนคำสั่งซื้อ",
        },
        ticks: {
          precision: 0,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "จำนวนยอดขาย",
        data: orderCount?.count,
        borderColor: "rgb(255, 123, 0)",
      },
    ],
  };
  return (
    <HomeStyled>
      <Heading $small={false} as="h1" className="header">
        Dashboard
      </Heading>
      <ContentArea>
        <Dashboard>
          <Line options={options} data={data} />
        </Dashboard>
      </ContentArea>
    </HomeStyled>
  );
}

export default AdminHome;
