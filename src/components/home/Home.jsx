import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ settext }) => {
    useEffect(() => {
        settext("Sea Shore Soiree");
    }, []);
    return (
        <>
            <div className="mt-[max(100vh,600px)] z-10 flex justify-center items-center flex-col gap-8 w-[100%] text-white">
                {/* <div className="font-semibold justify-center items-center text-4xl font-lostfish ">
                    About Us
                </div> */}
                <div className="pt-12 w-full md:w-[75%] flex lg:flex-col flex-col justify-center items-center text-center md:text-left text-md xl:w-[1280px] mx-auto">
                    <div className="font-semibold justify-center items-center text-4xl font-lostfish ">
                        About Us
                    </div>
                    <div className="w-full md:w-[75%] flex  lg:flex-row flex-col justify-center items-center text-center md:text-left text-md xl:w-[1280px] mx-auto">
                    <div className="h-full flex justify-center items-center lg:mr-[4rem]  my-[3rem]  max-w-[200px]">
                        {/* lg:ml-[8rem] lg:mx-[4rem]*/}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/e/e6/NIT_Goa_logo.png"
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-3/4 md:text-justify text-left mb-3">
                        SAAVYAS is NIT Goa's very own Techno - Cultural Fest, it comprises of a
                        beautiful balance of various events catering to the very diverse audience of
                        Goa. Students from all over Goa and beyond come together to participate in
                        the event. This year we wish to host the event on a much higher scale and
                        make the fest a grand spectacle and a memorable event.
                    </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center align-center flex-wrap">
                <Link to="/events">
                    <div className="transition-all m-[10px] md:w-[25vw] lg:h-[30vh] w-[60vw] h-[40vh] bg-[#5A7D9A40] hover:bg-[#c1e1fc40] flex flex-col justify-center items-center gap-[2rem]">
                        <span className="font-semibold text-3xl min-[1200px]:text-7xl text-white">
                            Events
                        </span>
                        <span className="font-semibold text-3xl min-[3000px]:text-7xl text-white">
                            40+
                        </span>
                    </div>
                </Link>
                <div className="m-[10px] md:w-[25vw] lg:h-[30vh] w-[60vw] h-[40vh] bg-[#5A7D9A40] flex flex-col justify-center items-center gap-[2rem]">
                    <span className="font-semibold text-3xl min-[1200px]:text-7xl text-white">
                        Colleges
                    </span>
                    <span className="font-semibold text-3xl min-[3000px]:text-7xl text-white">
                        20+
                    </span>
                </div>
            </div>
            {false && (
                <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%]">
                    <div className="font-semibold justify-center items-center text-center text-4xl font-lostfish">
                        Title Sponsors
                    </div>
                    <div className="w-[75%] justify-center items-center text-center text-md">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </div>
                </div>
            )}
            {false && (
                <div className="p-3 flex justify-center items-center flex-col gap-8 w-[100%] mb-5">
                    <div className="font-semibold text-center justify-center items-center text-4xl font-lostfish">
                        Asssociate Sponsors
                    </div>
                    <div className="w-[75%] justify-center items-center text-center text-md">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </div>
                </div>
            )}

            {/* // Android app */}
            {/*<div class="w-full p-4 text-center text-white flex flex-col items-center rounded-lg shadow sm:p-8 ">
                <h5 class="m-8 text-3xl font-lostfish text-gray-900 text-white">
                    Announcing our Android App!
                </h5>
                <p class="mb-5 text-base text-gray sm:text-lg text-center max-w-[800px]">
                    Stay up to date with notifications of the Live event during Saavyas'23. Download
                    our Android app today.
                </p>
                <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        class="w-full max-w-[200px] sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
                    >
                        <svg
                            class="mr-3 w-7 h-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google-play"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            ></path>
                        </svg>
                        <div class="text-left">
                            <div class="mb-1 text-xs">Get in on</div>
                            <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                        </div>
                    </a>
                </div>
            </div> */}
        </>
    );
};

export default Home;
