import InputBox from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import {
  AccountButton,
  FormStyled,
  InputBoxStyled,
  AccountButtonStyled,
  Text,
} from "./AuthFormStyled";
import { useModal } from "../../hooks/useModal";
import { useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import { useSignup } from "./useSignup";
import Spinner from "../../components/Spinner";

function SignUpForm() {
  const { dispatch } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const { isLoading, signup } = useSignup();

  const onSubmit = (info) => {
    signup(info, { onSettled: () => reset() });
  };
  if (isLoading) return <Spinner />;

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Text $isBold={true}>สร้างบัญชีใหม่</Text>
      <InputBoxStyled>
        <FormRow error={errors?.firstName?.message}>
          <InputBox
            placeholder="ชื่อ"
            {...register("firstName", { required: "* กรุณากรอกชื่อจริง" })}
          />
        </FormRow>
        <FormRow error={errors?.lastName?.message}>
          <InputBox
            placeholder="นามสกุล"
            {...register("lastName", { required: "* กรุณากรอกนามสกุล" })}
          />
        </FormRow>
        <FormRow error={errors?.phone?.message}>
          <InputBox
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
          <InputBox
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
          <InputBox
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
          <InputBox
            placeholder="ยืนยันรหัสผ่าน"
            type="password"
            {...register("confirmPassword", {
              required: "* กรุณากรอกรหัสผ่านซ้ำ",
              validate: (value) =>
                value === getValues().password || "รหัสผ่านไม่ถูกต้อง",
            })}
          />
        </FormRow>
      </InputBoxStyled>
      <ActionButton text="สมัครสมาชิก" />
      <AccountButtonStyled>
        <span>เป็นสมาชิกอยู่แล้ว, </span>
        <AccountButton
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "login" });
          }}
        >
          เข้าสู่ระบบ
        </AccountButton>
      </AccountButtonStyled>
    </FormStyled>
  );
}

export default SignUpForm;
