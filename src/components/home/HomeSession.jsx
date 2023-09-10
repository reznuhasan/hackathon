import { useState } from "react"
import "./HomeSession.css"
import { Link } from "react-router-dom"

export default function HomeSession() {
    const [info, setInfo] = useState({
        title: "Digital Agriculture and Food Security",
        des: "Digital agriculture refers to the use of digital technologies, data, and information to enhance various aspects of agricultural practices and food production. The primary goal of digital agriculture is to improve agricultural efficiency, productivity, sustainability, and food security.",
        des2: "It encompasses the application of information and communication technologies (ICTs), data analytics, automation, and other digital tools in farming, crop management, livestock management, and food supply chains. ",
        link: "/weather"
    })

    return (
        <div>  <section>
            <section id="tab-section">
                <div id="tab-btn-section">
                    <ul>
                        <li id="html-btn" className="tab select-tab" onClick={() => {
                            setInfo({
                                title: "Digital Agriculture and Food Security",
                                des: "Digital agriculture refers to the use of digital technologies, data, and information to enhance various aspects of agricultural practices and food production. The primary goal of digital agriculture is to improve agricultural efficiency, productivity, sustainability, and food security.",
                                des2: "It encompasses the application of information and communication technologies (ICTs), data analytics, automation, and other digital tools in farming, crop management, livestock management, and food supply chains. ",
                                link: "/weather"
                            })
                        }}> Food
                        </li>
                        <li id="css-btn" className="tab" onClick={() => {
                            setInfo({
                                title: "Digital Education Ecosystem",
                                des: "A Digital Education Ecosystem refers to a comprehensive and interconnected system of digital tools, technologies, resources, and platforms that support and enhance the educational process.",
                                des2: "It encompasses various components that facilitate learning, teaching, and administrative tasks in an educational institution or within a broader learning environment. These components include learning management systems (LMS), student information systems (SIS), digital learning resources, and other digital tools and technologies.",
                                link: "/education"
                            })
                        }}> Education </li>
                        <li id="js-btn" className="tab" onClick={() => {
                            setInfo({
                                title: "Digital Healthcare Access",
                                des: "Digital healthcare access refers to the ability of individuals to use digital technologies, such as the internet, mobile apps, and telehealth platforms, to access healthcare services and information. It encompasses a wide range of digital tools and services that enable patients",
                                des2: "Digital healthcare access can be especially valuable in improving healthcare outcomes in underserved or remote areas, reducing healthcare disparities, and enhancing the overall patient experience by providing convenient and timely access to healthcare services. "
                            })
                        }}> Health </li>
                    </ul>
                </div>
                <div id="tab-details">
                    <h1 id="tab-title"> {info.title} </h1>
                    <p id="tab-text" className="tab-dec">
                        {info.des}
                    </p>
                    <p id="tab-text" className="tab-dec">
                        {info.des2}
                    </p>

                    <Link to={info.link}> <button id="tab-btn">  More info... </button> </Link>
                </div>
                <div id="tab-img">
                    <img src="/features.png" alt="" />
                </div>
            </section>
        </section> </div>
    )
}