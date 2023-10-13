import Logo from "../../components/Logo";
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
import { useLogin } from "./useLogin";

function LoginForm() {
  const { dispatch } = useModal();
  const { login } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const onSubmit = ({ email, password }) => {
    login({ email, password }, { onSettled: () => reset() });
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Logo disabled={true} />
      <Text $isBold={false}>Welcome to ICHON Online Store</Text>
      <Text $isBold={true}>เข้าสู่ระบบ</Text>
      <InputBoxStyled>
        <FormRow error={errors?.email?.message}>
          <InputBox
            placeholder="อีเมล"
            type="email"
            {...register("email", { required: "* กรุณากรอกอีเมล" })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <InputBox
            placeholder="รหัสผ่าน"
            type="password"
            {...register("password", { required: "* กรุณากรอกรหัสผ่าน" })}
          />
        </FormRow>
      </InputBoxStyled>
      <ActionButton text="เข้าสู่ระบบ" />
      <AccountButtonStyled>
        <span>ยังไม่มีบัญชีผู้ใช้ ? </span>
        <AccountButton
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "signup" });
          }}
        >
          สมัครสมาชิกใหม่
        </AccountButton>
      </AccountButtonStyled>
    </FormStyled>
  );
}

export default LoginForm;
