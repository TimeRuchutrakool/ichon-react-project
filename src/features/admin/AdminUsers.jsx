import styled from "styled-components";
import Heading from "../../components/Heading";
import AddNewAdminForm from "./AddNewAdminForm";
import { ContentArea, ContentContainer } from "./AdminStyled";

const AddNewAdminFormContainer = styled.div`
  margin: 5rem;
`;

function AdminUsers() {
  return (
    <ContentContainer>
      <Heading $small={false} as="h1" className="header">
        Users
      </Heading>
      <ContentArea>
        <AddNewAdminFormContainer>
          <AddNewAdminForm />
        </AddNewAdminFormContainer>
      </ContentArea>
    </ContentContainer>
  );
}

export default AdminUsers;
