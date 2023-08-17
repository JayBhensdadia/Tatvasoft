import React from "react";
import { useNavigate } from "react-router-dom";

const BooksList = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/");
    };

    return (
        <>
            <h1>BooksList Page</h1>
            <button onClick={handleButtonClick}>Go to Home!</button>
        </>
    )
};

export default BooksList;