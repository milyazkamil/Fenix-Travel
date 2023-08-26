const Service = ({ id, icon, title, text }) => {
  return (
    <>
      <article className="our-services" key={id}>
        <i className={icon}></i>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </article>
    </>
  )
}
export default Service;