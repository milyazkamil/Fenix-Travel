const Subscribe = () => {
  return (
    <section className="subscribe-container">
      <div className="subscribe-section">
        <div className="subscribe-div">
          <h4 className="sub-title">
            Want Latest Tour Info And Updates?
          </h4>
          <p className="sub-text">
            Sign up for newsletter and stay up to date
          </p>
        </div>
        <form className="form-div">
          <input type="text" placeholder="Your Email"/>
          <button className="submit" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
export default Subscribe;