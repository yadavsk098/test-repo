import React, { useEffect, useState } from "react";
import AboutCard from "../utils/cards/AboutCard";
import { CoreTeamDetails } from "../firebase/realtimeDb";

function Contact({ settext }) {
    let [teamNames, setteamNames] = useState(null);
    async function LoadCoreTeamData() {
        setteamNames(await CoreTeamDetails());
    }
    useEffect(() => {
        settext("Contact");
        LoadCoreTeamData();
    }, []);

    const [selectedTeamName, setSelectedTeamName] = useState("Core Team");
    return (
        <div className="mt-[max(90vh,600px)] text-white p-3 w-full flex justify-center items-center flex-col gap-8 font-lostfish max-w-[1800px]">
            <div className="font-semibold justify-center items-center md:text-4xl text-2xl font-lostfish">
                Core Teams
            </div>
            <select
                style={{
                    background:
                        "linear-gradient(241.26deg, rgba(169, 204, 236, 0.2) 29.13%, rgba(90, 125, 154, 0.13) 61.59%)",
                    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
                    backdropFilter: " blur(3.5px)",
                }}
                className="w-[90%] md:w-[50%] rounded-md px-4 py-2 text-xl"
                value={selectedTeamName}
                onChange={(e) => setSelectedTeamName(e.target.value)}
            >
                {teamNames &&
                    Object.entries(teamNames).map(([key, value]) => (
                        <option key={key} className="flex text-black" value={key}>
                            {key}
                        </option>
                    ))}
                {/* {teamNames &&
                        teamNames.map((teamName, key) => (
                            <option className="text-black" value={key}>
                                {teamName}
                            </option>
                        ))} */}
            </select>

            {teamNames && (
                <div className="flex w-full md:w-[73%] md:flex-row md:overflow-y-hidden md:overflow-x-auto items-center flex-col gap-2 max-h-[500px] md:max-h-[300px] overflow-y-scroll items-stretch">
                    {teamNames[selectedTeamName].map((user) => (
                        <AboutCard key={user.name} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Contact;
