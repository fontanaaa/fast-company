import React from "react";
import useMockData from "../utils/mockData";
const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        console.log("click");
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1>Main</h1>
            <h3>Инициализация данных в Firebase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Start
            </button>
        </div>
    );
};

export default Main;
