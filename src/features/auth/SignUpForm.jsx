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

function SignUpForm() {
  const { dispatch } = useModal();
  return (
    <FormStyled>
      <Text $isBold={true}>สร้างบัญชีใหม่</Text>
      <InputBoxStyled>
        <InputBox placeholder="ชื่อ" />
        <InputBox placeholder="นามสกุล" />
        <InputBox placeholder="เบอร์โทรศัพท์" />
        <InputBox placeholder="อีเมล" />
        <InputBox placeholder="รหัสผ่าน" />
        <InputBox placeholder="ยืนยันรหัสผ่าน" />
      </InputBoxStyled>
      <ActionButton text="สมัครสมาชิก" />
      <AccountButtonStyled>
        <span>เป็นสมาชิกอยู่แล้ว, </span>
        <AccountButton
          onClick={(e) => {
            e.preventDefault();
            dispatch({type:"login"});
          }}
        >
          เข้าสู่ระบบ
        </AccountButton>
      </AccountButtonStyled>
    </FormStyled>
  );
}

export default SignUpForm;
