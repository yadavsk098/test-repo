import React, { useEffect } from "react";
import { redirect, useSearchParams } from "react-router-dom";
import { getAllEvents, handleRegistration } from "../firebase/realtimeDb";

import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Error404 from "../Errors/Error404";
import { UserAuth } from "../context/AuthContext";

const Contain = ({ children }) => {
    return (
        <div className=" w-full h-full flex-1 bg-[#0F1B33]">
            <div className="w-[90%] mx-auto xl:w-cap mt-[6rem] md:mt-[8rem] text-white">
                {children}
            </div>
        </div>
    );
};

const Input = ({ label, type, placeholder }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-white text-sm">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="bg-[#1F2B47] text-white rounded-md p-2"
            />
        </div>
    );
};

const EventRegister = () => {
    const [showErrorPage, setShowErrorPage] = React.useState(false);
    const [event, setEvent] = React.useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    // form
    const [teamName, setTeamName] = React.useState("");
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [teamMemberName, setTeamMemberName] = React.useState("");

    // user session instance from context
    const user = UserAuth();

    const handleAddTeamMember = (e) => {
        let max_participation = 4;

        // e.type keydown or click

        if (teamMemberName === "") return;
        if (teamMembers.includes(teamMemberName)) return;

        if (event.max_participation) max_participation = event.max_participation;

        if (e.type === "click" || e.type === "keydown") {
            if (teamMembers.length >= max_participation) {
                setTeamMemberName("");
                return;
            }

            setTeamMembers((prev) => [...prev, teamMemberName]);
            setTeamMemberName("");
            return;
        }
    };

    const handleTeamMemberRemove = (index) => {
        console.log("remove called on index: ", index);
        const newTeamMembers = [...teamMembers];
        newTeamMembers.splice(index, 1);
        setTeamMembers(newTeamMembers);
    };

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleTeamMemberNameChange = (e) => {
        setTeamMemberName(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTeamMember(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation
        if (teamName === "") return;
        if (teamMembers.length === 0) return;
        console.log({
            user,
        });

        console.log({
            teamName,
            teamMembers,
            uuid: user.user.uid,
            eventId: searchParams.get("eventId"),
            category: searchParams.get("category"),
        });

        const res = await handleRegistration({
            teamName,
            teamMembers,
            uuid: user.user.uid,
            eventId: searchParams.get("eventId"),
            category: searchParams.get("category"),
        });

        console.log(res);
    };

    // TODO user not authenticated will not be shown this page

    useEffect(() => {
        const eventId = searchParams.get("eventId");
        const category = searchParams.get("category");

        // if (!user) {
        //     redirect("/");
        //     return;
        // }
        // console.log("user: ", user);

        if (!eventId) {
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
    }, [searchParams, event]);

    const [isTeam, setIsTeam] = React.useState(true);

    // console.log(event);

    return !showErrorPage ? (
        <Contain>
            <div className="bg-[rgba(217, 217, 217, 1)] text-white w-full grid grid-cols-1 ">
                <div className="flex flex-col gap-5">
                    <img
                        className="w-full object-contain select-none rounded-md"
                        src="/images/event-poster.png"
                        alt=""
                    />
                    <h1 className="font-lostfish text-3xl text-left">
                        {event == null ? (
                            "Loading..."
                        ) : event.title.includes("(") ? (
                            <>
                                {event.title.split("(")[0]}
                                <br />
                                {event.title.split("(")[1].replace(")", "")}
                            </>
                        ) : (
                            event.title
                        )}
                    </h1>
                    <p className="text-left">{event && event.desc}</p>
                    <div className="w-full flex justify-start items-center ">
                        <div className="w-1/2 flex flex-col justify-start items-start">
                            <p className="text-left  w-full">Prize Worth</p>

                            <div className="flex justify-start font-bold text-2xl">
                                <p className="text-center md:text-left  inline-block w-fit ">
                                    &#8377;
                                </p>{" "}
                                <p className="text-center md:text-left  inline-block w-fit ">
                                    {event && String(event.prize_money)}
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-start">
                            <p className="text-left  w-full">Entry Fee</p>
                            <div className="flex justify-start font-bold text-2xl">
                                <p className="text-center md:text-left  inline-block w-fit ">
                                    &#8377;
                                </p>{" "}
                                <p className="text-center md:text-left inline-block w-fit ">
                                    {event && String(event.entry_fee)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1 bg-[#D9D9D9] rounded-full my-10"></div>
                <div className="flex flex-col gap-5 ">
                    <div className="w-[80%] mx-auto">
                        <h2 className="text-left text-xl font-bold">Register as</h2>
                        <div className="w-full my-2 flex justify-center items-center">
                            <div className="w-1/2 text-xl flex gap-2 items-center justify-start  ">
                                {/* radio button input  */}
                                <input
                                    type="radio"
                                    name="team"
                                    id="team"
                                    value="team"
                                    checked={isTeam}
                                    onChange={() => setIsTeam(true)}
                                />
                                <label htmlFor="individual">Team</label>
                            </div>
                            <div className="w-1/2 text-xl flex gap-2 items-center justify-start  ">
                                {/* radio button input  */}
                                <input
                                    type="radio"
                                    name="team"
                                    id="individual"
                                    value="individual"
                                    checked={!isTeam}
                                    onChange={() => setIsTeam(false)}
                                />
                                <label htmlFor="individual">Individual</label>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        id="eventRegistrationForm"
                        className="w-full flex flex-col gap-4"
                    >
                        {isTeam ? (
                            <>
                                <div className="flex flex-col gap-1">
                                    <label
                                        className="text-white text-lg font-bold"
                                        htmlFor="teamName"
                                    >
                                        Team Name
                                    </label>
                                    <input
                                        type="text"
                                        name="teamName"
                                        id="teamName"
                                        placeholder="Team Name"
                                        value={teamName}
                                        onChange={handleTeamNameChange}
                                        className="bg-[#D9D9D9] bg-opacity-[0.3]  text-white rounded-md p-2"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col ">
                                        <label
                                            className="text-white text-lg font-bold"
                                            htmlFor="teamMember"
                                        >
                                            Team Member Name
                                        </label>
                                        <div
                                            className={
                                                `flex  flex-col gap-1 ` +
                                                (teamMembers.length > 0 ? "my-2" : "my-[0.2rem]")
                                            }
                                        >
                                            {teamMembers.length > 0 &&
                                                teamMembers.map((member, index) => (
                                                    <>
                                                        <p
                                                            className="bg-[#D9D9D9]  border group relative text-black rounded-lg w-[calc(100%-3rem)] p-1 px-3"
                                                            key={"teamMember" + index}
                                                        >
                                                            {member}
                                                            <button
                                                                onClick={(e) => {
                                                                    handleTeamMemberRemove(index);
                                                                }}
                                                                type="button"
                                                                className=" opacity-0   group-hover:opacity-[1] hover-none:opacity-[1]   absolute translate-y-[-50%] top-[50%] left-[calc(100%-1rem)]  w-7 h-7 bg-red-600 rounded-md p-1 transition-opacity duration-300"
                                                            >
                                                                <RxCross1 className="w-full h-full text-white" />
                                                            </button>
                                                        </p>
                                                    </>
                                                ))}
                                        </div>
                                        <span className="w-full  flex justify-center items-center gap-2">
                                            <input
                                                type="text"
                                                name="teamMember"
                                                id="teamMember"
                                                value={teamMemberName}
                                                onChange={handleTeamMemberNameChange}
                                                onKeyDown={handleKeyDown}
                                                placeholder={
                                                    event
                                                        ? event.max_participation
                                                            ? teamMembers.length <
                                                              Number(event.max_participation)
                                                                ? "Add Team Member"
                                                                : "Max Limit Reached"
                                                            : teamMembers.length < 4
                                                            ? "Add Team Member"
                                                            : "Max Limit Reached"
                                                        : "Add Team Member"
                                                }
                                                disabled={
                                                    event
                                                        ? event.max_participation
                                                            ? teamMembers.length >=
                                                              Number(event.max_participation)
                                                            : teamMembers.length >= 4
                                                        : false
                                                }
                                                className="bg-[#D9D9D9] bg-opacity-[0.3] flex-1 min-w-min  text-white rounded-md p-2"
                                            />
                                            <button
                                                type="button"
                                                id="addTeamMemberButton"
                                                className="w-10 h-10 p-1 bg-stone-500 cursor-pointer rounded-md "
                                                onClick={handleAddTeamMember}
                                            >
                                                <AiOutlinePlus className="w-full h-full" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </form>
                </div>
                <div className="flex flex-col w-full ">
                    <button
                        type="button"
                        htmlFor="eventRegistrationForm"
                        className="text-center font-lostfish w-[min(100%,30rem)] mx-auto py-2 hover:shadow-lg bg-[#A9CCEC] bg-opacity-[0.2] hover:bg-opacity-[0.4] transition-all backdrop-blur-sm shadow-md rounded-md my-8"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </div>
            </div>
        </Contain>
    ) : (
        <Error404 />
    );
};

export default EventRegister;
