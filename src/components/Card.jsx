const Card = ({ imgUrl, title, date, description, country, days, price }) => {
  return (
    <div className="card">
      <div>
        <div className="card-image-container">
          <img className="card-image" src={imgUrl} alt={title} />
          <span>
            {date}
          </span>
        </div>
        <div className="card-info-container">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <div className="footer-info">
            <div>
              <i className="fa-solid fa-map"></i>
              <span>{country}</span>
            </div>
            <span>{days} days</span>
            <span>From ${price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;