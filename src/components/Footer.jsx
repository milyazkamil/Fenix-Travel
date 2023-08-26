import PageLinks from "./PageLinks";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <PageLinks />
        <SocialIcons />
      </nav>
      <p>
        Copyright © Fenix Travel Tours Company 2023. All Rights Reserved
      </p>
    </footer>
  )
}
export default Footer;