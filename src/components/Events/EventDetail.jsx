import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllEvents } from "../firebase/realtimeDb";
import Error404 from "../Errors/Error404";

let validCategories = ["technical", "cultural", "workshop"];

export const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

export function useHover() {
    const [value, setValue] = React.useState(false);

    const ref = React.useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);

                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );

    return [ref, value];
}

const EventDetail = ({ settext }) => {
    const { category, eventId } = useParams();
    const [event, setEvent] = React.useState(null);
    const [registerBtnRef, registerBtnIsHovered] = useHover();
    const windowWidth = useWindowWidth();

    const [showErrorPage, setShowErrorPage] = React.useState(false);

    useEffect(() => {
        settext("");
        if (!validCategories.includes(category)) {
            setShowErrorPage(true);
            return;
        }

        (async () => {
            const events = await getAllEvents();

            if (!events[category][eventId]) {
                setShowErrorPage(true);
                return;
            }

            setEvent(events[category][eventId]);
        })();
    }, []);

    return !showErrorPage ? (
        <div className={`w-full h-full flex-1 z-[2]`}>
            <div className="w-[90%] mx-auto xl:w-cap mt-[6rem] md:mt-[8rem] text-white">
                {/* hero  */}
                <div className="h-[32rem] w-full bg-[#D9D9D9] bg-opacity-[0.2] rounded-md flex flex-col items-center justify-end">
                    <div className=" w-full flex flex-col md:flex-row md:justify-center md:items-end">
                        <div className="  font-poppins w-full md:flex-1  min-h-[12rem] md:flex md:flex-col md:justify-center md:gap-3 md:min-h-fit md:m-10 ">
                            <h1 className="  font-stuart-little strong text-3xl md:text-4xl text-center md:text-left w-full">
                                {event == null ? (
                                    "Loading..."
                                ) : event.title.includes("(") ? (
                                    <>
                                        {event.title.split("(")[0]}
                                        <br />
                                        {event.title.split("(")[1]}
                                    </>
                                ) : (
                                    event.title
                                )}
                            </h1>
                            <div className="flex justify-center mt-2">
                                <p className="text-center md:text-left text-xl inline-block w-full">
                                    PRIZE WORTH: &#8377;
                                    {event && String(event.prize_money)}
                                </p>{" "}
                            </div>
                            <div className="flex justify-center">
                                <p className="text-center md:text-left text-xl inline-block w-full">
                                    ENTRY FEE: &#8377;
                                    {event && String(event.entry_fee)}
                                </p>{" "}
                                <p className="text-center md:text-left text-xl inline-block w-fit "></p>
                            </div>
                        </div>

                        <Link
                            // to={`/events/${category}/${eventId}`}
                            // to={`/events/register?eventId=${eventId}&category=${category}`}
                            ref={registerBtnRef}
                            // linear gradient bg 241.26deg, rgba(169, 204, 236, 0.2) 29.13%, rgba(90, 125, 154, 0.13) 61.59%),
                            className=" cursor-default w-[80%] my-6  md:w-[17rem]  mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-10"
                        >
                            Register
                            {/* // tooltip */}
                            <div
                                className={`${
                                    registerBtnIsHovered ? "block" : "hidden"
                                } absolute top-[-3.5rem] z-10 bg-[#000] bg-opacity-[0.6] backdrop-blur-sm shadow-md rounded-md p-2 text-sm font-poppins`}
                            >
                                <p className="text-center">Registrations have not started yet</p>
                                <div className="absolute  w-0 h-0 top-full left-[calc(50%-0.5rem)] border-t-black border-t-[10px] border-opacity-[0.6] border-l-transparent border-l-[5px]  border-r-transparent border-r-[5px] "></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* content section  */}
                <div className="w-full mt-[3rem] md:mt-[5rem]">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        About Event
                    </h3>
                    <div className="py-6 flex flex-col gap-3">
                        <h1 className="font-poppins capitalize text-3xl  font-bold text-left w-full">
                            {windowWidth < 768 ? (
                                event == null ? (
                                    "Loading..."
                                ) : event.title.includes("(") ? (
                                    <>
                                        {event.title.split("(")[0]}
                                        <br />
                                        {event.title.split("(")[1]}
                                    </>
                                ) : (
                                    event.title
                                )
                            ) : (
                                event && event.title
                            )}
                        </h1>
                        {event &&
                            event.desc
                                .split("<br/>")
                                .map((each_para) => <p key={each_para}>{each_para}</p>)}
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Event Date:{" "}
                            <span className="font-normal">
                                {event &&
                                    new Date(event.start_time).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </p>
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Event Location: {event && event.vid}
                        </p>
                        <p className="font-poppins font-bold text-left w-full text-lg">
                            Registration Deadline:{" "}
                            <span className="font-normal">
                                {event &&
                                    new Date(event.start_time).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </p>
                    </div>
                    {event && event.doc && (
                        <a
                            target="_blank"
                            href={event.doc}
                            className="cursor-pointer w-[80%] my-6  md:w-[17rem]  mx-auto py-1 flex font-lostfish text-xl justify-center items-center bg-[#A9CCEC] bg-opacity-[0.2] backdrop-blur-sm shadow-md rounded-md mt-5 md:m-10"
                        >
                            More Details &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    )}
                </div>

                {/* image carousel section  */}
                {event && event.event_images && (
                    <div className="w-full md:w-[760px] mx-auto h-[32rem] md:mt-[5rem]">
                        <Carousel slideInterval={5000}>
                            {event.event_images.map((each) => (
                                <img key={each} src={each} alt="..." />
                            ))}
                        </Carousel>
                    </div>
                )}

                {/* sponsors section  */}
                {event && event.sponsors && (
                    <div className="w-full mt-[3rem] md:mt-[5rem]">
                        <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                            Event Sponsors
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-20 mt-10 w-[80%] mx-auto">
                            {event.sponsors &&
                                event.sponsors.map((sponsor, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="w-[7rem] md:w-[10rem] h-[7rem] md:h-[10rem] rounded-full"
                                        />
                                        <p className="font-poppins text-xl font-normal mt-1">
                                            {sponsor.name}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* event rules section */}
                {event && event.rules && (
                    <div className="w-full mt-[3rem] md:mt-[5rem] ">
                        <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                            Rules
                        </h3>
                        <ul className="flex flex-col gap-2 mt-6 list-disc  w-[90%] mx-auto">
                            {event &&
                                event.rules.map((rule, index) => (
                                    <li
                                        key={index}
                                        className="font-poppins text-xl font-normal mt-1"
                                    >
                                        {rule}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}

                {/* event organizers section  */}
                <div className="w-full mt-[3rem] md:mt-[5rem] pb-[3rem] md:pb-[5rem]">
                    <h3 className="font-lostfish text-3xl underline underline-offset-[5px] text-center ">
                        Event Organizers
                    </h3>
                    <div className="w-[80%] mx-auto flex flex-col md:flex-row md:mt-[4rem] gap-4 mt-8">
                        {event &&
                            event.contact &&
                            event.contact.map((each) => (
                                <div
                                    key={each.phone + each.name}
                                    className="flex flex-col min-h-[7rem] w-full bg-gradient-to-t from-[#1D3056] to-transparent rounded-md py-5"
                                >
                                    <div className="flex flex-col flex-1">
                                        <h3 className="capitalize font-poppins text-xl font-bold tracking-wide text-center">
                                            {each.name}
                                        </h3>
                                        <p className="text-center">({each.designation})</p>
                                    </div>

                                    <div>
                                        <p className="text-center text-lg">
                                            Mob. No: <a href={"tel:" + each.phone}>{each.phone}</a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Error404 />
    );
};

export default EventDetail;
