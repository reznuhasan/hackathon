import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/edu.module.css"
import ourImg1 from "../../assets/ourImg1.jpg"
import ourImg2 from "../../assets/ourImg2.jpg"
import ourImg3 from "../../assets/ourImg4.jpg"

export default function EduCarousel() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <div className={styles.eduCarousel}>
                        <img className={styles.carouselImg} src={ourImg1} alt="" />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.eduCarousel}>
                        <img className={styles.carouselImg} src={ourImg2} alt="" />
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.eduCarousel}>
                        <img className={styles.carouselImg} src={ourImg3} alt="" />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}