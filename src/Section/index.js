import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="container">
        <div className="container__header">
            <h2 className="container__title">
                {title}
            </h2>
            {extraHeaderContent}
        </div>
        <div className="container__body">
            {body}
        </div>
    </section>
);

export default Section;