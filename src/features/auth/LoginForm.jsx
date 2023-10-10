import Logo from "../../components/Logo";
import InputBox from "../../components/InputBox";
import ActionButton from "../../components/ActionButton";
import {
  AccountButton,
  FormStyled,
  InputBoxStyled,
  AccountButtonStyled,
  Text,
} from "./AuthFormStyled";
import { useModal } from "../../hooks/useModal";

function LoginForm() {
  const { dispatch } = useModal();
  return (
    <FormStyled>
      <Logo disabled={true} />
      <Text $isBold={false}>Welcome to ICHON Online Store</Text>
      <Text $isBold={true}>เข้าสู่ระบบ</Text>
      <InputBoxStyled>
        <InputBox placeholder="อีเมล" />
        <InputBox placeholder="รหัสผ่าน" />
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
