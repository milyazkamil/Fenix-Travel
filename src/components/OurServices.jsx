import Service from "./Service";
import Title from "./Title";
import { services } from '../data'

const OurServices = () => {
  return (
    <>
      <div id="services">
        <div className="services-container">
          <Title title="OUR" span="SERVICES" />
          <section className="our-section">
            {services.map((service) => {
              return <Service key={service.id} {...service} /> 
            })}
          </section>
        </div>
      </div>
    </>
  )
}
export default OurServices;