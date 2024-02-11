import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CodingClub.css";
const CodingClub = () => {
    return (
        <Link to="codingclubnitg">
            <section className="transition-all hidden md:flex hover:bg-[green] attribute ripple w-full p-2 items-center justify-center text-s">
                <span className="text-center">
                    Made with <span className="heart text-[red]">&nbsp; ❤ &nbsp;</span> by Coding
                    Club NIT Goa
                </span>
            </section>
        </Link>
    );
};

export default CodingClub;
