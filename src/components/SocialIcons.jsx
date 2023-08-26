import { socialLinks } from "../data";

const SocialIcons = () => {
  return (
    <>
      <ul className="social-links-list">
        {socialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li key={id} className="social-link">
              <a href={href} target="_blank" rel="noreferrer">
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default SocialIcons;