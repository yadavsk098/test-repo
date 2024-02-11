import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import { isUserAlreadyInDb } from "../firebase/realtimeDb";

const Navbar = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const { googleSignIn, logOut, user } = UserAuth();
    const [justSignedIn, setJustSignedIn] = React.useState(false);
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            setJustSignedIn(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => {
            if (justSignedIn && user) {
                // Check if user is already registered
                let registered = true;
                if (!(await isUserAlreadyInDb(user.uid))) {
                    registered = false;
                }
                if (!registered) {
                    console.log("reached here", registered);
                    return navigate("/register");
                }
            }
        })();
    }, [justSignedIn, user]);

    return (
        <div className="w-screen h-auto flex justify-center items-center relative z-[1000]">
            <div
                style={{
                    background:
                        "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
                    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(3.5px)",
                    borderRadius: "18px",
                }}
                className="font-lostfish hidden md:flex justify-center items-center gap-8 text-white mt-4 fixed p-3 top-[1rem] text-xl"
            >
                <Link to="/">Home</Link>

                <Link to="/contact">Contact </Link>

                <img
                    style={{
                        height: "50px",
                    }}
                    src="/saavyas-logo.png"
                />
                <Link to="/events">Events</Link>

                <Link to="/workshops">Workshop</Link>

                {/* {!user ? (
                    <button onClick={handleSignIn} className="mr-10">
                        Register
                    </button>
                ) : (
                    <button onClick={logOut} className="">
                        {" "}
                        Sign Out{" "}
                    </button>
                )} */}
            </div>

            <div
                style={{
                    background:
                        "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
                    boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(3.5px)",
                    // borderRadius: "18px",
                }}
                className=" select-none font-lostfish md:hidden flex justify-between items-center text-white fixed py-3 px-6 top-0 text-xl w-full"
            >
                <h1 className="pt-1">Saavyas</h1>
                {
                    <div
                        className="HAMBURGER-ICON space-y-1.5 h-[20px] relative flex flex-col justify-end"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span
                            className={
                                "transition-all block h-[3px] w-4 bg-white rounded-full" +
                                (menuOpen ? " w-6 translate-y-[8px] rotate-45" : "")
                            }
                        />
                        <span
                            className={
                                "transition-all block h-[3px] w-5 bg-white rounded-full " +
                                (menuOpen ? "w-[0px]" : "")
                            }
                        />
                        <span
                            className={
                                "transition-all block h-[3px] w-6 bg-white rounded-full " +
                                (menuOpen ? " translate-y-[-8.9px] rotate-[-45deg]" : "")
                            }
                        />
                    </div>
                }
                <div
                    className={`absolute ${
                        menuOpen ? "flex" : "hidden"
                    } bg-white text-black flex flex-col p-4 gap-2 top-[53px] w-screen left-0`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <Link to="/">Home</Link>

                    <Link to="/events">Events</Link>

                    <Link to="/workshops">Workshops</Link>

                    <Link to="/contact">Contact</Link>

                    {/* {!user ? (
                        <button onClick={handleSignIn} className="text-left">
                            Sign Up
                        </button>
                    ) : (
                        <button onClick={logOut} className="text-left">
                            Sign Out
                        </button>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
