import React, { useEffect, useState } from "react";
import EventCard from "../utils/cards/EventCard";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";
import Loading from "../Loading/Loading";

const Workshops = ({ settext }) => {
    let [workshops, setWorkshops] = useState(null);

    async function LoadData() {
        let x = await GetDetailsOfEndPoint("events/workshop/");
        setWorkshops(x);
    }

    useEffect(() => {
        settext("Workshops");
        LoadData();
    }, []);

    return (
        <>
            <div className=" mt-[max(50vh,600px)] p-3 w-full flex justify-center items-center flex-col gap-8">
                {workshops ? (
                    <div className="flex w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max items-center flex-col gap-2 max-h-[500px] overflow-y-scroll">
                        {workshops &&
                            Object.keys(workshops).map((key) => (
                                <EventCard event={workshops[key]} eventType={"workshop"} />
                            ))}
                    </div>
                ) : (
                    <>
                        <h1 className="p-[10rem] z-[1] md:text-3xl text-xl flex items-center flex-col w-full">
                            <Loading text={"On the Way!"} />
                        </h1>
                    </>
                )}
            </div>
        </>
    );
};

export default Workshops;
