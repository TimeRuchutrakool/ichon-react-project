import { styled } from "styled-components";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import FileInput from "../../components/FileInput";
import FormRow from "../../components/FormRow";
import { useForm } from "react-hook-form";
import ActionButton from "../../components/ActionButton";
import { useCreateOrder } from "./useCreateOrder";
import Spinner from "../../components/Spinner";

const PayFormStyled = styled.form`
  width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const AccountStack = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;
const Image = styled.img`
  width: 5rem;
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const SpinnerLayout = styled.div`
  width: 35rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PayForm() {
  const { register, handleSubmit } = useForm();
  const { createOrder, isLoading } = useCreateOrder();
  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("slipImage", image);
    createOrder(formData);
  };

  if (isLoading)
    return (
      <SpinnerLayout>
        <Spinner />
      </SpinnerLayout>
    );

  return (
    <PayFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Heading $small={true} as="h1">
        อัพโหลด e-slip
      </Heading>
      <AccountStack>
        <Image src="/src/assets/icons/Bank_of_Ayudhya_Logo.svg.png" />
        <AccountInfo>
          <Paragraph $small={true} $subheader={false}>
            เลขบัญชี: 0394857289
          </Paragraph>
          <Paragraph $small={true} $subheader={false}>
            นาย ธาม ฤุชตระกูล{" "}
          </Paragraph>
        </AccountInfo>
      </AccountStack>

      <FormRow>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          {...register("image")}
        />
      </FormRow>
      <ActionButton text="ยืนยันการสั่งซื้อ" />
    </PayFormStyled>
  );
}

export default PayForm;
