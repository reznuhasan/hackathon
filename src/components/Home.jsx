import Carousel from 'react-bootstrap/Carousel';
// import styles from "../styles/edu.module.css"
import styles from "../styles/home.module.css"
import HomeSession from './home/HomeSession';

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className={styles.homeCarousel}>
            <img className={styles.homeCarouselImg} src="/smart-village-2-min.jpg" alt="" />
          </div>
          <Carousel.Caption>
            <h3>Digital Smart Village Ecosystem!</h3>
            <p>Connecting the Unconnected: Digital Smart Villages</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.homeCarousel}>
            <img className={styles.homeCarouselImg} src="/smart-village-1-min.jpg" alt="" />
          </div>
          <Carousel.Caption>
            <h3>Connectivity to empower rural communities</h3>
            <p>Transforming Rural Life: The Digital Smart Village Ecosystem.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <HomeSession />
    </div>
  )
}

export default Home