import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import IconButton from "../../components/IconButton";
import Paragraph from "../../components/Paragraph";
import { useModal } from "../../hooks/useModal";
import {
  ContentArea,
  ContentContainer,
  EditOperation,
  TableList,
  TableRow,
} from "./AdminStyled";

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
      <ContentArea>
        <TableList>
          <TableRow>
            <Heading as="h4" $small={true}>
              PRODUCT ID
            </Heading>
            <Heading as="h4" $small={true}>
              PRODUCT NAME
            </Heading>
            <Heading as="h4" $small={true}>
              REMAINING
            </Heading>
            <div></div>
          </TableRow>
          <TableRow>
            <Paragraph $small={true}>1</Paragraph>
            <Paragraph $small={true}>iPhone 8Plus</Paragraph>
            <Paragraph $small={true}>2</Paragraph>
            <EditOperation>
              <IconButton
                Icon={<span className="material-symbols-outlined">edit</span>}
                color="var(--color-gray-700)"
                onClick={() => dispatch({ type: "editProduct" })}
              />
              <IconButton
                Icon={<span className="material-symbols-outlined">delete</span>}
                color="var(--color-gray-700)"
              />
            </EditOperation>
          </TableRow>
        </TableList>
      </ContentArea>
    </ContentContainer>
  );
}

export default AdminProducts;
