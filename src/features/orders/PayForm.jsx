import { styled } from "styled-components";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import FileInput from "../../components/FileInput";
import FormRow from "../../components/FormRow";
import { useForm } from "react-hook-form";
import ActionButton from "../../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

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

function PayForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const {dispatch} = useModal()
  return (
    <PayFormStyled onSubmit={handleSubmit()}>
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
      <ActionButton
        text="ยืนยันการสั่งซื้อ"
        onClick={() => {
          dispatch({ type: "close" });
          navigate("/user");
        }}
      />
    </PayFormStyled>
  );
}

export default PayForm;
