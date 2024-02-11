import React, { useEffect, useState } from "react";
import { GetDetailsOfEndPoint, GetDetailsOfEndPointSnapshot } from "../firebase/realtimeDb";

const Notification = () => {
    let [isNew, setisNew] = useState(false);
    let [notificationText, setnotificationText] = useState("");
    async function LoadData() {
        let x = await GetDetailsOfEndPoint("/web_notification");
        GetDetailsOfEndPointSnapshot("/web_notification", (data) => {
            setisNew(data.new);
            setnotificationText(data.text);
        });
    }
    useEffect(() => {
        LoadData();
    }, []);

    return (
        <div
            style={{ display: isNew ? "flex" : "none", backgroundColor: "#FFF3CD" }}
            className="w-full flex justify-center items-center z-[2000] fixed"
        >
            <div className="w-full flex justify-between text-black px-5 py-1 max-w-7xl">
                <div style={{ flex: 9 }} className="notification">
                    {notificationText}
                </div>
                <div
                    style={{ flex: 1, height: "100%" }}
                    onClick={() => setisNew(false)}
                    className="close btn cursor-pointer flex items-center justify-center"
                >
                    <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black  hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
