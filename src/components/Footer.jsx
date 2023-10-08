import styled from "styled-components";
import Logo from "./Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HorizontalLine from "./HorizontalLine";

const FooterStyled = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  min-height: 12vh;
  background-color: var(--color-gray-200);
`;

const FooterContentStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const SocialMediaBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  font-size: var(--font-size-xsm);
`;

const SocialMediaStackStyled = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-gray-700);
`;

function Footer() {
  return (
    <FooterStyled>
      <HorizontalLine />
      <FooterContentStyled>
        <Logo />
        <SocialMediaBoxStyled>
          <span>Stay Connected</span>
          <SocialMediaStackStyled>
            <FacebookIcon fontSize="large" color="inherit" />
            <InstagramIcon fontSize="large" color="inherit" />
          </SocialMediaStackStyled>
        </SocialMediaBoxStyled>
      </FooterContentStyled>
    </FooterStyled>
  );
}

export default Footer;
