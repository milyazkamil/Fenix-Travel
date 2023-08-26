import { images } from "../data";
import Image from "./Image";

const Gallery = () => {
  const addColor = (e) => {
    e.target.style.backgroundColor = '#2caeba7c';
    e.target.style.opacity = '1';
  };

  const zeroOpacity = (e) => {
    e.target.style.opacity = '0';
  };
  return (
    <>
      <div id="gallery">
        <div className="gallery-section">
          {
            images.map((image) => (
              <div
                key={image.id}
                onMouseEnter={addColor}
                onMouseLeave={zeroOpacity}
                className="image-div"
              >
                <i className="fa-solid fa-magnifying-glass image-icon"></i>
                <Image imgUrl={image.imgUrl} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Gallery;