import styled from "styled-components";
import IconHeader from "../../components/IconHeader";
import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import { useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import { useEditProfile } from "./useEditProfile";
import { useUser } from "../auth/useUser";
import { useModal } from "../../hooks/useModal";

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
  const { user } = useUser();
  const { dispatch } = useModal();
  const address = user.data?.address?.split(" ");
  const [houseNum, alley, distinct, area, province, zipCode] = address
    ? address
    : [];
  const { editUser } = useEditProfile();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();

  const onSubmit = (obj) => {
    const address = `${obj.houseNum} ${obj.alley} ${obj.distinct} ${obj.area} ${obj.province} ${obj.zipCode}`;
    editUser({
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      phone: obj.phone,
      address,
    });
    reset();
    dispatch({ type: "close" });
  };

  return (
    <AddressFormStyled onSubmit={handleSubmit(onSubmit)}>
      <IconHeader
        Icon={<span className="material-symbols-outlined">location_on</span>}
        color="var(--color-red-500)"
        small={true}
        text="ที่อยู่ในการจัดส่ง"
      />
      <FormRow error={errors?.firstName?.message}>
        <Input
          placeholder="ชื่อ"
          $width="100%"
          defaultValue={watch("firstName", user.data?.firstName)}
          {...register("firstName", { required: "* กรุณากรอกชื่อจริง" })}
          onChange={()=>{}}
        />
      </FormRow>
      <FormRow error={errors?.lastName?.message}>
        <Input
          placeholder="นามสกุล"
          $width="100%"
          value={watch("lastName", user.data?.lastName)}
          {...register("lastName", { required: "* กรุณากรอกนามสกุล" })}
          onChange={()=>{}}
        />
      </FormRow>
      <CompositeInput $columns="1fr 1fr 1fr">
        <FormRow error={errors?.houseNum?.message}>
          <Input
            placeholder="บ้านเลขที่"
            $width="10rem"
            value={watch("houseNum", houseNum)}
            {...register("houseNum", { required: "* กรุณากรอกบ้านเลขที่" })}
            onChange={()=>{}}
          />
        </FormRow>
        <FormRow error={errors?.alley?.message}>
          <Input
            placeholder="ซอย"
            $width="10rem"
            value={watch("alley", alley)}
            {...register("alley", { required: "* กรุณากรอกซอย" })}
            onChange={()=>{}}
          />
        </FormRow>
        <FormRow error={errors?.distinct?.message}>
          <Input
            placeholder="แขวง"
            $width="10rem"
            value={watch("distinct", distinct)}
            {...register("distinct", { required: "* กรุณากรอกแขวง" })}
            onChange={()=>{}}
          />
        </FormRow>
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <FormRow error={errors?.area?.message}>
          <Input
            placeholder="เขต"
            $width="fit-content"
            value={watch("area", area)}
            {...register("area", { required: "* กรุณากรอกเขต" })}
            onChange={()=>{}}
          />
        </FormRow>
        <FormRow error={errors?.province?.message}>
          <Input
            placeholder="จังหวัด"
            $width="fit-content"
            value={watch("province", province)}
            {...register("province", { required: "* กรุณากรอกจังหวัด" })}
            onChange={()=>{}}
          />
        </FormRow>
      </CompositeInput>
      <CompositeInput $columns="1fr 1fr">
        <FormRow error={errors?.zipCode?.message}>
          <Input
            placeholder="รหัสไปรษณีย์"
            $width="fit-content"
            value={watch("zipCode", zipCode)}
            {...register("zipCode", {
              required: "* กรุณากรอกรหัสไปรษณีย์",
              pattern: {
                value: /[0-9]{5}/,
                message: "* กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง",
              },
            })}
            onChange={()=>{}}
          />
        </FormRow>
        <FormRow error={errors?.phone?.message}>
          <Input
            placeholder="เบอร์โทรศัพท์"
            $width="fit-content"
            value={watch("phone", user.data?.phone)}
            {...register("phone", {
              required: "* กรุณากรอกเบอร์โทรศัพท์",
              pattern: {
                value: /[0-9]{10}/,
                message: "* กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง",
              },
            })}
            onChange={()=>{}}
          />
        </FormRow>
      </CompositeInput>
      <ButtonLayout>
        <ActionButton text="ยืนยันแก้ไข" $width="10rem" small={true} />
      </ButtonLayout>
    </AddressFormStyled>
  );
}

export default AddressForm;
