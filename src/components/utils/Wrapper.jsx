import React, { useEffect, useState } from "react";
import "./Wrapper.css";

function Wrapper({ children, text = "Sea Shore Soiree" }) {
    let [mytext, setmytext] = useState("");
    useEffect(() => {
        setmytext(text);
    }, [text]);
    return (
        <section className="relative bg-contain bg-top bg-no-repeat w-full mx-auto z-[0] text-white gap-[6rem] md:gap-[10rem] flex flex-col justify-center items-center">
            {/* <img
                src="./images/bg.png"
                style={{ zIndex: "-100000" }}
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-10]"
                alt=""
            /> */}
            <div
                style={{ minWidth: "100%", minHeight: "100vh" }}
                className="absolute top-0 left-0 w-full min-h-1/2 object-cover z-[-10] flex justify-center overflow-hidden"
            >
                {/* <lottie-player
                    src="/animation.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    style={{
                        flexShrink: "0",
                        minWidth: "1000px",
                        minHeight: "100%",
                    }}
                    autoplay
                ></lottie-player> */}
                <video src="./maingif.mp4" loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>

                <div className=" z-[1] absolute flex h-[80vh] justify-center items-center text-left text-4xl md:text-6xl p-[20px] h-80 font-lostfish pt-[200px] md:pt-[400px] text-left md:w-full">
                    {mytext}
                </div>
            </div>
            {children}
        </section>
    );
}

export default Wrapper;
