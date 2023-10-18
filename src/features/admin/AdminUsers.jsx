import Heading from "../../components/Heading";
import { ContentArea, ContentContainer } from "./AdminStyled";

function AdminUsers() {
  return (
    <ContentContainer>
      <Heading $small={false} as="h1" className="header">
        Users
      </Heading>
      <ContentArea></ContentArea>
    </ContentContainer>
  );
}

export default AdminUsers;
