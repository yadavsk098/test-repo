import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = ({ settext }) => {
    useEffect(() => {
        settext("");
    }, []);
    return (
        <div className="w-full flex justify-center items-center select-none">
            <div
                style={{ minWidth: "300px" }}
                className="w-1/3 py-48 flex items-center justify-center flex-col"
            >
                <img className="w-full z-[10]" src="/images/error404bg.png" alt="" />

                <Link
                    to={`/`}
                    // linear gradient bg 241.26deg, rgba(169, 204, 236, 0.2) 29.13%, rgba(90, 125, 154, 0.13) 61.59%),
                    className="w-[80%] text-white md:w-[15rem] md:min-[8rem] mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-5"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default Error404;
