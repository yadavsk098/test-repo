import React, { useEffect, useState } from "react";
import EventCard from "../utils/cards/EventCard";
import { GetDetailsOfEndPoint } from "../firebase/realtimeDb";
import Techinical from "../Techinal/Techinical.jsx";

const Events = ({ settext }) => {
    let [events, setEvents] = useState(null);

    async function LoadData() {
        let x = await GetDetailsOfEndPoint("events/");
        setEvents(x);
    }

useEffect( ()=> {
    settext("Events");
    LoadData();
} ,[]);

    return ( 
    
    // BACKGROUND
        <section className="mt-[max(90vh,600px)] w-full bg-[#111e22] z-[10]">
            <div className=" w-full flex justify-center items-center flex-col gap-8 z-[10]">
                <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish text-white pt-8">
                    Technical Events
                </div>
                <div>
                    {events && events.technical && Object.keys(events.technical).length > 0 ? (
                        <Techinical event={Object.values(events.technical)} eventType="technical" />
                    ) : (
                        <p>No technical events available</p>
                    )}
                </div>
                </div>

            <div className="p-3 w-full  flex justify-center items-center flex-col gap-8">
                <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish text-white">
                    Cultural Events
                </div>
                <div>
                    {events && events.cultural && Object.keys(events.cultural).length > 0 ? (
                        <Techinical event={Object.values(events.cultural)} eventType="cultural" />
                    ) : (
                        <p>No technical events available</p>
                    )}
                </div>
                {/* <div className="flex w-full max-w-[1280px] md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto md:max-h-max  flex-col gap-2 max-h-[500px] overflow-y-scroll items-stretch">
                    {events &&
                        Object.keys(events.cultural).map((key) => (
                            <EventCard
                                key={key}
                                eventType="cultural"
                                event={events.cultural[key]}
                            />
                        ))}
                </div> */}
            </div>
        </section>
    );
};

export default Events;
