import React from "react";

function ClearCard({ children, className = "", callback = null }) {
    return (
        <div
            onClick={() => {
                if (callback) callback();
            }}
            style={{
                background:
                    "linear-gradient(241.26deg,rgba(169, 204, 236, 0.2) 29.13%,rgba(90, 125, 154, 0.13) 61.59%)",
            }}
            className={
                "backdrop-blur-[3.5px] shadow-[2px_2px_12px_2px_rgba(0,0,0,0.25)] w-[40%] lg:w-[30%] md:text-xl h-[150px] flex justify-center items-center rounded-md" +
                " " +
                className
            }
        >
            {children}
        </div>
    );
}

export default ClearCard;
