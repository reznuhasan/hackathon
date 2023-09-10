import "./HomeSession.css"

export default function HomeSession() {
    return (
        <div>  <section>
            <section id="tab-section">
                <div id="tab-btn-section">
                    <ul>
                        <li id="html-btn" className="tab select-tab"> HTML
                        </li>
                        <li id="css-btn" className="tab"> CSS </li>
                        <li id="js-btn" className="tab"> JavaScript </li>
                    </ul>
                </div>
                <div id="tab-details">
                    <h1 id="tab-title"> HyperText Markup Language </h1>
                    <p id="tab-text" className="tab-dec">
                        HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.
                    </p>
                    <p id="tab-text" className="tab-dec">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus molestiae harum in at numquam nihil
                        placeat corrupti quo quos fugiat.
                    </p>

                    <button id="tab-btn"> Download </button>
                </div>
                <div id="tab-img">
                    <img src="/img/features.png" alt="" />
                </div>
            </section>
        </section> </div>
    )
}