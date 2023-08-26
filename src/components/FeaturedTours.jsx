import Title from "./Title";
import { tours } from '../data'
import Card from './Card'

const FeaturedTours = () => {
  return (
    <>
      <section id="featured-tours-container">
        <div id="featured">
          <Title title="FEATURED" span="TOURS" />
          <div className="cards">
            {
              tours.map((tour) => (
                <Card key={tour.id} {...tour} />
              ))
            }
          </div>
          <button type="button" className="all-tours">
            ALL TOURS
          </button>
        </div>
      </section>
    </>
  )
}
export default FeaturedTours;