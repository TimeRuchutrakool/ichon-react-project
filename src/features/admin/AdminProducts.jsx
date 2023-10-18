import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import { useModal } from "../../hooks/useModal";
import { ContentArea, ContentContainer } from "./AdminStyled";

function AdminProducts() {
  const { dispatch } = useModal();
  return (
    <ContentContainer>
      <Heading $small={false} as="h1" className="header">
        Products
      </Heading>
      <ActionButton
        width="fit-content"
        text="Add new product"
        small={true}
        onClick={() => dispatch({ type: "addProduct" })}
      />
      <ContentArea></ContentArea>
    </ContentContainer>
  );
}

export default AdminProducts;
