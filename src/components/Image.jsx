const Image = ({ imgUrl }) => {
  return (
    <>
        <img
          className="gallery-image"
          src={imgUrl}
          alt="tour image"
        />
    </>
  )
}
export default Image;