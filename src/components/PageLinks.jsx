import { pageLinks } from "../data";

const PageLinks = () => {
  return (
    <>
      <ul className="page-links-list">
        {pageLinks.map((page) => {
          const { id, title, href } = page;
          return (
            <li key={id}>
              <a href={href}>{title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default PageLinks;