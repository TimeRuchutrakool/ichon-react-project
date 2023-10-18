import styled from "styled-components";
import Heading from "../../components/Heading";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

const AddNewAdminFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function AddNewAdminForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const onSubmit = (obj) => {
    console.log(obj);

    reset();
  };
  return (
    <AddNewAdminFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h4">ADD NEW PRODUCT</Heading>
      <FormRow error={errors?.firstName?.message}>
        <Input
          placeholder="ชื่อ"
          {...register("firstName", { required: "* กรุณากรอกชื่อจริง" })}
        />
      </FormRow>
      <FormRow error={errors?.lastName?.message}>
        <Input
          placeholder="นามสกุล"
          {...register("lastName", { required: "* กรุณากรอกนามสกุล" })}
        />
      </FormRow>
      <FormRow error={errors?.phone?.message}>
        <Input
          placeholder="เบอร์โทรศัพท์"
          {...register("phone", {
            required: "* กรุณากรอกเบอร์โทรศัพท์",
            pattern: {
              value: /[0-9]{10}/,
              message: "* กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง",
            },
          })}
        />
      </FormRow>
      <FormRow error={errors?.email?.message}>
        <Input
          placeholder="อีเมล"
          type="email"
          {...register("email", {
            required: "* กรุณากรอกอีเมล",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "* กรุณากรอกอีเมลให้ถูกต้อง",
            },
          })}
        />
      </FormRow>
      <FormRow error={errors?.password?.message}>
        <Input
          placeholder="รหัสผ่าน"
          type="password"
          {...register("password", {
            required: "* กรุณากรอกรหัสผ่าน",
            minLength: {
              value: 6,
              message: "* กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร",
            },
          })}
        />
      </FormRow>
      <FormRow error={errors?.confirmPassword?.message}>
        <Input
          placeholder="ยืนยันรหัสผ่าน"
          type="password"
          {...register("confirmPassword", {
            required: "* กรุณากรอกรหัสผ่านซ้ำ",
            validate: (value) =>
              value === getValues().password || "รหัสผ่านไม่ถูกต้อง",
          })}
        />
      </FormRow>
    </AddNewAdminFormStyled>
  );
}

export default AddNewAdminForm;
