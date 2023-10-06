import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterStyled = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-gray-200);
`;

const HorizontalLine = styled.hr`
  display: block;
  height: 0.1rem;
  border: 0;
  border-top: 0.1rem solid var(--color-gray-500);
  margin: 2rem 0;
  width: 70%;
`;
const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
`;

const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  font-size: var(--font-size-xsm);
`;

const SocialMediaStack = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-gray-700);
`;

const BlackSpace = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-black-900);
`

function Footer() {
  return (
    <FooterStyled>
      <HorizontalLine />
      <FooterContent>
        <Logo />
        <SocialMediaBox>
          <span>Stay Connected</span>
          <SocialMediaStack>
            <FacebookIcon fontSize="large" color="inherit"/>
            <InstagramIcon fontSize="large" color="inherit"/>
          </SocialMediaStack>
        </SocialMediaBox>
      </FooterContent>
      <BlackSpace/>
    </FooterStyled>
  );
}

export default Footer;
