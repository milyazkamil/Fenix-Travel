import about from "../assets/images/about.jpeg";
import Title from "./Title";

const AboutUs = () => {
  return (
    <>
        <section id="about">
          <Title title="ABOUT" span="US" />
          <div className="about-container">
            <div className="image-container">
              <div className="border-line"></div>
              <img src={about} alt="beach image"/>
            </div>
            <div className="about-info">
              <h3>
                Explore The Difference
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <button type="button" className="read-more">
                READ MORE
              </button>
            </div>
          </div>
        </section>
    </>
  )
}
export default AboutUs;