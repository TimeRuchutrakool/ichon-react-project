import Heading from "../../components/Heading";
import { useOrderCount } from "../../hooks/adminHooks/useOrderCount";
import { formatDate } from "../../utils/helper";
import { ContentArea } from "./AdminStyled";

function AdminHome() {
  const { orderCount } = useOrderCount();
  const labels = orderCount.date.map((date) => formatDate(date));
  const data = {
    labels,
    datasets: [
      {
        label: "จำนวนยอดขาย",
        data: orderCount.count,
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
      <ContentArea></ContentArea>
    </>
  );
}

export default AdminHome;
