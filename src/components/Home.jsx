import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <div>
      <section className={styles.mainSection}>
        <div>
          <h1> Digital Smart Village </h1>
          <p> Roadway of Establishing a Comprehensive Digital Smart Village Ecosystem </p>
        </div>
        <div>
          <img className={styles.imgSection} src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Home