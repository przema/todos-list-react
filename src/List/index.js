import React from "react";
import "./style.css";

const List = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li
                className={`list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__itemContent${task.done ? " list__itemContent--done" : ""}`}>
                    {task.content}
                </span>
                <button class="list__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default List;