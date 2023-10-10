import styled from "styled-components";
import ActionButton from "../../components/ActionButton";
import IconHeader from "../../components/IconHeader";
import Paragraph from "../../components/Paragraph";
import { useModal } from "../../hooks/useModal";

const AddressControlsStyled = styled.div`
  width: 100%;
  font-size: var(--font-size-xsm);
  background-color: var(--color-white-0);
  padding: 2rem;
`;

const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem;
`;

const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const NameAndPhone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AddressControls() {
  const { dispatch } = useModal();
  return (
    <AddressControlsStyled>
      <AddressHeader>
        <IconHeader
          Icon={<span className="material-symbols-outlined">location_on</span>}
          color="var(--color-red-500)"
          small={true}
          text="ที่อยู่ในการจัดส่ง"
        />
        <ActionButton
          text="แก้ไขที่อยู่"
          width="10rem"
          small={true}
          onClick={() => dispatch({ type: "address" })}
        />
      </AddressHeader>
      <InformationContainer>
        <NameAndPhone>
          <Paragraph $subheader={false} $small={true}>
            ธาม ฤชุตระกูล
          </Paragraph>
          <Paragraph $subheader={false} $small={true}>
            0993929394
          </Paragraph>
        </NameAndPhone>
        <Paragraph $subheader={false} $small={true}>
          1064 ถนนเจริญกรุง แขวงสี่พระยา, เขตบางรัก, จังหวัดกรุงเทพมหานคร, 10500
        </Paragraph>
      </InformationContainer>
    </AddressControlsStyled>
  );
}

export default AddressControls;
