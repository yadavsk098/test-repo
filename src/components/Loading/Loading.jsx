import React from "react";
import { GiIronHulledWarship } from "react-icons/gi";
import "./Loading.css";

const Loading = ({ text = "Loading..." }) => {
    return (
        <div className="text-center items-center flex flex-col">
            <GiIronHulledWarship className="loading-animation text-9xl mb-[1rem]" />
            {text}
        </div>
    );
};

export default Loading;
