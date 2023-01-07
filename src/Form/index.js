import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__field" placeholder="Co jest do zrobienia?" autofocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;

