import styled from "styled-components";
import IconHeader from "../../components/IconHeader";
import InputBox from "../../components/InputBox";
import ActionButton from "../../components/ActionButton";

const AddressFormStyled = styled.form`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CompositeInput = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: ${(props) => props.$columns};
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: end;
`;

function AddressForm() {
  return (
    <AddressFormStyled>
      <IconHeader
        Icon={<span className="material-symbols-outlined">location_on</span>}
        color="var(--color-red-500)"
        small={true}
        text="ที่อยู่ในการจัดส่ง"
      />
      <InputBox placeholder="ชื่อ" width="100%" />
      <InputBox placeholder="นามสกุล" width="100%" />
      <CompositeInput $columns="1fr 1fr 1fr">
        <InputBox placeholder="บ้านเลขที่" width="10rem" />
        <InputBox placeholder="ซอย" width="10rem" />
        <InputBox placeholder="แขวง" width="10rem" />
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <InputBox placeholder="เขต" width="fit-content" />
        <InputBox placeholder="จังหวัด" width="fit-content" />
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <InputBox placeholder="รหัสไปรษณีย์" width="fit-content" />
        <InputBox placeholder="เบอร์โทรศัพท์" width="fit-content" />
      </CompositeInput>
      <ButtonLayout>
        <ActionButton text="ยืนยันแก้ไข" width="10rem" small={true} />
      </ButtonLayout>
    </AddressFormStyled>
  );
}

export default AddressForm;
