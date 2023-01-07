import React from "react";
import "./style.css";

const Buttons = (props) => (
    <div className="container__buttons">
        {props.tasks.length > 0 && (
            <>
                <button className="containerButtons__button">
                    {props.hideTasksDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="containerButtons__button"
                    disabled={props.tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;