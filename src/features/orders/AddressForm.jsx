import styled from "styled-components";
import IconHeader from "../../components/IconHeader";
import Input from "../../components/Input";
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
      <Input placeholder="ชื่อ" $width="100%" />
      <Input placeholder="นามสกุล" $width="100%" />
      <CompositeInput $columns="1fr 1fr 1fr">
        <Input placeholder="บ้านเลขที่" $width="10rem" />
        <Input placeholder="ซอย" $width="10rem" />
        <Input placeholder="แขวง" $width="10rem" />
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <Input placeholder="เขต" $width="fit-content" />
        <Input placeholder="จังหวัด" $width="fit-content" />
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <Input placeholder="รหัสไปรษณีย์" $width="fit-content" />
        <Input placeholder="เบอร์โทรศัพท์" $width="fit-content" />
      </CompositeInput>
      <ButtonLayout>
        <ActionButton text="ยืนยันแก้ไข" $width="10rem" small={true} />
      </ButtonLayout>
    </AddressFormStyled>
  );
}

export default AddressForm;
