import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import IconButton from "../../components/IconButton";
import Paragraph from "../../components/Paragraph";
import { useAdminProduct } from "../../hooks/adminHooks/useAdminProducts";
import { useDeleteProduct } from "../../hooks/adminHooks/useDeleteProduct";
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
  const { deleteProduct } = useDeleteProduct();
  const { products } = useAdminProduct();
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
          {products?.products.map((product) => (
            <TableRow key={product.id}>
              <Paragraph $small={true}>{product.id}</Paragraph>
              <span style={{textAlign:'center'}}>
                <Paragraph $small={true}>{product.name}</Paragraph>
              </span>
              <Paragraph $small={true}>{product.stock}</Paragraph>
              <EditOperation>
                <IconButton
                  Icon={<span className="material-symbols-outlined">edit</span>}
                  color="var(--color-gray-700)"
                  onClick={() =>
                    dispatch({ type: "editProduct", payload: product })
                  }
                />
                <IconButton
                  Icon={
                    <span className="material-symbols-outlined">delete</span>
                  }
                  color="var(--color-gray-700)"
                  onClick={() => deleteProduct(product.id)}
                />
              </EditOperation>
            </TableRow>
          ))}
        </TableList>
      </ContentArea>
    </ContentContainer>
  );
}

export default AdminProducts;
