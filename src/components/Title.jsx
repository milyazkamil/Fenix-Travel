const Title = ({ title, span }) => {
  return (
    <h2 className="title">
      {title} <span className="title-span">{span}</span>
    </h2>
  )
}
export default Title;